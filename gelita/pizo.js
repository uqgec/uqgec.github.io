


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')

// ---------------------below is data defination for the moisture --------------------------
tmp={};
tmp.key=["tmp0","tmp1","tmp2"];
tmp.legend=["air temperature","borehole 1","borehole 1"];
tmp.ylim=[0,50];
tmp.xlabel="TIME";
tmp.ylabel="TEMPERATURE(CELSIUS)";
tmp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
pretmp={};
pretmp.key=["pretmp1","pretmp2"];
pretmp.legend=["water depth borehole 1","water depth borehole 1"];
pretmp.ylim=[2200,3000];
pretmp.xlabel="TIME";
pretmp.ylabel="WATER DEPTH (mm)";
pretmp.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
pre={};
pre.key=["pre0","pre1","pre2"];
pre.legend=["Atmosphere","Pressure Borehole 1","Pressure Borehole 2"];
pre.ylim=[900,1300];
pre.xlabel="TIME";
pre.ylabel="PRESSURE(MBAR)";
pre.color = d3.scaleOrdinal(d3.schemeCategory10);


var data_pizo;
public_key_pizo='zYmKOMGKArTZwlAmmAAEfYYrrPd';
grf_pizo={tmp,pretmp,pre};

function data_treatment_pizo(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
        d.pretmp1=d.pretmp1*10.;
        d.pretmp2=d.pretmp2*10.;
}

