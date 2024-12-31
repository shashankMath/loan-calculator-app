import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  // Input values for loan, FD, MF, and tax (user enters values directly as percentages)
  loanPrincipal: number = 10000000;
  annualInterestRate: number = 8.65;
  loanTenureYears: number = 20;
  fdPrincipal: number = 4000000;
  fdAnnualInterestRate: number = 8;
  mfPrincipal: number = 2000000;
  mfAnnualInterestRate: number = 12;
  taxRate: number = 30;
  annualAdvancePayment: number = 500000; // Prepayment amount

  // Output arrays for tracking values
  emiPayment: number = 0;
  emiList: any[] = [];
  fdInterestList: any[] = [];
  mfInterestList: any[] = [];
  fdInterestBeforeTaxList: any[] = [];
  mfInterestBeforeTaxList: any[] = [];
  fdInterestAfterTaxList: any[] = [];
  mfInterestAfterTaxList: any[] = [];
  netPaymentList: any[] = [];
  remainingPrincipalList: any[] = [];
  interestPaidList: any[] = [];
  principalPaidList: any[] = [];

  // Flag to toggle visibility of Principal Paid and Interest Paid columns
  showPrincipalPaid: boolean = true;
  showInterestPaid: boolean = true;

  // Variables to store completion year and month
  completionYear: number = 0;
  completionMonth: number = 0;

  // New property to store interest savings
  originalTotalInterest: number = 0;
  totalInterestPaid: number = 0;
  interestSavings: number = 0;
  interestSavedPercentage: string = '';
  totalAdvancePayment = 0;
  actualSavings = 0;
  actualSavingAfterRepayment: number = 0;

  // Function to calculate EMI and break it down
  calculateEMI() {
    const monthlyInterestRate = this.annualInterestRate / 12 / 100;
    const totalMonths = this.loanTenureYears * 12;

    // EMI Calculation (fixed EMI for the reducing balance method)
    this.emiPayment = (this.loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    let remainingPrincipal = this.loanPrincipal;

    // Clear previous data
    this.emiList = [];
    this.fdInterestBeforeTaxList = [];
    this.mfInterestBeforeTaxList = [];
    this.fdInterestAfterTaxList = [];
    this.mfInterestAfterTaxList = [];
    this.netPaymentList = [];
    this.principalPaidList = [];
    this.interestPaidList = [];
    this.remainingPrincipalList = [];

    let month = 0;
    let year = 1;



    // Loop through the months and calculate payment details
    while (remainingPrincipal > 0 && month < totalMonths) {
      month++;
      const interestPaid = remainingPrincipal * monthlyInterestRate;
      let principalPaid = this.emiPayment - interestPaid;

      // Ensure principal doesn't go negative
      if (remainingPrincipal - principalPaid < 0) {
        principalPaid = remainingPrincipal;
      }

      remainingPrincipal -= principalPaid;

      // Store EMI details
      this.emiList.push({ year, month: month % 12 || 12, emi: this.emiPayment });

      // Store other data
      this.interestPaidList.push(interestPaid);
      this.principalPaidList.push(principalPaid);
      this.remainingPrincipalList.push({ month, remainingPrincipal: Math.max(remainingPrincipal, 0) });

      // Generate FD and MF interest after tax and net payments
      const fdInterest = this.fdPrincipal * (this.fdAnnualInterestRate / 100 / 12);
      const mfInterest = this.mfPrincipal * (this.mfAnnualInterestRate / 100 / 12);

      const fdInterestAfterTax = fdInterest * (1 - this.taxRate / 100);
      const mfInterestAfterTax = mfInterest * (1 - this.taxRate / 100);

      const totalInterest = fdInterestAfterTax + mfInterestAfterTax;
      const netPayment = this.emiPayment - totalInterest;

      this.fdInterestBeforeTaxList.push(fdInterest);
      this.mfInterestBeforeTaxList.push(mfInterest);
      this.fdInterestAfterTaxList.push({ fdInterestAfterTax });
      this.mfInterestAfterTaxList.push({ mfInterestAfterTax });
      this.netPaymentList.push({ netPayment });

      // At the end of each year, subtract the advance payment
      if (month % 12 === 0) { // End of the year
        // Subtract advance payment from the remaining principal
        remainingPrincipal -= this.annualAdvancePayment;

        // If the loan is paid off, stop the loop
        if (remainingPrincipal <= 0) {
          remainingPrincipal = 0;
          break;
        }

        year++;
      }
    }

    // Calculate loan tenure completion (in years and months)
    this.completionYear = Math.floor(month / 12);
    this.completionMonth = month % 12;
    this.totalInterestPaid = this.interestPaidList.reduce((accum, current) => accum + current, 0);
    this.totalAdvancePayment = this.annualAdvancePayment * this.completionYear;

    // Call the function to calculate interest savings after EMI calculation
    this.calculateInterestSavings();
  }

  calculateInterestSavings() {
    const totalMonths = this.loanTenureYears * 12;
    const monthlyInterestRate = this.annualInterestRate / 12 / 100;

    // Original EMI calculation (fixed for the entire loan tenure)
    const originalEMI = (this.loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    let originalRemainingPrincipal = this.loanPrincipal;
    let originalTotalInterest = 0;

    // Calculate the total interest paid over the original loan term
    for (let month = 0; month < totalMonths; month++) {
      const interestPaid = originalRemainingPrincipal * monthlyInterestRate;
      originalTotalInterest += interestPaid;
      const principalPaid = originalEMI - interestPaid;
      originalRemainingPrincipal -= principalPaid;
    }


    // Store the results for both original and reduced interest
    this.originalTotalInterest = originalTotalInterest;

    this.interestSavings = this.originalTotalInterest - this.totalInterestPaid;

    this.interestSavedPercentage = ((this.originalTotalInterest - this.totalInterestPaid) / this.originalTotalInterest * 100).toFixed(2);

    // Calculate Actual Savings
    this.actualSavings = this.interestSavings - this.totalAdvancePayment;

    this.actualSavingAfterRepayment = ((this.interestSavings - this.totalAdvancePayment) / this.originalTotalInterest * 100)

    // Check if actual savings are more than total advance payments
    if (this.actualSavingAfterRepayment < 0) {
      // Show message to user indicating reconsideration is needed
      alert('Your actual savings are lower than your total advance payments. You may need to reconsider your loan tenure or adjust your advance payments.');
    } else {
      // Continue normal flow if savings are positive
      alert(`You have saved ₹${this.actualSavingAfterRepayment.toFixed(2)} in interest.`);
    }

  }

  // Helper function to toggle visibility of columns
  togglePrincipalPaid() {
    this.showPrincipalPaid = !this.showPrincipalPaid;
  }

  toggleInterestPaid() {
    this.showInterestPaid = !this.showInterestPaid;
  }


  // Function to generate PDF report
  generatePDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Loan Payment and Investment Summary', 10, 10);

    const headers = ['Month', 'EMI', 'Interest Paid', 'Principal Paid', 'Remaining Principal',
      'FD Interest Before Tax (P.M)', 'MF Interest Before Tax (P.M)',
      'FD Interest After Tax (P.M)', 'MF Interest After Tax (P.M)',
      'Net Payment Towards Loan (P.M)'];
    let yOffset = 20;

    // Function to check if a new page is needed
    const checkPageOverflow = (yOffset: number) => {
      if (yOffset > doc.internal.pageSize.height - 20) {
        doc.addPage();
        return 20; // Reset yOffset for the new page
      }
      return yOffset;
    };

    doc.text(headers.join(' | '), 10, yOffset);
    yOffset += 10;

    // Loop through the EMI data and handle pagination
    this.emiList.forEach((item, i) => {
      const row = [
        item.month,
        this.formatCurrency(item.emi),
        this.formatCurrency(this.interestPaidList[i]),
        this.formatCurrency(this.principalPaidList[i]),
        this.formatCurrency(this.remainingPrincipalList[i].remainingPrincipal),
        this.formatCurrency(this.fdInterestBeforeTaxList[i]),
        this.formatCurrency(this.mfInterestBeforeTaxList[i]),
        this.formatCurrency(this.fdInterestAfterTaxList[i].fdInterestAfterTax),
        this.formatCurrency(this.mfInterestAfterTaxList[i].mfInterestAfterTax),
        this.formatCurrency(this.netPaymentList[i].netPayment)
      ];

      yOffset = checkPageOverflow(yOffset); // Check for page overflow
      doc.text(row.join(' | '), 10, yOffset);
      yOffset += 10;
    });

    // Save the PDF file
    doc.save('Loan_Investment_Summary.pdf');
  }

  // Helper method to format numbers as currency
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  }
}
