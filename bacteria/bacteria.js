


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
su={};
su.key=["su0","su1","su2","su3","su4","su5"]
su.ylim=[-1,22];
su.xlabel="TIME";
su.ylabel="TEMP. RISE FOR SUC. SENSOR(g)";
su.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
temp2={};
temp2.key=["hum0","hum1","hum2"]
temp2.ylim=[10,40];
temp2.xlabel="TIME";
temp2.ylabel="TEMPERATURE(CELSIUS)";
temp2.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
hum2={};
hum2.key=["tmp0","tmp2"];
hum2.ylim=[40,110];
hum2.xlabel="TIME";
hum2.ylabel="HUMIDITY (PERCENT)";
hum2.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the temperature --------------------------
mo={};
mo.key=["mo0","mo1","mo2","mo3","mo4","mo5"];
mo.ylim=[200,600];
mo.xlabel="TIME";
mo.ylabel="DIEL. MOIST. ";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);


var data_bacteria;
public_key_bacteria='OpvZwgO8mksxJGg88PxJS18pVAb';
grf_bacteria={su,temp2,hum2,mo}

function data_treatment_weather_daisy(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

