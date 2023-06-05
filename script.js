function initMap() {
    let coordinates = {lat: 43.804379, lng: -79.526213}
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: coordinates}
    );
    let marker = new google.maps.Marker({position: coordinates, map: map})
}