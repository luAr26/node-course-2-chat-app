// Jan 1st 1970 00:00:00 am
const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

var createdAt = moment().valueOf();
var date = moment(createdAt);
var clock1 = date.format('h:mm a');
console.log(clock1);
