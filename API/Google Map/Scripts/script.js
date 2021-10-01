function initMap() {
    // Map options
    var options = {
        zoom: 13,
        center: {lat:17.6868,lng:-83.2185}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Add Marker
    var marker = new google.maps.Marker({
        position: { lat: 17.8497, lng: -82.8721 },
        map: map,
        icon:''
    })
}