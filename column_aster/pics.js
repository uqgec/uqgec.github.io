
// ----------------------draw picture for the entire setup ---------------------
var svg_pic = d3.select("#blockDescription")
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1124)
     .style("border", "0px solid black");

var text = svg_pic.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Experimental Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/Photos/column_lab_empty.jpg")
     .attr("x", "00")
     .attr("y", "30")
     .attr("width", "1280")
     .attr("height", "1024");


// ----------------------below is to draw picture for the entire setup ---------------------
var svg_pic_realtime = d3.select("#blockDescription")
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1124)
     .style("border", "0px solid black");

var text = svg_pic_realtime.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Sensor Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic_realtime.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/Photos/column_aster_nowater.jpg")
     .attr("x", "00")
     .attr("y", "50")
     .attr("width", "1280")
     .attr("height", "924");

//     svg_pic_realtime.append("text")
//            .text("Real-time results")
//            .style("font-size", "25px")
//            .attr("x", "0")
//            .attr("y", "1100");
// ----------------------above is to draw picture for the entire setup ---------------------
var svg_pic_actuall = d3.select("#blockDescription")
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1124)
     .style("border", "0px solid black");

var text = svg_pic_actuall.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Real-time results")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic_actuall.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/aster/latest.jpg")
     .attr("x", "00")
     .attr("y", "50")
     .attr("width", "1280")
     .attr("height", "924");

