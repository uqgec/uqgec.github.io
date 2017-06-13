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
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo2","mo3","mo4","mo5"]
mo.ylim=[100,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);


var data_sensor;
public_key='jwDYgo7DnmtdRDboA0nQ';
grf_2={mo}



get_data_and_plot(data_sensor,public_key,grf_2,{})
//// ----------------------below is to obtain the data from the sensors------------------------------
//var data_sensor;
//var url =   "https://data.sparkfun.com/output/jwDYgo7DnmtdRDboA0nQ.json"
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
//  plot_figure(mo,data_sensor);
//  //plot_figure(temp   ,data_sensor);
//  //plot_figure(del_temp,data_sensor);
//})  // json
  

 
  
  
