


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
dp={};
dp.key=["dp0","tmp3"]
dp.ylim=[-1,50];
dp.xlabel="TIME";
dp.ylabel="DIELECTRIC PERMITIVITY";
dp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
temp2={};
temp2.key=["dhttmp0","gstemp0","pretmp0","pretmp1","tmp0","tmp1","tmp4","tmp8"]
temp2.ylim=[10,50];
temp2.xlabel="TIME";
temp2.ylabel="TEMPERATURE(CELSIUS)";
temp2.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
ec={};
ec.key=["ec0","tmp2"];
ec.ylim=[0,2000];
ec.xlabel="TIME";
ec.ylabel="EC (MS/M)";
ec.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the temperature --------------------------
hum={};
hum.key=["hum0","hum1","hum2","hum3","tmp7","dhthum0"];
hum.ylim=[0,110];
hum.xlabel="TIME";
hum.ylabel="HUMIDITY";
hum.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
pre={};
pre.key=["pre0","pre1"];
pre.ylim=[1000,1300];
pre.xlabel="TIME";
pre.ylabel="PRESSURE";
pre.color = d3.scaleOrdinal(d3.schemeCategory10);

var data_bacteria;
public_key_bacteria='NKObXwPj2Lt1P6pl4Mb4TzGDe4Y';
grf_bacteria={dp,temp2,ec,hum,pre}

function data_treatment_weather_daisy(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

