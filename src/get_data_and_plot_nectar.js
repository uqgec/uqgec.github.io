
// below is needed to initializating the picture

// Set the dimensions of the canvas / graph
// right determins the space for writting things
var margin = {top: 40, right: 100, bottom: 100, left: 110},  
    width = 1500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//evap1,evap2,mo23,mo25,mo27,mo29,mo31,mo33,mo35,mo37,mo39,mo41,t26_begin,t26_end,t26_peak,t45_begin,t45_end,t45_peak,t57_begin,t57_end,t57_peak,t7b_begin,t7b_end,t7b_peak,te2_begin,te2_end,te2_peak,tfb_begin,tfb_end,tfb_peak,timestamp
var format = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')

//http://stackoverflow.com/questions/1114024/constructors-in-javascript-objects  


// -------------------------- below is the function to creat grid lines ---------------
// gridlines in x axis function
function make_x_gridlines(x_ax) {		
    return d3.axisBottom(x_ax)
        .ticks(5)
}

// gridlines in y axis function
function make_y_gridlines(y_ax) {		
    return d3.axisLeft(y_ax)
        .ticks(5)
}
// -------------------------- above is the function to creat grid lines ---------------
function plot_figure(prop,data_weather,plot_location) { 

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

    //prop.svg = d3.select("body")
    prop.svg = d3.select(plot_location)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                  "translate(" + margin.left + "," + margin.top + ")");

    prop.x.domain(d3.extent(data_weather, function(d) { return d.timestamp; }));
    prop.y.domain(prop.ylim);
    
    prop.key.forEach(function(d,i) {
        prop.svg.append("path")
            .attr("class", "line")
            .style("stroke", prop.color(prop.key[i]))
            .attr("d", prop.valueline[i](data_weather))
            .attr("id", 'tag'+prop.key[i].replace(/\s+/g, '')+plot_location.replace(/#/g, '')); // assign id **





        prop.svg.append("text")
            .attr("x", (prop.legendSpace/2)+i*prop.legendSpace)  // space legend
            .attr("y", -20 )
            //                  .attr("y", height + (margin.bottom/2)+ 45)
            .attr("class", "legend")    // style the legend
            .style("fill", prop.color(prop.key[i]))
            .on("click", function(){     
                     // Determine if current line is visible 
                     var active   = prop.act[i] ? false : true,
                     newOpacity = active ? 0 : 1; 
                     // Hide or show the elements based on the ID
                     d3.select("#tag"+prop.key[i].replace(/\s+/g, '')+plot_location.replace(/#/g, ''))
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
  

} //fuction_plot_figure
// ----------------------below is to obtain the data from the sensors------------------------------


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
//function defaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }


// this is not functional for some browsers
//function read_file(file, delete_after = false) {
//  // Code
//}
// https://stackoverflow.com/questions/33708413/javascript-default-parameters-in-functions-with-multiple-arguments
function get_data_and_plot(data_sensor,public_key,grf,options)
    {
    //time_out = defaultFor(time_out, 10000)
    //retry_limit = defaultFor(retry_limit, 3)
    //data_size = defaultFor(data_size, {page:1})
    arg={};
    arg.time_out    = options.time_out || 10000;
    arg.retry_limit = options.retry_limit || 5;
    arg.data_size   = options.data_size || {};
    arg.sw_plot   = options.sw_plot || true;
    arg.treatment_func = options.treatment_func || {};  // check if treatment function is needed
    arg.plot_location =options.plot_location || 'body'

    //console.log(arg.time_out, arg.retry_limit , arg.data_size, arg.sw_plot )
    var offset = new Date().getTimezoneOffset();
    $.ajax({
          url:'http://144.6.225.24:8080/output/'+public_key+'.json',
          //data:{page:1,sample:1,limit:1}, // working, getting the latest one! 2017-06-05 11:03
          //data:{limit:1},
          data:arg.data_size,
          //async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jque
          async: false,  // https://stackoverflow.com/questions/1478295/what-does-async-false-do-in-jquery
          dataType:'jsonp',
          tryCount : 0,
          retryLimit :arg.retry_limit,
          timeout: arg.time_out ,
          success : function (json) {
               if (typeof arg.treatment_func === "function") { 
                json.forEach(function(json) {
                   json.timestamp = d3.timeHour.offset(format(json.timestamp),-offset/60);  // http://stackoverflow.com/questions/187
                   //https://stackoverflow.com/questions/1042138/javascript-check-if-function-exists
                       arg.treatment_func(json)
                });// json.forEach
                } else {
                json.forEach(function(json) {
                   json.timestamp = d3.timeHour.offset(format(json.timestamp),+10);  // http://stackoverflow.com/questions/187
		});
		};

		
                data_sensor=json;
                //console.log(data_sensor)
                if (arg.sw_plot==true) {
    	       //wait(4000)    
		   
                    for (var key in grf) {
                        plot_figure(grf[key],json,arg.plot_location);
                        };
                    }  //sw_plot
                },
              error : function(xhr, textStatus, errorThrown ) {
    	       wait(300)    
    	    //alert(xhr.responseText)
                if (textStatus == 'timeout') {
    		//input.innerHTML='bad gateway'
    		//return
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        //https://stackoverflow.com/questions/10024469/whats-the-best-way-to-retry-an-ajax-request-on-failure-using-jquery
                        setTimeout ( function(){ get_data_and_plot(data_sensor,public_key,grf,arg) }, $.ajaxSetup().retryAfter );
                        //$.ajax(this);
                        return;
                    }            
                    return;
                }
                if (xhr.status == 500) {
    		input.innerHTML='bad gateway1'
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }            
                    return;
                    //handle error
    		//return
                } else {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        //https://stackoverflow.com/questions/10024469/whats-the-best-way-to-retry-an-ajax-request-on-failure-using-jquery
                        setTimeout ( function(){ get_data_and_plot(data_sensor,public_key,grf,arg) }, $.ajaxSetup().retryAfter );
                        //$.ajax(this);
                        //return;
                    }            
                    //return;
                    //handle error
    		//input.innerHTML='bad gateway2'
    		//return
                }//else
            } //error
               });//ajax
    }; //function
