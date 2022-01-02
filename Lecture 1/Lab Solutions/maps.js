let months = new Map();

months.set(1, "Jan");
months.set(2, "Feb");
months.set(3, "Mar");
months.set(4, "Apr");
months.set(5, "May");
months.set(6, "Jun");
months.set(7, "Jul");
months.set(8, "Aug");
months.set(9, "Sep");
months.set(10, "Oct");
months.set(11, "Nov");
months.set(12, "Dec");

let whatIsTheCurrentMonth = (month = new Date().getMonth + 1) =>
  months.get(month);
console.log(whatIsTheCurrentMonth(1));
