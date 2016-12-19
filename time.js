var hour = 8;
var minute= 50;
var period = "am";
function detTime(hour, minute, period){
  if (period== "am"){
    var postTime = " in the morning";
  } else {
    var postTime = " in the evening";
  }
switch (1){
  case minute < 30: return "just after "+hour + postTime;
    default: return "al   most " + (hour+ 1) + postTime;
}
}
console.log(detTime(8,25,"am"));
