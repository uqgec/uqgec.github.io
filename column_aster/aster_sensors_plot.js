//http://stackoverflow.com/questions/1114024/constructors-in-javascript-objects  


// -------------------------- below is the function to creat grid lines ---------------
// gridlines in x axis function
function make_x_gridlines(x_ax) {		
    return d3.axisBottom(x_ax)
        .ticks(5)
}

// gridlines in y axis function
function make_y_gridlines(y_ax) {		
    return d3.axisLeft(y_ax)
        .ticks(5)
}
// -------------------------- above is the function to creat grid lines ---------------


// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//evap1,evap2,mo23,mo25,mo27,mo29,mo31,mo33,mo35,mo37,mo39,mo41,t26_begin,t26_end,t26_peak,t45_begin,t45_end,t45_peak,t57_begin,t57_end,t57_peak,t7b_begin,t7b_end,t7b_peak,te2_begin,te2_end,te2_peak,tfb_begin,tfb_end,tfb_peak,timestamp
var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["mo31",]
scale.ylim=[100,300];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo22","mo23","mo24","mo25","mo26","mo27","mo28"]
mo.ylim=[100,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

//// ---------------------below is data defination for the UV --------------------------
//temp={};
//temp.key=["t26_begin","t45_begin","t57_begin"
//  ,"t7b_begin","te2_begin","tfb_begin"]
//temp.ylim=[10,50];
//temp.xlabel="TIME";
//temp.ylabel="TEMPERATURE (CELSIUS)";
//temp.color = d3.scaleOrdinal(d3.schemeCategory10);
//
//// ---------------------below is data defination for the atmospheric pressure --------------------------
//del_temp={};
//del_temp.key=["dt26_heat","dt26_cool","dt45_heat","dt45_cool","dt57_heat","dt57_cool","dt7b_heat","dt7b_cool","dte2_heat","dte2_cool","dtfb_heat","dtfb_cool"];
//del_temp.ylim=[-3,20];
//del_temp.xlabel="TIME";
//del_temp.ylabel="DELTA TEMPERTURE (CELSIUS)";
//del_temp.color = d3.scaleOrdinal(d3.schemeCategory20);
var data_sensor;
public_key='w5nEnw974mswgrx0ALOE';
grf={scale,mo}
// ----------------------below is to obtain the data from the sensors------------------------------


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }

function get_data_and_plot(public_key,time_out,retry_limit,data_size)
    {
    time_out = defaultFor(time_out, 10000)
    retry_limit = defaultFor(retry_limit, 3)
    data_size = defaultFor(data_size, {page:1})
    $.ajax({
          url:'https://data.sparkfun.com/output/'+public_key+'.json',
          //data:{page:1,sample:1,limit:1}, // working, getting the latest one! 2017-06-05 11:03
          //data:{limit:1},
          data:data_size,
          //async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jque
          async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery
          dataType:'jsonp',
          tryCount : 0,
          retryLimit :retry_limit,
          timeout: time_out ,
          success : function (json) {
                json.forEach(function(d) {
                   d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/187
                });
                data_sensor=json;
                console.log(data_sensor)
//                grf.forEach(function(a) {
//                    plot_figure(a,d);
//                });

                // 
                for (var key in grf) {
                    plot_figure(grf[key],data_sensor);
                    };
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
                        setTimeout ( function(){ get_data_and_plot(public_key) }, $.ajaxSetup().retryAfter );
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
                        setTimeout ( function(){ get_data_and_plot(public_key) }, $.ajaxSetup().retryAfter );
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


//$.when( get_data_and_plot(public_key);
//   ).then(
// plot_figure(scale,data_sensor);
// plot_figure(mo,data_sensor);
//); 
get_data_and_plot(public_key)
//
//                plot_figure(scale,data_sensor);
//                plot_figure(mo,data_sensor);
////var data_sensor;
//var url =   "https://data.sparkfun.com/output/w5nEnw974mswgrx0ALOE.json"
//d3.json(url,  function (error,json) {
//    //if (error) return console.warn(error);
//    if (error) throw error;
//    json.forEach(function(d) {
//        //d.timestamp = format(d.timestamp);
//        
//        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
//
//        //dataset.date = parseDate(d.date);
//        //dataset.close = +d.close;
//      //if (d.saltrh_3_tp == "NaN") {d.saltrh_3_tp=NaN}
//      //if (d.saltrh_3_rh == "NaN") {d.saltrh_3_rh=NaN}
//    });
//   
//    data_sensor=json;
//    console.log(data_sensor)
//  //       console.log(active1)
//  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
//  //   remove all lines that has NaN
//  //data_sensor=data_sensor.filter(function(el){
//  //  return el.saltrh_3_rh != "NaN";
//  //});
//  //console.log(JSON.stringify(data_sensor, null, ' '));
//  // ----------------------above is to obtain the data ------------------------------
//  
//  plot_figure(scale,data_sensor);
//  plot_figure(mo,data_sensor);
//  //plot_figure(temp   ,data_sensor);
//  //plot_figure(del_temp,data_sensor);
//})  // json
  

 
  
  
