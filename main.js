const secondsHand  = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand')
const hoursHand = document.querySelector('.hours-hand');

function setDate() {
const date = new Date();
const seconds = date.getSeconds();
const secondsDegrees = ((seconds/60)*360)+90;
secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
const minutes  = date.getMinutes();
const minuteDegrees = minutes*6+90;
minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;
const hours  = date.getHours();
const hoursDegrees = (hours*30)+90;
hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
// console.log(hoursDegrees);
}

setInterval(setDate, 1000);