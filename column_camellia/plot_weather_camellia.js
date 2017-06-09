// -------------------------- above is the function to creat grid lines ---------------


// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1300 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the IR --------------------------
ir={};
ir.key=["ir_up","ir_down"]//,"mo11"];
ir.ylim=[-500,20000];
ir.xlabel="TIME";
ir.ylabel="IR";
ir.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the UV --------------------------
uv={};
uv.key=["uv_up","uv_down"]
uv.ylim=[-50,13000];
uv.xlabel="TIME";
uv.ylabel="ULTRA VIOLET READING";
uv.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the atmospheric pressure --------------------------
patm={};
patm.key=["p"];
patm.ylim=[100700,103000];
patm.xlabel="TIME";
patm.ylabel="ATMOSPHERIC PRESSURE (PA)";
patm.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for temperature --------------------------
tc={};
tc.key=["tc"]; 
tc.ylim=[10,35];
tc.xlabel="TIME";
tc.ylabel="TEMPERATURE (CELSIUS)";
tc.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for relative humidity --------------------------
rh={};
rh.key=["rh"]; 
rh.ylim=[20,120];
rh.xlabel="TIME";
rh.ylabel="RELATIVE HUMIDITY (PERCENT)";
rh.color = d3.scaleOrdinal(d3.schemeCategory10);
  
// ---------------------below is data defination for light --------------------------
lt={};
lt.key=["lt","vis_up","vis_down"]; 
lt.ylim=[-50,2400];
lt.xlabel="TIME";
lt.ylabel="LIGHT";
lt.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for rain --------------------------
rain={};
rain.key=["dlyrainmm","rainmm"]; 
rain.ylim=[-7,30];
rain.xlabel="TIME";
rain.ylabel="RAIN (MM)";
rain.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for windspeed --------------------------
windspeed={};
windspeed.key=["wdgstkph","wdgstkph10m","wdspdkph","wdspdkphavg2m"]; 
windspeed.ylim=[-3,20];
windspeed.xlabel="TIME";
windspeed.ylabel="WINDSPEED (M/S)";
windspeed.color = d3.scaleOrdinal(d3.schemeCategory10);
  
// ---------------------below is data defination for winddirction --------------------------
winddir={};
winddir.key=["wdgstdir","wdgstdir10m","wddir","wddiravg2m"]; 
winddir.ylim=[-10,361];
winddir.xlabel="TIME";
winddir.ylabel="WINDSPEED (M/S)";
winddir.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for battery -------------------------
batt={};
batt.key=["batt"]; 
batt.ylim=[3.9,4.3];
batt.xlabel="TIME";
batt.ylabel="BATTERY VOLTAGE (VOLTS)";
batt.color = d3.scaleOrdinal(d3.schemeCategory10);
// ----------------------below is to obtain the data from the sensors------------------------------



var data_weather;
public_key='q5YnK9A9qMCqoNqv78XD';
grf={ir,uv,patm} //tc,rh,lt,rain,windspeed,winddir,batt}

function data_treatment_weather(d){
        d.uv_up=d.uv_up*100.0;
        d.lt=d.lt*100.0;
    };


get_data_and_plot(data_weather,public_key,grf,{treatment_func:data_treatment_weather})




//var data_weather;
//var url =   "https://data.sparkfun.com/output/v0NOoW7RLRU3gYpAGdKW.json"
//d3.json(url,  function (error,json) {
//    //if (error) return console.warn(error);
//    if (error) throw error;
//    json.forEach(function(d) {
//        //d.timestamp = format(d.timestamp);
//        
//        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
//        d.uv_up=d.uv_up*100.0;
//        d.lt=d.lt*100.0;
//        //if (d.p == 0) {d.p=NaN}
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
//    data_weather=json;
//    console.log(data_weather)
//  //       console.log(active1)
//  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
//  //   remove all lines that has NaN
//  //data_weather=data_weather.filter(function(el){
//  //  return el.saltrh_3_rh != "NaN";
//  //});
//  //console.log(JSON.stringify(data_weather, null, ' '));
//  // ----------------------above is to obtain the data ------------------------------
//  
//  plot_figure(ir,data_weather);
//  plot_figure(uv   ,data_weather);
//  plot_figure(patm ,data_weather);
//  plot_figure(tc,data_weather);
//  plot_figure(rh,data_weather);
//  plot_figure(lt   ,data_weather);
//  plot_figure(rain ,data_weather);
//  plot_figure(windspeed,data_weather);
//  plot_figure(winddir,data_weather);
//  plot_figure(batt,data_weather);
//})  // json
//  
//
// 
//  
//  
