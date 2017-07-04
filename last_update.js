


// this following things are also successful
var $jsValue_aster= document.querySelector('.jsValue_aster');
var public_aster='w5nEnw974mswgrx0ALOE';

var $jsValue_bougainvillea= document.querySelector('.jsValue_bougainvillea');
var public_bougainvillea='J4g8nMZrV9TDyqX31x5L';

var $jsValue_camellia= document.querySelector('.jsValue_camellia');
var public_camellia='q5YnK9A9qMCqoNqv78XD';


var $jsValue_daisy= document.querySelector('.jsValue_daisy');
var public_daisy='RMxqjA6nRXfbm01raooM';

var $jsValue_area51_redmud= document.querySelector('.jsValue_area51_redmud');
var public_area51_redmud='21mmonra90TYXlx9KL4J';

var $jsValue_concrete_curing= document.querySelector('.jsValue_concrete_curing');
var public_concrete_curing='jwDYgo7DnmtdRDboA0nQ';

var $jsValue_compacted_redmud= document.querySelector('.jsValue_compacted_redmud');
var public_compacted_redmud='Vpr5RDVV3VTagYD9L196';

var $jsValue_coal_tailings= document.querySelector('.jsValue_coal_tailings');
var public_coal_tailings='9J2rX3QZ94s5RJ9LjrbN';

var data_sensor;



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


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
var time_now= new Date()
    
function get_the_latest_json(input,public_key)
    {
    var offset = new Date().getTimezoneOffset();
       
    $.ajax({
          url:'https://data.sparkfun.com/output/'+public_key+'.json',
          //data:{page:1,sample:1,limit:1}, // working, getting the latest one! 2017-06-05 11:03
          data:{limit:1}, 
          //async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
          async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery-ajax
          dataType:'jsonp',
          tryCount : 0,
          retryLimit :3,
          timeout: 1000 ,
          success : function (json) {
                json.forEach(function(d) {
                   d.timestamp = d3.timeHour.offset(format(d.timestamp),-offset/60);  // http://stackoverflow.com/questions/187
                });
                data_sensor=json;
                console.log(data_sensor)
                //$jsValue4.innerHTML =data_sensor[0]['evap1']
                //$jsValue4.innerHTML =Math.round((new Date() -data_sensor[0]['timestamp'])/60000)+' min ago'
                //$jsValue4.innerHTML =millisecondsToStr(new Date() -data_sensor[0]['timestamp'])+' ago'
                input.innerHTML=millisecondsToStr(new Date() -data_sensor[0]['timestamp'])+' ago'
                //input.innerHTML='bad'
                return data_sensor
            }, 
          error : function(xhr, textStatus, errorThrown ) {
	       wait(300)    
	    //alert(xhr.responseText)
            if (textStatus == 'timeout') {
		//input.innerHTML='bad gateway'
		//return
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    //https://stackoverflow.com/questions/10024469/whats-the-best-way-to-retry-an-ajax-request-on-failure-using-jquery
                    setTimeout ( function(){ get_the_latest_json(input,public_key) }, $.ajaxSetup().retryAfter );
                    //$.ajax(this);
                    return;
                }            
                return;
            }
            if (xhr.status == 500) {
		input.innerHTML='bad gateway1'
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    $.ajax(this);
                    return;
                }            
                return;
                //handle error
		//return
            } else {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    //https://stackoverflow.com/questions/10024469/whats-the-best-way-to-retry-an-ajax-request-on-failure-using-jquery
                    setTimeout ( function(){ get_the_latest_json(input,public_key) }, $.ajaxSetup().retryAfter );
                    //$.ajax(this);
                    //return;
                }            
                //return;
                //handle error
		//input.innerHTML='bad gateway2'
		//return
            }//else
        } //error
    
    
    });//ajax
    }; //function

//function function2(b,data_sensor) {
//    b =millisecondsToStr(new Date() -data_sensor[0]['timestamp'])+' ago'
//}
////
//function2($jsValue4.innerHTML,get_the_latest_json())

get_the_latest_json($jsValue_aster,public_aster)
get_the_latest_json($jsValue_bougainvillea,public_bougainvillea)
get_the_latest_json($jsValue_camellia,public_camellia)
get_the_latest_json($jsValue_daisy,public_daisy)
get_the_latest_json($jsValue_area51_redmud,public_area51_redmud)
get_the_latest_json($jsValue_concrete_curing,public_concrete_curing)
get_the_latest_json($jsValue_coal_tailings,public_coal_tailings)
get_the_latest_json($jsValue_compacted_redmud,public_compacted_redmud)
//get_the_latest_json($jsValue5,'RMxqjA6nRXfbm01raooM')
//      $jsValue4.innerHTML =50
//get_the_latest_json().done(function (d){
//$jsValue4.innerHTML =millisecondsToStr(new Date() -data_sensor[0]['timestamp'])+' ago'
//})
