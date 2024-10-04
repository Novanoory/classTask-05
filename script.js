const ageCalculate = () => {
    const today = new Date();
    const inputDate = new Date(document.getElementById("input").value);

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    };

   const currentYear = today.getFullYear();
   const currentMonth = today.getMonth() + 1;
   const currentDay = today.getDate();

   if(isFutureDate(birthDetails, currentYear, currentMonth, currentDate)) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
   }

const {years, months, date} = calculateAge(
    birthDetails,
    currentYear,
    currentMonth,
    currentDate
);
  displayResult(days,months,year);
};

const isFutureDate = (
    birthDetails,
    currentYear,
    currentMonth,
    currentDate
) => {
    return (
        birthDetails.year > currentYear ||
        (birthDetails.year === currentYear && 
        (birthDetails.month > currentMonth ||
        (birthDetails.month === currentMonth &&
        birthDetails.Date > currentDate)))            
     );
   };

const calculateAge = (birthDetails, currentYear, currentMonth, currentDate) => {
    let years = currentYear - birthDetails.year;
    let months, days;

   if (currentMonth < birthDetails.month) {
    years--;
    months = 12 - (birthDetails.month - currentMonth)
   } else {
      month = currentMonth - birthDetails.month;
   }

   if (currentDate < birthDetails.Date) {
    months--;
    const lastmonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const daysInLastMonth = getDaysInLastMonth (lastMonth, currentYear);
    days = daysInLastMonth - (birthDetails.date - currentDate);
   }else{
       days = currentDate - birthDetails.date;
   }
   return {months, years, days};
   };

   const getDaysInMonth = (month, year) => {
    const isLeapYear = year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
    const getDaysInMonth = [
        31,
        isLeapYear ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    return getDaysInMonth[month - 1];
   };







