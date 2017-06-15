

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");  //tabcontent is the class of the div
    // below script is to remove the displayed content
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // above script is to remove the displayed content

    // below script is to change the color of the active button back to non-active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // above script is to change the color of the active button back to non-active

    document.getElementById(cityName).style.display = "block";  //this shows the contents

    evt.currentTarget.className += " active"; // this makes the button active



    //argg={treatment_func:data_treatment_sensor_daisy};
    // why weather first and sesor second is working?!2017-06-14 18:13 
    //argg2={}
    //argg2["treatment_func"]=data_treatment_weather;
    //get_data_and_plot(data_weather,public_key_weather,grf_weather,argg2)
    //argg={}
    //argg["treatment_func"]=data_treatment_sensor_daisy;
    //get_data_and_plot(data_sensor_daisy,public_key,grf_2,argg)


}
// https://stackoverflow.com/questions/38099670/tabs-in-html-select-first-tab-by-default
document.getElementsByClassName('tablinks')[0].click()
get_data_and_plot(data_weather,public_key_weather,grf_weather,{treatment_func:data_treatment_weather,plot_location:'#London',data_size:{'gte' :{'timestamp' : 'now - 7 days'}}})
get_data_and_plot(data_sensor_daisy,public_key,grf_2,{treatment_func:data_treatment_sensor_daisy,plot_location:'#London',data_size:{'gte' :{'timestamp' : 'now - 7 days'}}})

// select the second tab, which is a month result
//https://stackoverflow.com/questions/10479879/how-to-return-array-of-jquery-object-with-selector
// run script only one the first click
//https://stackoverflow.com/questions/12885660/how-to-make-a-jquery-click-event-fire-only-on-first-click
// eq(1) means the second tab

$( ".tablinks" ).eq(1).one( "click", function() {
get_data_and_plot(data_weather,public_key_weather,grf_weather,{treatment_func:data_treatment_weather,plot_location:'#Paris',data_size:{'gte' :{'timestamp' : 'now - 30 days'}}})
get_data_and_plot(data_sensor_daisy,public_key,grf_2,{treatment_func:data_treatment_sensor_daisy,plot_location:'#Paris',data_size:{'gte' :{'timestamp' : 'now - 30 days'}}})
});


$( ".tablinks" ).eq(2).one( "click", function() {
get_data_and_plot(data_weather,public_key_weather,grf_weather,{treatment_func:data_treatment_weather,plot_location:'#Tokyo',data_size:{sample:2}})
get_data_and_plot(data_sensor_daisy,public_key,grf_2,{treatment_func:data_treatment_sensor_daisy,plot_location:'#Tokyo',data_size:{sample:2}})
});
