var map;
  
// Creat a new blank array for all the listing markers.
var markers = [];

function initMap() {
  // Create a styles array to use with the map.
  var styles = [
    {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
          {"visibility": "on"}
      ]
    },{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {"visibility": "off"},
            {"saturation": "-100"}
        ]
    },{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {"saturation": 36},
            {"color": "#000000"},
            {"lightness": 40},
            {"visibility": "off"}
        ]
    },{
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {"visibility": "off"},
            {"color": "#000000"},
            {"lightness": 16}
        ]
    },{
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {"visibility": "off"}
        ]
    },{
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 20}
        ]
    },{
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 17},
            {"weight": 1.2}
        ]
    },{
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 20}
        ]
    },{
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
        ]
    },{
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#4d6059"}
        ]
    },{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
        ]
    },{
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {"lightness": 21}
        ]
    },{
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
        ]
    },{
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#4d6059"}
        ]
    },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {"visibility": "on"},
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#7f8d89"},
            {"lightness": 17}
        ]
    },{
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#7f8d89"},
            {"lightness": 29},
            {"weight": 0.2}
        ]
    },{
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 18}
        ]
    },{
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 16}
        ]
    },{
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#7f8d89"}
        ]
    },{
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 19}
        ]
    },{
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {"color": "#2b3638"},
            {"visibility": "on"}
        ]
    },{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {"color": "#2b3638"},
            {"lightness": 17}
        ]
    },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#24282b"}
        ]
    },{
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#24282b"}
        ]
    },{
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {"visibility": "off"}
        ]
    },{
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {"visibility": "off"}
        ]
    },{
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {"visibility": "off"}
        ]
    },{
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {"visibility": "off"}
        ]
    },{
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {"visibility": "off"}
        ]
    }
  ];

  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13,
    styles: styles,
    mapTypeControl: false
  });
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [
    {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
    {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
    {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
    {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
    {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
    {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
  ];

  var largeInfowindow = new google.maps.InfoWindow();

  // Styles for the default markers
  var defaultIcon = makeMarkerIcon('0091ff');

  // Styles for when a marker is moused over
  var highlightedIcon = makeMarkerIcon('ffff24');

  // The following group uses the location array to create an array of markers on initialize.
  for(var i = 0; i < locations.length; i++) {
    // Get the position from the location array
    var position = locations[i].location;
    // Get the title of the position from the location array
    var title = locations[i].title;
    // Create a marker per location, and pu into markers array.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      icon: defaultIcon,
      animation: google.maps.Animation.DROP,
      id: i
    });

    // Push the marker to our array of markers
    markers.push(marker);

    // Create an onClick event to open an infowindow at each marker
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });

    // When the mouse is over an icon change the color
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });

    // When the mouse leaved an icon change the color back
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });
  }

  document.getElementById('show-listings').addEventListener('click', showListings);
  document.getElementById('hide-listings').addEventListener('click', hideListings);
}

// This function populates the infowindow when the marker is clicked.
// We'll only allow one infowindow which will apen at the marker that
// is clicked, and populate based on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker
  if(infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed
    infowindow.addListener('closeclick', function() {
      infowindow.setMarker(null);
    });
  }
}

// This function will loop through the markers array and display them all.
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundries of the map for each marker and display the marker
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideListings() {
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +'|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}