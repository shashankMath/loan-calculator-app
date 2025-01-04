import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { jsPDF } from 'jspdf';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  fdInterestBeforeTaxPerMonth: number = 0;
  mfInterestBeforeTaxPerMonth: number = 0;
  fdInterestAfterTaxPerMonth: number = 0;
  mfInterestAfterTaxPerMonth: number = 0;
  netPaymentPerMonth: number = 0;
  constructor(private sanitizer: DomSanitizer) { }

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
  actualSavingAfterRepayment: string = '';
  totalPaymentMadeTillDate: number = 0;
  totalPrincipalPaid: number = 0;
  interestMessage: SafeHtml = '';

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

      // Generate FD and MF interest before and after tax
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
    this.totalPaymentMadeTillDate = this.emiList.reduce((accum, current) => accum + current.emi, 0) + this.totalAdvancePayment;
    this.totalPrincipalPaid = this.principalPaidList.reduce((accum, current) => accum + current, 0);

    // Summary variables for display
    this.fdInterestBeforeTaxPerMonth = this.fdInterestBeforeTaxList[this.fdInterestBeforeTaxList.length - 1];
    this.mfInterestBeforeTaxPerMonth = this.mfInterestBeforeTaxList[this.mfInterestBeforeTaxList.length - 1];
    this.fdInterestAfterTaxPerMonth = this.fdInterestAfterTaxList[this.fdInterestAfterTaxList.length - 1]?.fdInterestAfterTax;
    this.mfInterestAfterTaxPerMonth = this.mfInterestAfterTaxList[this.mfInterestAfterTaxList.length - 1]?.mfInterestAfterTax;
    this.netPaymentPerMonth = this.netPaymentList[this.netPaymentList.length - 1]?.netPayment;

    // Call the function to calculate interest savings after EMI calculation
    this.calculateInterestSavings();
  }

  calculateInterestSavings() {
    const totalMonths = this.loanTenureYears * 12;
    const monthlyInterestRate = this.annualInterestRate / 12 / 100;
    let avgInterestAmtForRemainingTenure = 0;

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

    // Calculate the percentage savings
    this.interestSavedPercentage = ((this.originalTotalInterest - this.totalInterestPaid) / this.originalTotalInterest * 100).toFixed(2);

    // Calculate the remaining months after considering the advance payments
    const remainingMonths = totalMonths - (this.completionYear * 12 + this.completionMonth);

    // Calculate years from the remaining months
    const remainingYears = Math.floor(remainingMonths / 12);

    const remainingMonthsInYear = remainingMonths % 12;

    // Calculate the average interest per month for the remaining tenure
    if (remainingMonths > 0) {
      avgInterestAmtForRemainingTenure = this.interestSavings / remainingMonths;
    } else {
      avgInterestAmtForRemainingTenure = 0;
    }

    const avgMonthlyInterest = this.interestSavings / remainingMonths;
    const avgYearly = avgMonthlyInterest * 12;   

    // Set the message to display in the HTML, highlighting the amounts in green
    let message = '';
    if (this.interestSavings > 0) {
      // Add interest savings summary if there's savings
      message += `
      <div class="interest-message" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); max-width: 600px;">
        <h3 style="text-align: center; color: #4CAF50;">Interest Savings Summary</h3>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">You've saved a total of <strong style="color: green;">${this.formatCurrency(this.interestSavings)}</strong> in interest.</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">This represents a savings of <strong style="color: green;">${this.interestSavedPercentage}%</strong> compared to your original loan payments.</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">Your savings span a total of <strong style="color: green;">${remainingYears} year(s) ${remainingMonthsInYear > 0 ? `,${remainingMonthsInYear} month(s)` : ''} (OR) ${remainingMonths} month(s)</strong>.</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">That means you would save:</p>
        <ul style="font-size: 16px; line-height: 1.6; color: #333;">
          <li><strong style="color: #4CAF50;">Average Monthly:</strong> ${this.formatCurrency(avgMonthlyInterest)} in interest.</li>
          <li><strong style="color: #4CAF50;">Average Annually:</strong> ${this.formatCurrency(avgYearly)} in interest.</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">This means that your payments will be significantly reduced over time!</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">Keep up the great work on managing your finances!</p>
      `;
    } else {
      // If no interest savings, show alert to encourage advance payments
      message += `
        <div class="interest-message" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); max-width: 600px; ">
        <h3 style="text-align: center; color: #f44336;">Interest Savings Alert</h3>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">It seems that there are no significant interest savings at this point.</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">Consider making advance payments to reduce the interest amount over the remaining loan tenure.</p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">The more you pay in advance, the faster you can pay off your loan and reduce the interest burden.</p>
      `;
    }

    message += `
      
       <h4 style="color: #4CAF50;">Loan and Investment Breakdown:</h4>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>EMI</strong> ${this.formatCurrency(this.emiPayment)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>FD Interest Before Tax (P.M):</strong> ${this.formatCurrency(this.fdInterestBeforeTaxPerMonth)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>MF Interest Before Tax (P.M):</strong> ${this.formatCurrency(this.mfInterestBeforeTaxPerMonth)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>FD Interest After Tax (P.M):</strong> ${this.formatCurrency(this.fdInterestAfterTaxPerMonth)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>MF Interest After Tax (P.M):</strong> ${this.formatCurrency(this.mfInterestAfterTaxPerMonth)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>Net Payment(EMI - FD + MF)(P.M):</strong> ${this.formatCurrency(this.netPaymentPerMonth)}</p>

<!-- Loan Tenure Completion with Optional Months -->
<p style="font-size: 16px; line-height: 1.6; color: #333;">
    <strong>Loan Tenure Completion:</strong> 
    ${this.completionYear} year(s)
    ${this.completionMonth > 0 ? `and ${this.completionMonth} month(s)` : ''}
</p>

<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>Original Total Interest:</strong> ${this.formatCurrency(this.originalTotalInterest)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>Paid Total Interest:</strong> ${this.formatCurrency(this.totalInterestPaid)}</p>

<!-- Additional Total Payment Details -->
<h4 style="color: #4CAF50;">Total Payment Summary:</h4>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>Total Advance Payment Made:</strong> ${this.formatCurrency(this.totalAdvancePayment)}</p>
<p style="font-size: 16px; line-height: 1.6; color: #333;"><strong>Total Payment Made Till End of ${this.completionYear} year(s):</strong> ${this.formatCurrency(this.totalPaymentMadeTillDate)}</p>
<p style="font-size: 14px; line-height: 1.6; color: #666; font-style: italic;">This includes all Total EMI(s) & Advance Payments made over the years.</p>
</div>

    `;

    this.interestMessage = this.sanitizer.bypassSecurityTrustHtml(message);

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
