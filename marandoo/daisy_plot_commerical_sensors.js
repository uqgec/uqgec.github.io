


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["scale1","scale2","scale3"]
scale.ylim=[-200,2500];
scale.xlabel="TIME";
scale.ylabel="SCALE READING (g)";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);



// ---------------------below is data defination for the moisture --------------------------
mo={};
mo.key=["vw_1","vw_2","vw_3"]
mo.ylim=[0,30];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR RAW READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
temp={};
temp.key=["starttemp_c_1","starttemp_c_2","starttemp_c_3"];
temp.ylim=[10,40];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for suction --------------------------
suction={};
suction.key=["deltat_c_1","deltat_c_2","deltat_c_3"]; 
suction.ylim=[0.55,4];
suction.xlabel="TIME";
suction.ylabel="TEMPERATURE RISE(CELSIUS)";
suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_sensor_daisy;
public_key_daisy='QXKmLPzy8GU1l8be4dzvsGjPeKN';
grf_sensor={scale,mo,temp,suction}

function data_treatment_sensor_daisy(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

//get_data_and_plot(data_sensor,public_key_daisy,grf_sensor,{treatment_func:data_treatment_sensor})
//// ----------------------below is to obtain the data from the sensors------------------------------
//var data1;
//var url =   "https://data.sparkfun.com/output/RMxqjA6nRXfbm01raooM.json"
//d3.json(url,  function (error,json) {
//    //if (error) return console.warn(error);
//    if (error) throw error;
//    json.forEach(function(d) {
//        //d.timestamp = format(d.timestamp);
//        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
//        d.su1=-d.su1;
//        d.su2=-d.su2;
//        d.su3=-d.su3;
//        d.su4=-d.su4;
//        //d.del_temp_28e5_heating=d.suht_28e5_peak-d.suht_28e5_begin;
//        //d.del_temp_28e5_cooling=d.suht_28e5_peak-d.suht_28e5_end;
//        //d.del_temp_2847_heating=d.suht_2847_peak-d.suht_2847_begin;
//        //d.del_temp_2847_cooling=d.suht_2847_peak-d.suht_2847_end;
//        //dataset.date = parseDate(d.date);
//        //dataset.close = +d.close;
//      //if (d.saltrh_3_tp == "NaN") {d.saltrh_3_tp=NaN}
//      //if (d.saltrh_3_rh == "NaN") {d.saltrh_3_rh=NaN}
//    });
//   
//    data1=json;
//    console.log(data1)
//  //       console.log(active1)
//  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
//  //   remove all lines that has NaN
//  //data1=data1.filter(function(el){
//  //  return el.saltrh_3_rh != "NaN";
//  //});
//  //console.log(JSON.stringify(data1, null, ' '));
//  // ----------------------above is to obtain the data ------------------------------
//  
//  plot_figure(scale,data1);
//  plot_figure(mo,data1);
//  plot_figure(temp,data1);
//  plot_figure(suction,data1);
//})  // json
//  

 
