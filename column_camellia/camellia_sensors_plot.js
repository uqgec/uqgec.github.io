
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
scale.key=["mo39","mo41"]
scale.ylim=[100,600];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo23","mo25","mo27","mo31","mo33","mo35","mo37"]
mo.ylim=[100,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the UV --------------------------
temp={};
//temp.key=["t26_begin","t26_end","t26_peak","t45_begin","t45_end","t45_peak","t57_begin","t57_end"
//  ,"t57_peak","t7b_begin","t7b_end","t7b_peak","te2_begin","te2_end","te2_peak","tfb_begin","tfb_end","tfb_peak"]
temp.key=["t26_begin","t45_begin","t57_begin"
  ,"t7b_begin","te2_begin","tfb_begin"]
temp.ylim=[10,50];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the atmospheric pressure --------------------------
del_temp={};
del_temp.key=["dt26_heat","dt26_cool","dt45_heat","dt45_cool","dt57_heat","dt57_cool","dt7b_heat","dt7b_cool","dte2_heat","dte2_cool","dtfb_heat","dtfb_cool"];
del_temp.ylim=[-3,20];
del_temp.xlabel="TIME";
del_temp.ylabel="DELTA TEMPERTURE (CELSIUS)";
del_temp.color = d3.scaleOrdinal(d3.schemeCategory20);

var data_sensor;
public_key='q5YnK9A9qMCqoNqv78XD';
grf={scale,mo,temp,del_temp}

// ----------------------below is to obtain the data from the sensors------------------------------

function data_treatment(d) {

   d.uv_up=d.uv_up*100.0;
   d.lt=d.lt*100.0;
   //if (d.p == 0) {d.p=NaN}
   d.dt26_heat=d.t26_peak-d.t26_begin;
   d.dt26_cool=d.t26_peak-d.t26_end;
   d.dt45_heat=d.t45_peak-d.t45_begin;
   d.dt45_cool=d.t45_peak-d.t45_end;
   d.dt57_heat=d.t57_peak-d.t57_begin;
   d.dt57_cool=d.t57_peak-d.t57_end;
   d.dt7b_heat=d.t7b_peak-d.t7b_begin;
   d.dt7b_cool=d.t7b_peak-d.t7b_end;
   d.dte2_heat=d.te2_peak-d.te2_begin;
   d.dte2_cool=d.te2_peak-d.te2_end;
   d.dtfb_heat=d.tfb_peak-d.tfb_begin;
   d.dtfb_cool=d.tfb_peak-d.tfb_end;
   };


get_data_and_plot(public_key,grf,{treatment_func:data_treatment})




