export class CreditCard {
  constructor(){
    this.ccnumber = "378282246310005";
    this.month = 12;
    this.year = 2020;
  }

  doLuhnCheck(ccNumber) {
    if (/[^0-9-\s]+/.test(ccNumber)) {
      return false;
    }

    let checksum = 0,
        digit = 0,
        isEven = false;
    for (var n = ccNumber.length - 1; n >= 0; n--) {
        digit = parseInt(ccNumber.charAt(n), 10);

        if (isEven) {
            if ((digit *= 2) > 9) {
                digit -= 9;
            }
        }

        checksum += digit;
        isEven = !isEven;
    }

    return (checksum % 10) == 0;
  }

  validate() {
    if(this.doLuhnCheck(this.ccnumber) && !this.isExpired(this.month, this.year))
      this.message = "Credit Card is Valid!";
    else
      this.message = "Invalid Credit Card";
  }

  isExpired(month, year){
    let currentDate = new Date(),
        currentYear = currentDate.getFullYear();

     if (currentYear > year) {
         return true;
     } else if (currentYear === year
             && (month - 1) < currentDate.getMonth()) {
         // Months are zero-indexed, Jan = 0, Feb = 1...
         return true;
     } else {
         return false;
     }
  }
}
