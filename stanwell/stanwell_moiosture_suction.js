


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
mo={};
mo.key=["mo0","mo1","mo2","mo3","mo4","mo5","mo6","mo7","mo8","mo9"]
mo.ylim=[200,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the SCALE --------------------------
su={};
su.key=["su0","su1","su2","su3","su4","su5","su6","su7","su8","su9"]
su.ylim=[-1,20];
su.xlabel="TIME";
su.ylabel="SUCTION";
su.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
temp={};
temp.key=["tmp0","tmp1","tmp2","tmp3","tmp4","tmp5","tmp6","tmp7","tmp8","tmp9"]
temp.ylim=[10,40];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE(CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);



//// ---------------------below is data defination for suction --------------------------
//suction={};
//suction.key=["deltat_c_1","deltat_c_2","deltat_c_3"]; 
//suction.ylim=[40,110];
//suction.xlabel="TIME";
//suction.ylabel="TEMPERATURE RISE(CELSIUS)";
//suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_sensor_daisy;
public_key_daisy='avrgmxl6xPI6reAwzqWzcp4b9G8';
grf_sensor={mo,su,temp}

function data_treatment_sensor_daisy(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

