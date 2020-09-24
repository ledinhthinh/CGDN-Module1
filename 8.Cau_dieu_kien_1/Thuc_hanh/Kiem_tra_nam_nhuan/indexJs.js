let year = parseInt(prompt('Enter a year'));
if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
    alert(year + " la nam nhuan");
} else {alert( year +" khong phai la nam nhuan")}