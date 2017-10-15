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
uv.ylim=[-50,2000];
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
tc.key=["tc","tp_box_6","tp_box_7"]; 
tc.ylim=[10,35];
tc.xlabel="TIME";
tc.ylabel="TEMPERATURE (CELSIUS)";
tc.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for relative humidity --------------------------
rh={};
rh.key=["rh","rh_box_6","rh_box_7"]; 
rh.ylim=[0,105];
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
winddir.ylabel="WINDDIRECTION";
winddir.color = d3.scaleOrdinal(d3.schemeCategory10);
// ----------------------below is to obtain the data from the sensors------------------------------



var data_weather;
public_key_weather='19DQXLG0blTAy3oGY9jpcyV4ayBM';
grf_weather={ir,uv,patm,tc,rh,lt,rain,windspeed,winddir}

function data_treatment_weather(d){
        d.uv_up=d.uv_up;
        d.lt=d.lt;
    };

