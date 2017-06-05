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
    
    
    $.ajax({
      url:'https://data.sparkfun.com/output/w5nEnw974mswgrx0ALOE.json',
      //data:{page:1,sample:1,limit:1}, // working, getting the latest one! 2017-06-05 11:03
      data:{limit:1}, 
      //async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
      async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
      dataType:'jsonp',
      }).done(function (json) {
      data_sensor=json;
      console.log(data_sensor)
      //$jsValue4.innerHTML =data_sensor[0]['evap1']
      $jsValue4.innerHTML =data_sensor[0]['timestamp']

      } );
//      $jsValue4.innerHTML =50
