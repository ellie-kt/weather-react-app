import React from "react";

export default function FormatDate (props) {
    let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let weekday = weekdays[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) { hours = `0${hours}`; }
    
    let minutes = props.date.getMinutes();
    if (minutes < 10) { minutes = `0${minutes}`;}

    let date = props.date.getDate();
if (date === 1 || date === 21|| date === 31) {
date = `${date}st`;
} else if(date == 2 || date === 22){
  date = `${date}nd`;
} else if(date === 3 || date === 23){
  date = `${date}rd`;
} else {
  date = `${date}th`;
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let month = months[props.date.getMonth()];

    return (
     <div> {weekday}, {date} {month}
     <br />
     {hours}:{minutes}

    </div>
    )
}