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


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["te","tas606","commercial"]
scale.ylim=[10000,25000];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the moisture --------------------------
mo={};
mo.key=["mo_7","mo_8","mo_9","mo_10"]
mo.ylim=[300,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temp --------------------------
temp={};
temp.key=["t_2896_begin","t_2896_peak","t_2896_end","t_14_begin","t_14_peak","t_14_end","t_19_begin","t_19_peak","t_19_end","saltrh_2_t","saltrh_11_t"]
temp.ylim=[15,70];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory20);

// ---------------------below is data defination for the humidity --------------------------
del_temp={};
del_temp.key=["deltat_2896_heat","deltat_2896_cool","deltat_14_heat","deltat_14_cool","deltat_19_heat","deltat_19_cool"]
del_temp.ylim=[-3,30];
del_temp.xlabel="TIME";
del_temp.ylabel="DELTA TEMPERATURE (CELSIUS)";
del_temp.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the humidity ----------------
rh={};
rh.key=["saltrh_11_rh","saltrh_2_rh"]
rh.ylim=[40,110];
rh.xlabel="TIME";
rh.ylabel="HUMIDITY(PERCENT)";
rh.color = d3.scaleOrdinal(d3.schemeCategory10);

  
  
// ----------------------below is to obtain the data from the sensors------------------------------
var data1;
var url =   "https://data.sparkfun.com/output/21mmonra90TYXlx9KL4J.json"
d3.json(url,  function (error,json) {
    //if (error) return console.warn(error);
    if (error) throw error;
    json.forEach(function(d) {
        //d.timestamp = format(d.timestamp);
        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
        d.deltat_2896_heat=d.t_2896_peak-d.t_2896_begin;
        d.deltat_2896_cool=d.t_2896_peak-d.t_2896_end;
        d.deltat_14_heat=d.t_14_peak-d.t_14_begin;
        d.deltat_14_cool=d.t_14_peak-d.t_14_end;
        d.deltat_19_heat=d.t_19_peak-d.t_19_begin;
        d.deltat_19_cool=d.t_19_peak-d.t_19_end;
        //dataset.date = parseDate(d.date);
        //dataset.close = +d.close;
      //if (d.saltrh_3_tp == "NaN") {d.saltrh_3_tp=NaN}
      //if (d.saltrh_3_rh == "NaN") {d.saltrh_3_rh=NaN}
    });
   
    data1=json;
    console.log(data1)
  //       console.log(active1)
  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
  //   remove all lines that has NaN
  //data1=data1.filter(function(el){
  //  return el.saltrh_3_rh != "NaN";
  //});
  //console.log(JSON.stringify(data1, null, ' '));
  // ----------------------above is to obtain the data ------------------------------
  
  plot_figure(scale,data1);
  plot_figure(mo,data1);
  plot_figure(temp,data1);
  plot_figure(del_temp,data1);
  plot_figure(rh,data1);
})  // json
  

 
