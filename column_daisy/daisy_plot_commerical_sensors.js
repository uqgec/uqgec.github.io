

// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["mo0","mo10"]//,"mo11"];
scale.ylim=[0,400];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the moisture --------------------------
mo={};
mo.key=["mo1","mo2","mo3","mo4","mo5","mo6","mo7","mo8","mo9"]//,"mo11"];
mo.ylim=[0,400];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
temp={};
temp.key=["tpf0","tp11","tp8d","tpa3","tp1","tp2","tp3","tp4"];
temp.ylim=[3,50];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for suction --------------------------
suction={};
suction.key=["su1","su2","su3","su4"]; 
suction.ylim=[0,20000];
suction.xlabel="TIME";
suction.ylabel="SOIL SUCTION (PA)";
suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_sensor_daisy;
public_key_daisy='RMxqjA6nRXfbm01raooM';
grf_sensor={scale,mo,temp,suction}

function data_treatment_sensor_daisy(d){
        d.su1=-d.su1;
        d.su2=-d.su2;
        d.su3=-d.su3;
        d.su4=-d.su4;
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

 
