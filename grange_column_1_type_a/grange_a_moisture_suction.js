

var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
mo={};
mo.key=["mo0","mo1","mo2","mo3","mo4","mo5","mo6","mo7"]
mo.legend=["4m","3.5m","3m","2.5m","2m","1.5m","1m","0.5m"]
//mo.key=["mo5"]
//mo.legend=["moisture1"]
//mo.key=["mo0","mo1"]
//mo.ylim=[-0.1,1.1];
mo.ylim=[-0.2,1.2];
mo.xlabel="TIME";
mo.ylabel="DEGREE OF SATURATION";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the SCALE --------------------------
su={};
su.key=["su0","su1","su2","su3","su4","su5","su6","su7"]
su.legend=["4m","3.5m","3m","2.5m","2m","1.5m","1m","0.5m"]
su.ylim=[6,16];
su.xlabel="TIME";
su.ylabel="SUCTION";
su.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the SCALE --------------------------
s={};
s.key=["s2","s3","s4","s5","s6","s7"]
s.legend=["4m","3.5m","3m","2.5m","2m","1.5m","1m","0.5m"]
s.ylim=[-1,15];
s.xlabel="TIME";
s.ylabel="DELTA T";
s.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the moisture --------------------------
tmp={};
tmp.key=["tmp0","tmp1","tmp2","tmp3","tmp4","tmp5","tmp6","tmp7"]
tmp.legend=["4m","3.5m","3m","2.5m","2m","1.5m","1m","0.5m"]
tmp.ylim=[5,40];
tmp.xlabel="TIME";
tmp.ylabel="TEMPERATURE(CELSIUS)";
tmp.color = d3.scaleOrdinal(d3.schemeCategory10);



//// ---------------------below is data defination for suction --------------------------
//suction={};
//suction.key=["deltat_c_1","deltat_c_2","deltat_c_3"]; 
//suction.ylim=[40,110];
//suction.xlabel="TIME";
//suction.ylabel="TEMPERATURE RISE(CELSIUS)";
//suction.color = d3.scaleOrdinal(d3.schemeCategory10);
  

var data_grange_a_moisture_suction;
public_key_grange_a_moisture_suction='pZme0JbqLjf9XKYzyaNZI3v0Blr';
grf_grange_a_moisture_suction={mo,su,s,tmp};


function data_treatment_grange_a_moisture_suction(d){
        coef1=5.1;
        //https://stackoverflow.com/questions/15259444/drawing-non-continuous-lines-with-d3?noredirect=1&lq=1
        ///`if (d.mo5>600){ d.mo5=d3.line.defined(function(d) { return d; })};
        ///`if (d.mo0>600){ d.mo0=d3.line.defined()};

        if (d.mo0>600){ d.mo0=NaN};
        if (d.mo1>600){ d.mo1=NaN};
        if (d.mo2>600){ d.mo2=NaN};
        if (d.mo3>600){ d.mo3=NaN};
        if (d.mo4>600){ d.mo4=NaN};
        if (d.mo5>600){ d.mo5=NaN};
        if (d.mo6>600){ d.mo6=NaN};
        if (d.mo7>600){ d.mo7=NaN};

        if (d.tmp0<1){ d.tmp0=NaN};
        if (d.tmp1<1){ d.tmp1=NaN};
        if (d.tmp2<1){ d.tmp2=NaN};
        if (d.tmp3<1){ d.tmp3=NaN};
        if (d.tmp4<1){ d.tmp4=NaN};
        if (d.tmp5<1){ d.tmp5=NaN};
        if (d.tmp6<1){ d.tmp6=NaN};
        if (d.tmp7<1){ d.tmp7=NaN};

        if (d.su0<1){ d.su0=NaN};
        if (d.su1<1){ d.su1=NaN};
        if (d.su2<1){ d.su2=NaN};
        if (d.su3<1){ d.su3=NaN};
        if (d.su4<1){ d.su4=NaN};
        if (d.su5<1){ d.su5=NaN};
        if (d.su6<1){ d.su6=NaN};
        if (d.su7<1){ d.su7=NaN};
        if (d.s0<1){ d.s0=NaN};
        if (d.s1<1){ d.s1=NaN};
        if (d.s2<1){ d.s2=NaN};
        if (d.s3<1){ d.s3=NaN};
        if (d.s4<1){ d.s4=NaN};
        if (d.s5<1){ d.s5=NaN};
        if (d.s6<1){ d.s6=NaN};
        if (d.s7<1){ d.s7=NaN};
        //d.mo0[d.mo0>600]=NaN
        d.mo0=-(d.mo0**coef1-570.0**coef1)/(570.0**coef1-300.0**coef1);
        d.mo1=-(d.mo1**coef1-550.0**coef1)/(550.0**coef1-300.0**coef1);
        d.mo2=-(d.mo2**coef1-510.0**coef1)/(510.0**coef1-300.0**coef1);
        d.mo3=-(d.mo3**coef1-570.0**coef1)/(570.0**coef1-300.0**coef1);
        d.mo4=-(d.mo4**coef1-570.0**coef1)/(570.0**coef1-300.0**coef1);
        d.mo5=-(d.mo5**coef1-570.0**coef1)/(570.0**coef1-300.0**coef1);
        d.mo6=-(d.mo6**coef1-550.0**coef1)/(550.0**coef1-300.0**coef1);
        d.mo7=-(d.mo7**coef1-550.0**coef1)/(550.0**coef1-300.0**coef1);
        //d.mo.mo0=-d.mo.mo0;
        //d.['mo0']=0;
        //d.su1=-d.su1;
        //d.su2=-d.su2;
        //d.su3=-d.su3;
        //d.tmp1=d.tmp1-10;
        //d.su4=-d.su4;
	//d.mo0=d.mo0-500;
        //d.wluo5=d.wluo5+5;
        //d.wluo5=d.wluo5+5;
        //d.drh2=d.drh2+10;
}

