//http://stackoverflow.com/questions/1114024/constructors-in-javascript-objects  




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
scale.key=["mo9",]
scale.ylim=[100,500];
scale.xlabel="TIME";
scale.ylabel="SCALE READING";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
mo={};
mo.key=["mo0","mo1","mo2","mo3","mo4","mo5","mo6","mo7","mo8"]
mo.ylim=[100,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);



// ---------------------below is data defination for the MOISTRE SENSOR --------------------------
temp={};
temp.key=["temp1","temp2","temp3","temp4","temp5","temp6","temp7","temp8"]
temp.ylim=[14,70];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE(Celsius)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);


suction={};
suction.key=["suction1","suction2","suction3","suction4","suction5","suction6","suction7","suction8"]
suction.ylim=[-1,5];
suction.xlabel="TIME";
suction.ylabel="SUCTION(m)";
suction.color = d3.scaleOrdinal(d3.schemeCategory10);



var data_sensor_boug;
public_key_boug='J4g8nMZrV9TDyqX31x5L';
grf_boug={scale,mo,temp,suction}


  

 
  
  
