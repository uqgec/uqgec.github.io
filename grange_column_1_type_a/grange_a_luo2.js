


var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')
// ---------------------below is data defination for the SCALE --------------------------
wluo={};
wluo.key=["wluo5","wluo6"]
wluo.legend=["wluo5","wluo6"]
wluo.ylim=[15,30];
wluo.xlabel="TIME";
wluo.ylabel="OXYGEN3";
wluo.color = d3.scaleOrdinal(d3.schemeCategory10);

//// ---------------------below is data defination for the SCALE --------------------------
//wlup={};
//wlup.key=["wlup5","wlup6"]
//wlup.legend=["wlup5","wlup6"]
//wlup.ylim=[150,250];
//wlup.xlabel="TIME";
//wlup.ylabel="OXYGEN3";
//wlup.color = d3.scaleOrdinal(d3.schemeCategory10);
// ---------------------below is data defination for the SCALE --------------------------
wlupe={};
wlupe.key=["wlupe5","wlupe6"]
wlupe.legend=["wlupe5","wlupe6"]
wlupe.ylim=[900,1000];
wlupe.xlabel="TIME";
wlupe.ylabel="OXYGEN3";
wlupe.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the SCALE --------------------------
wlut={};
wlut.key=["wlut5","wlut6"]
wlut.legend=["wlut5","wlut6"]
wlut.ylim=[0,40];
wlut.xlabel="TIME";
wlut.ylabel="OXYGEN3";
wlut.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
rh={};
rh.key=["rh"];
rh.legend=["rh"];
rh.ylim=[0,100];
rh.xlabel="TIME";
rh.ylabel="RELATIVE HUMIDITY";
rh.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the temperature --------------------------
UV={};
UV.key=["irb","lrbtemp","uvb"];
UV.legend=["irb","lrbtemp","uvb"];
UV.ylim=[-1000,15000];
UV.xlabel="TIME";
UV.ylabel="UV INDEX";
UV.color = d3.scaleOrdinal(d3.schemeCategory10);

var data_grange_a_luo2;
public_key_grange_a_luo2='jg6jBDypjgtwAZlGDpjkSzQdByw';
grf_grange_a_luo2={wluo,wlupe,wlut,rh,UV};

/**
 * Important notice: the data obtained from ajax was still a string, it is important to change it into float using 
 * parseFloat()
 * @constructor
 */
function data_treatment_grange_a_luo2(d){
// Important notice:
        //d.mo0=d.mo0/1024.0*5.*2.8;
        //coef1=1;
        //d.mo0=(d.mo0**coef1-300.0**coef1)/(550.0**coef1-300.0**coef1);
        //d.su1=-d.su1;
        //d.tmp1=d.tmp1-10;
        //d.su2=-d.su2;
        //d.wlup5=d.wlup5+30;
        //d.wluo5=parseFloat(d.wluo5)+2.0;
        //d.wluo6-=2.0;
        //d.su3=-d.su3;
        //d.su4=-d.su4;
}
