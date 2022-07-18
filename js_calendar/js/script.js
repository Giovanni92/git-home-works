function monthCalendar(month, year, CalendarEl) {
    const nameOfMonth = monthCalendar.ALL_MONTHES[month];
    const titleName = `${nameOfMonth} / ${year}`;

    CalendarEl.querySelector('.header__month').innerText = titleName;

    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setMonth(month);
    firstDayOfMonth.setFullYear(year);

    const firstWeekDayMonth = firstDayOfMonth.getDay();

    const firstRenderDay = new Date(firstDayOfMonth);

    const firstDayShift = firstWeekDayMonth === 0 ? 6 : firstWeekDayMonth - 1
    firstRenderDay.setDate(firstRenderDay.getDate() - firstDayShift);

    const lastDateOfMonth = new Date(firstDayOfMonth);
    lastDateOfMonth.setMonth(month + 1);

    lastDateOfMonth.setDate(0);

    const lastWeekDayMonth = lastDateOfMonth.getDay();
    const lastRenderDay = new Date(lastDateOfMonth);
    const lastDayShift = (7 - lastWeekDayMonth) % 7;

    lastRenderDay.setDate(lastRenderDay.getDate() + lastDayShift);

    console.log({ firstRenderDay, lastDayShift, firstWeekDayMonth, lastWeekDayMonth, firstDayOfMonth, lastDateOfMonth });

    const days = [];

    for
        (const renderDay = new Date(firstRenderDay);
        renderDay <= lastRenderDay;
        renderDay.setDate(renderDay.getDate() + 1)
    ) {
        console.log(renderDay);

        const dayEl = document.createElement('li');

        dayEl.className = '.date__number';

        if (renderDay.getMonth() !== month) {
            dayEl.classList.add('.date__number--not-in-month');
        }

        const link = document.createElement('a')
        link.setAttribute('aria-label', renderDay.toLocaleString());
        link.href = `?days=${renderDay.toJSON()}`;

        link.innerText = renderDay.getDate();

        dayEl.append(link);

        days.push(dayEl);
    }

    const daysAll = document.querySelector('.dates__numbers');

    daysAll.innerText = '';

    
    daysAll.append(...days);
    
    
}

monthCalendar.ALL_MONTHES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];



let currentDay = new Date();
const CalendarEl = document.querySelector('.header');
const buttonPrev = CalendarEl.querySelector('.header__buttonleft');
const buttonNext = CalendarEl.querySelector('.header__buttonright');

const calendar = {
    month: currentDay.getMonth(),
    fullYear: currentDay.getFullYear()
};
monthCalendar(calendar.month, calendar.fullYear, CalendarEl);

console.log(buttonPrev);
console.log(buttonNext);

buttonPrev.addEventListener('click', function (){
    const firstDayOfMonth = new Date(calendar.fullYear, calendar.month, 1);
    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() -1 );

    calendar.month = firstDayOfMonth.getMonth();
    calendar.fullYear = firstDayOfMonth.getFullYear();
    monthCalendar(calendar.month, calendar.fullYear, CalendarEl);
});


buttonNext.addEventListener('click', function (){
    const firstDayOfMonth = new Date(calendar.fullYear, calendar.month, 1);
    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1 );

    calendar.month = firstDayOfMonth.getMonth();
    calendar.fullYear = firstDayOfMonth.getFullYear();
    monthCalendar(calendar.month, calendar.fullYear, CalendarEl);
});