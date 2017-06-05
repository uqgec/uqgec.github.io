

function millisecondsToStr (milliseconds) {
    // TIP: to find current time in milliseconds, use:
    // var  current_time_milliseconds = new Date().getTime();

    function numberEnding (number) {
        return (number > 1) ? 's' : '';
    }

    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + ' year' + numberEnding(years);
    }
    //TODO: Months! Maybe weeks? 
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
        return days + ' day' + numberEnding(days);
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
        return hours + ' hour' + numberEnding(hours);
    }
    var minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
        return minutes + ' minute' + numberEnding(minutes);
    }
    var seconds = temp % 60;
    if (seconds) {
        return seconds + ' second' + numberEnding(seconds);
    }
    return 'less than a second'; //'just now' //or other string you like;
}



var $jsName = document.querySelector('.name');
var $jsValue = document.querySelector('.jsValue');

$jsName.addEventListener('input', function(event){
  $jsValue.innerHTML = $jsName.value;
}, false);
//var $jsName2 = document.querySelector('.name2');
var $jsValue2 = document.querySelector('.jsValue2');

$jsName.addEventListener('input', function(event){
  $jsValue2.innerHTML = $jsName.value;
}, false);


// ---- this is extremely successful ------
var $jsValue3 = document.querySelector('.jsValue3');
$jsValue3.innerHTML =285


var $jsValue4= document.querySelector('.jsValue4');
var data_sensor;
    
    var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
   var time_now= new Date()
   
    $.ajax({
      url:'https://data.sparkfun.com/output/w5nEnw974mswgrx0ALOE.json',
      //data:{page:1,sample:1,limit:1}, // working, getting the latest one! 2017-06-05 11:03
      data:{limit:1}, 
      //async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
      async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
      dataType:'jsonp',
       }).done(function (json) {
        json.forEach(function(d) {
        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/187
      });
      data_sensor=json;
      console.log(data_sensor)
      //$jsValue4.innerHTML =data_sensor[0]['evap1']
      //$jsValue4.innerHTML =Math.round((new Date() -data_sensor[0]['timestamp'])/60000)+' min ago'
      $jsValue4.innerHTML =millisecondsToStr(new Date() -data_sensor[0]['timestamp'])+' ago'
      } );
//      $jsValue4.innerHTML =50
