function calculateDifference() {
    var date1 = moment(document.getElementById('date1').value);
    var date2 = moment(document.getElementById('date2').value);

    var daysDiff = date2.diff(date1, 'days');
    var weeksDiff = date2.diff(date1, 'weeks');
    var monthsDiff = date2.diff(date1, 'months');
    var yearsDiff = date2.diff(date1, 'years');

    document.getElementById('days').innerText = daysDiff;
    document.getElementById('weeks').innerText = weeksDiff;
    document.getElementById('months').innerText = monthsDiff;
    document.getElementById('years').innerText = yearsDiff;
}

function changeTitle() {
    document.querySelector('h1').innerText = "Date Difference Calculator - Modified";
}
