


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
dox={};
//dox.key=["dox0","dox1","dox2","dox3","dox4","dox5","dox6"]
//dox.key=["dox0","dox1","dox2","dox3","dox5","dox6"]
dox.key=["dox0","dox1","dox2","dox3","dox6"]
dox.legend=["dox0","dox1","dox2","dox3","dox6"]
dox.ylim=[000,600];
dox.xlabel="TIME";
dox.ylabel="OXYGEN1";
dox.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the SCALE --------------------------
wox={};
wox.key=["wox0","wox1","wox2","wox3","wox4"]
wox.legend=["wox0","wox1","wox2","wox3","wox4"]
wox.ylim=[0,300];
wox.xlabel="TIME";
wox.ylabel="OXYGEN2";
wox.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the moisture --------------------------
drh={};
drh.key=["drh0","drh1","drh2","drh3","drh6"]
drh.legend=["drh0","drh1","drh2","drh3","drh6"]
drh.ylim=[0,100];
drh.xlabel="TIME";
drh.ylabel="HUMIDITY(PERCENT)";
drh.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the moisture --------------------------
dtp={};
dtp.key=["dtp0","dtp1","dtp2","dtp3","dtp6"]
dtp.legend=["dtp0","dtp1","dtp2","dtp3","dtp6"]
dtp.ylim=[0,40];
dtp.xlabel="TIME";
dtp.ylabel="TEMPERATURE(CELSIUS)";
dtp.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the moisture --------------------------
wtp={};
wtp.key=["wtp0","wtp1","wtp2","wtp3","wtp4","wtp5","wtp7"]
wtp.legend=["4m","3.5m","3m","2.5m","2m","1.5m","0.5m"]
wtp.ylim=[0,40];
wtp.xlabel="TIME";
wtp.ylabel="TEMPERATURE(CELSIUS)";
wtp.color = d3.scaleOrdinal(d3.schemeCategory10);


//// ---------------------below is data defination for suction --------------------------
//suction={};
//suction.key=["deltat_c_1","deltat_c_2","deltat_c_3"]; 
//suction.ylim=[40,110];
//suction.xlabel="TIME";
//suction.ylabel="TEMPERATURE RISE(CELSIUS)";
//suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_grange_a_electrochem_o2;
public_key_grange_a_electrochem_o2='p6m8BDd9XJi9XKYzyaNZI3v0Blr';
grf_sensor={dox,drh,dtp,wox,wtp};

function data_treatment_grange_a_electrochem_o2(d){

        if (d.wtp0<1||d.wtp0>50){ d.wtp0=NaN};
        if (d.wtp1<1||d.wtp1>50){ d.wtp1=NaN};
        if (d.wtp2<1||d.wtp2>50){ d.wtp2=NaN};
        if (d.wtp3<1||d.wtp3>50){ d.wtp3=NaN};
        if (d.wtp4<1||d.wtp4>50){ d.wtp4=NaN};
        if (d.wtp5<1||d.wtp5>50){ d.wtp5=NaN};
        if (d.wtp6<1||d.wtp6>50){ d.wtp6=NaN};
        if (d.wtp7<1||d.wtp7>50){ d.wtp7=NaN};
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}

