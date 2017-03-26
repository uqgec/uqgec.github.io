  
var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')

// ---------------------below is data defination for the moisture --------------------------
mo={};
mo.key=["mo_7","mo_8","mo_9","mo_10"];
mo.ylim=[200,600];
mo.xlabel="TIME";
mo.ylabel="MOISTURE SENSOR READING";
mo.color = d3.scaleOrdinal(d3.schemeCategory10);

// ---------------------below is data defination for the  temp --------------------------
temp={};
temp.key=["suht_28e5_begin","suht_28e5_peak","suht_28e5_end","suht_2847_begin","suht_2847_peak","suht_2847_end","saltrh_2_tp","saltrh_3_tp"];
temp.ylim=[20,60];
temp.xlabel="TIME";
temp.ylabel="TEMPERATURE (CELSIUS)";
temp.color = d3.scaleOrdinal(d3.schemeCategory10);


// ---------------------below is data defination for the delta temp --------------------------
del_temp={};
del_temp.key=["del_temp_28e5_heating","del_temp_28e5_cooling","del_temp_2847_heating","del_temp_2847_cooling"]; 
del_temp.ylim=[0,30];
del_temp.xlabel="TIME";
del_temp.ylabel="TEMPERATURE DIFFERENCE (CELSIUS)";
del_temp.color = d3.scaleOrdinal(d3.schemeCategory10);
  
// ---------------------below is data defination for the relative humidity sensor --------------------------
rh={};
rh.key=["saltrh_2_rh","saltrh_3_rh"];
rh.ylim=[0,105]; 
rh.xlabel="TIME";
rh.ylabel="RELATIVE HUMIDITY (PERCENT)";
rh.color = d3.scaleOrdinal(d3.schemeCategory10);
  
  
  
// ----------------------below is to obtain the data from the sensors------------------------------
var data1;
var url =   "https://data.sparkfun.com/output/9J2rX3QZ94s5RJ9LjrbN.json"
d3.json(url,  function (error,json) {
    //if (error) return console.warn(error);
    if (error) throw error;
    json.forEach(function(d) {
        //d.timestamp = format(d.timestamp);
        d.timestamp = d3.timeHour.offset(format(d.timestamp),+10);  // http://stackoverflow.com/questions/18796291/d3-get-current-time-and-subtract-by-2-hours
        d.del_temp_28e5_heating=d.suht_28e5_peak-d.suht_28e5_begin;
        d.del_temp_28e5_cooling=d.suht_28e5_peak-d.suht_28e5_end;
        d.del_temp_2847_heating=d.suht_2847_peak-d.suht_2847_begin;
        d.del_temp_2847_cooling=d.suht_2847_peak-d.suht_2847_end;
        //dataset.date = parseDate(d.date);
        //dataset.close = +d.close;
      //if (d.saltrh_3_tp == "NaN") {d.saltrh_3_tp=NaN}
      //if (d.saltrh_3_rh == "NaN") {d.saltrh_3_rh=NaN}
    });
   
    data1=json;
    console.log(data1)
  //       console.log(active1)
  //  http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
  //   remove all lines that has NaN
  data1=data1.filter(function(el){
    return el.saltrh_3_rh != "NaN";
  });
  console.log(JSON.stringify(data1, null, ' '));
  // ----------------------above is to obtain the data ------------------------------
  
  plot_figure(mo,data1);
  plot_figure(temp,data1);
  plot_figure(del_temp,data1);
  plot_figure(rh,data1);
})  // json
  

 
  
  
function plot_figure(prop,data1) { 

    prop.legendSpace=width/prop.key.length;
    prop.act=[];
    prop.valueline=[];
    prop.x= d3.scaleTime().range([0, width]);
    prop.y= d3.scaleLinear().range([height, 0]);
    prop.key.forEach(function(d,i) {
        prop.valueline[i]=d3.line()
            .x(function(d) { return prop.x(d.timestamp); })
            .y(function(d) { return prop.y(d[prop.key[i]]); });
    })

    prop.svg = d3.select("body")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                  "translate(" + margin.left + "," + margin.top + ")");

    prop.x.domain(d3.extent(data1, function(d) { return d.timestamp; }));
    prop.y.domain(prop.ylim);
    
    prop.key.forEach(function(d,i) {
        prop.svg.append("path")
            .attr("class", "line")
            .style("stroke", rh.color(prop.key[i]))
            .attr("d", prop.valueline[i](data1))
            .attr("id", 'tag'+prop.key[i].replace(/\s+/g, '')); // assign id **

        prop.svg.append("text")
            .attr("x", (prop.legendSpace/2)+i*prop.legendSpace)  // space legend
            .attr("y", -20 )
            //                  .attr("y", height + (margin.bottom/2)+ 45)
            .attr("class", "legend")    // style the legend
            .style("fill", rh.color(prop.key[i]))
            .on("click", function(){     
                     // Determine if current line is visible 
                     var active   = prop.act[i] ? false : true,
                     newOpacity = active ? 0 : 1; 
                     // Hide or show the elements based on the ID
                     d3.select("#tag"+prop.key[i].replace(/\s+/g, ''))
                         .transition().duration(100)   
                         .style("opacity", newOpacity); 
                     // Update whether or not the elements are active
                     prop.act[i] = active; 
                     }) 
           .text(prop.key[i]); 
    });

    // Add the X Axis
    prop.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(prop.x));


    // text label for the x axis
    prop.svg.append("text")             
        .attr("transform",
              "translate(" + (width/2) + " ," + 
                             (height + margin.top + 40) + ")") // location of x axis
        .style("text-anchor", "middle")
        .style("font-size", "20px")
        .text(prop.xlabel);

    // Add the Y Axis
    prop.svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(prop.y));


    // Add the Y Axis on the right hand side
    prop.svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + " ,0)")
        .call(d3.axisRight(prop.y));   // this right here means the label is on the right hand side of the axis

    // text label for the y axis
    prop.svg.append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 0 - margin.left)
         .attr("x",0 - (height / 2))
         .attr("dy", "1em")
         .style("text-anchor", "middle")
         .style("font-size", "18px")
         .text(prop.ylabel);    

    // draw grid lines
    prop.svg.append("g")         
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines(prop.x)
            .tickSize(-height, 0, 0)
            .tickFormat("")
        )
    prop.svg.append("g")         
        .attr("class", "grid")
        .call(make_y_gridlines(prop.y)
            .tickSize(-width, 0, 0)
            .tickFormat("")
        )
  
  // --------------------------above is for relative humidity sensor -----------------------

}
