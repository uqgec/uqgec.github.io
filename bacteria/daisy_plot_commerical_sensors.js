


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
scale={};
scale.key=["scale1","scale2"]
scale.ylim=[3000,7000];
scale.xlabel="TIME";
scale.ylabel="SCALE READING (g)";
scale.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
temp={};
temp.key=["hum3","hum4","hum5","hum6"]
temp.ylim=[10,40];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE(CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
hum={};
hum.key=["tmp3","tmp4","tmp5","tmp6"];
hum.ylim=[40,110];
hum.xlabel="TIME";
hum.ylabel="HUMIDITY (PERCENT)";
hum.color = d3.scaleOrdinal(d3.schemeCategory10);


//// ---------------------below is data defination for suction --------------------------
//suction={};
//suction.key=["deltat_c_1","deltat_c_2","deltat_c_3"]; 
//suction.ylim=[40,110];
//suction.xlabel="TIME";
//suction.ylabel="TEMPERATURE RISE(CELSIUS)";
//suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_sensor_daisy;
public_key_daisy='KxGN3omMKNizKAjkVPYLh8rEXmK';
grf_sensor={scale,temp,hum}

function data_treatment_sensor_daisy(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

