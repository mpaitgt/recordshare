export default {
  convertDate: function(date) {
    let 
      month = new Date(date).getMonth(),
      day = new Date(date).getDate(),
      year = new Date(date).getFullYear();
    return `${month + 1}/${day}/${year}`
  }
}