
// ----------------------draw picture for the entire setup ---------------------
var svg_pic = d3.select("#blockDescription")
//var svg_pic = d3.select()
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1124)
     .style("border", "0px solid black");

var text = svg_pic.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Roof Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");


var imgs_2 = svg_pic.selectAll("image").data([0]);
     imgs_2.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/Photos/roof_setup_1.jpg")
     .attr("x", "00")
     .attr("y", "50")
     .attr("width", "1280")
     .attr("height", "1024");


// body text and image are all needed
var svg_pic_entire = d3.select("#blockDescription")
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1124)
     .style("border", "0px solid black");

var text = svg_pic_entire.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Column Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic_entire.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqczhan2/Photos/camelias_no_water.jpg")
     .attr("x", "00")
     .attr("y", "30")
     .attr("width", "1280")
     .attr("height", "1024");


// ----------------------below is to draw picture for the entire setup ---------------------
var svg_pic_realtime = d3.select("#blockDescription")
     .append("svg")
     .attr("width", 1280)
     .attr("height", 1024)
     .style("border", "0px solid black");

var text = svg_pic_realtime.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Real-time snapshot of roof condition")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic_realtime.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "http://130.220.209.22/snapshot/camellia/latest.jpg")
     .attr("x", "00")
     .attr("y", "50")
     .attr("width", "1280")
     .attr("height", "924");

// ----------------------above is to draw picture for the entire setup ---------------------
