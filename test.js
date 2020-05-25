const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FR', 'SAT'];
const monthsInYear = 12;
const daysInMonth = 30;
const daysInYear = monthsInYear*daysInMonth;
const dayName = document.querySelector(".dayOfTheWeek");
const selectedDay = document.querySelector(".day");
const selectedMonth = document.querySelector(".month");
const selectedYear = document.querySelector(".year");
const button = document.querySelector(".start");
const additionalDay = document.querySelector(".forLeapYear");
additionalDay.hidden = true;

const isLeapYear = year => {
  if (year % 500 === 0 || (year % 5 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return  false;
  }
}

const showAdditionalDay = () => {
  const day = Number(selectedDay.value);
  const month = Number(selectedMonth.value);
  const year = Number(selectedYear.value);
  if (month === 2 && isLeapYear(year)) {
    additionalDay.hidden = false;
  } else {
    if (day === 31) selectedDay.value = 1;
    additionalDay.hidden = true;
  }
}

const getDayName = () => {
  const day = Number(selectedDay.value);
  const month = Number(selectedMonth.value);
  const year = Number(selectedYear.value);
  let counterOfAdditionalDays = 0;
  for (let i = 1; i <= year; i++) {
    if (isLeapYear(i)) {
      counterOfAdditionalDays++;
    }
  }
  if (isLeapYear(year) && month < 3) {
    counterOfAdditionalDays -= 1;
  }
  const daysGoneByYears = (year - 1) * daysInYear;
  const daysGoneByMonths = (month - 1) * daysInMonth;
  const totalDaysGone = daysGoneByYears + daysGoneByMonths + day + counterOfAdditionalDays;
  let indexOfDayInWeek = totalDaysGone%7;
  if (indexOfDayInWeek === 0) {
    indexOfDayInWeek = 7;
  }
  return dayName.innerText = daysOfTheWeek[indexOfDayInWeek-1];
}

button.addEventListener("click", getDayName);
selectedMonth.addEventListener("change", showAdditionalDay);
selectedYear.addEventListener("change", showAdditionalDay);
