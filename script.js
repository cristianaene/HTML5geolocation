function printPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var positionInfo = "Your current position is: (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("currentposition").innerHTML = positionInfo;
        });
    } else {
        alert("We are sorry, your browser does not support HTML5 geolocation");
    }
}


