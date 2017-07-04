

// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["commercial","te"]
scale.ylim=[11000,15000];
scale.xlabel="TIME";
scale.ylabel="SCALE READING (g)";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo_7","mo_8","mo_9","mo_10"]
mo.ylim=[100,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
temp={};
temp.key=["t_2896_begin","t_28a7_begin","t_2870_begin","saltrh_2_t","saltrh_11_t","sutp_0_temp","sutp_3_temp"]
temp.ylim=[10,40];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (Celsius)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);

//
delta_t={};
delta_t.key=["delta_t_2896_heat","delta_t_28a7_heat","delta_t_2870_heat","delta_t_2896_cool","delta_t_28a7_cool","delta_t_2870_cool"]
delta_t.ylim=[-1,5];
delta_t.xlabel="TIME";
delta_t.ylabel="TEMPERATURE (Celsius)";
delta_t.color = d3.scaleOrdinal(d3.schemeCategory10);


//
rh={};
rh.key=["saltrh_2_rh","saltrh_11_rh"]
rh.ylim=[50,110];
rh.xlabel="TIME";
rh.ylabel="RELATIVE HUMIDITY";
rh.color = d3.scaleOrdinal(d3.schemeCategory10);

// permitivity
perm={};
perm.key=["sutp_0_mo","sutp_3_mo"]
perm.ylim=[0,90];
perm.xlabel="TIME";
perm.ylabel="DIELECTRIC PERMITIVITY";
perm.color = d3.scaleOrdinal(d3.schemeCategory10);

// salinity
salt={};
salt.key=["sutp_0_salinity","sutp_3_salinity"]
salt.ylim=[10000,30000];
salt.xlabel="TIME";
salt.ylabel="SALINITY (PPM)";
salt.color = d3.scaleOrdinal(d3.schemeCategory10);


function data_treatment_compacted_redmud(d){
d.delta_t_2896_heat=d.t_2896_peak-d.t_2896_begin;
d.delta_t_2896_cool=d.t_2896_peak-d.t_2896_end;
d.delta_t_28a7_heat=d.t_28a7_peak-d.t_28a7_begin;
d.delta_t_28a7_cool=d.t_28a7_peak-d.t_28a7_end;
d.delta_t_2870_heat=d.t_2870_peak-d.t_2870_begin;
d.delta_t_2870_cool=d.t_2870_peak-d.t_2870_end;
};

var data_compacted_redmud;
public_key_area51='Vpr5RDVV3VTagYD9L196';
grf_compacted_redmud={scale,mo,temp,delta_t,rh,perm,salt};


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
  

 
  
  
