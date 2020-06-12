export default {
  convertDate: function(date) {
    let 
      month = new Date(date).getMonth(),
      number = new Date(date).getDate(),
      year = new Date(date).getFullYear(),
      monthNames = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August',
        'September', 
        'October', 
        'November', 
        'December'
      ];

      function day(date) {
        let numArray = date.toString().split('').map(item => parseInt(item));
        let digits = numArray.length;
        let first = numArray[0];
        let last = numArray[numArray.length - 1];
      
        if ((digits === 1 && first === 1) || (first > 1 && last === 1)) {
          return `${date}st`;
        } else if ((digits === 1 && first === 2) || (first > 1 && last === 2)) {
          return `${date}nd`
        } else if ((digits === 1 && first === 3) || (first > 1 && last === 3)) {
          return `${date}rd`
        } else {
          return `${date}th`;
        }
      }

    return `${monthNames[month]} ${day(number)}`
  }
}