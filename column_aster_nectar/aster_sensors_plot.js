

// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["mo31",]
scale.ylim=[350,460];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo22","mo23","mo24","mo25","mo26","mo27","mo28"]
mo.ylim=[300,700];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
temp={};
temp.key=["temp1","temp2","temp3","temp4","temp5","temp6","temp7","temp8"]
temp.ylim=[14,90];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE(Celsius)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);


suction={};
suction.key=["suction1","suction2","suction3","suction4","suction5","suction6","suction7","suction8"]
suction.ylim=[-1,5];
suction.xlabel="TIME";
suction.ylabel="TEMPERATURE RISE(Celsius)";
suction.color = d3.scaleOrdinal(d3.schemeCategory10);



function data_treatment_sensor_aster(d){
}

var data_sensor_aster;
public_key_aster='N3KvAD1XmKc1P6BlaAxyTwNdLJY';
grf_aster={scale,mo,temp,suction}


//$.when( get_data_and_plot(public_key);
//   ).then(
// plot_figure(scale,data_sensor);
// plot_figure(mo,data_sensor);
//); 
//get_data_and_plot(data_sensor,public_key,grf,{})
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
  

 
  
  
