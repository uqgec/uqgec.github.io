


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')

// ---------------------below is data defination for the moisture --------------------------
tmp={};
tmp.key=["tmp0","tmp1","tmp2"];
tmp.legend=["Air Temperature","Borehole DZ1.2","Borehole DZ1.2"];
tmp.ylim=[0,50];
tmp.xlabel="TIME";
tmp.ylabel="TEMPERATURE(CELSIUS)";
tmp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
pretmp={};
pretmp.key=["pretmp1","pretmp2"];
pretmp.legend=["Water Depth Borehole DZ1.2","Water Depth Borehole DZ1.2"];
pretmp.ylim=[2200,3000];
pretmp.xlabel="TIME";
pretmp.ylabel="WATER DEPTH (mm)";
pretmp.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
pre={};
pre.key=["pre0"];
pre.legend=["Atmospheric Pressure"];
pre.ylim=[980,1040];
pre.xlabel="TIME";
pre.ylabel="PRESSURE(MBAR)";
pre.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
bore12={};
bore12.key=["pre1","pre2"];
bore12.legend=["Absolute Pressure From Borehole DZ1.2","Absolute Pressure From Borehole DZ1.2"];
bore12.ylim=[1250,1300];
bore12.xlabel="TIME";
bore12.ylabel="PRESSURE(MBAR)";
bore12.color = d3.scaleOrdinal(d3.schemeCategory10);

battery={};
battery.key=["volt0"];
battery.legend=["Battery Voltage"];
battery.ylim=[8,14];
battery.xlabel="TIME";
battery.ylabel="VOLTAGE(volts)";
battery.color = d3.scaleOrdinal(d3.schemeCategory10);

var data_pizo;
public_key_pizo='zYmKOMGKArTZwlAmmAAEfYYrrPd';
grf_pizo={tmp,pretmp,pre,bore12,battery};

function data_treatment_pizo(d){
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
        d.pretmp1=d.pretmp1*10.;
        d.pretmp2=d.pretmp2*10.;
        d.volt0=d.volt0/2.0*3.0/1024.*12.;
}

