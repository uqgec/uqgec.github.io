
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
     .text("Roof Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqxlei/grange/roof.JPG")
     .attr("x", "00")
     .attr("y", "30")
     .attr("width", "1280")
     .attr("height", "1024");

// ----------------------draw picture for the entire setup ---------------------
var text = svg_pic.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Column Setup")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");


// ----------------------below is to draw picture for the entire setup ---------------------
var svg_pic_realtime = d3.select("#blockDescription")
     .append("svg")
     .attr("href", "https://outbox.eait.uq.edu.au/uqczhan2/photo_roof1/")
     .attr("width", 1280)
     .attr("height", 1024)
     .style("border", "0px solid black");

var text = svg_pic_realtime.selectAll("text")
     .data([0])
     .enter()
     .append("text")
     .text("Real-time snapshot on Stanwell column")
     .style("font-size", "25px")
     .attr("x", "0")
     .attr("y", "20");

var imgs = svg_pic_realtime.selectAll("image").data([0]);
     imgs.enter()
     .append("svg:image")
     .attr("xlink:href", "https://outbox.eait.uq.edu.au/uqxlei/photo_stanwell/stanwell.jpg")
     .attr("x", "00")
     .attr("y", "30")
     .attr("width", "1280")
     .attr("height", "924");


/*var svg_pic_realtime2 = d3.select("#blockDescription")
     .append("svg")
     .attr("href", "https://outbox.eait.uq.edu.au/uqczhan2/photo_roof1/")
     .attr("width", 1280)
     .attr("height", 1024)
     .style("border", "0px solid black");*/

// ----------------------above is to draw picture for the entire setup ---------------------
