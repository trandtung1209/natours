/*eslint-disable*/
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidHJhbmR0dW5nMTIwOSIsImEiOiJja2p5OTd3NmgwMHdrMm5tdDRkNmw3dHg1In0.8VqwKz5dwEJi29J8qqTBtA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/trandtung1209/ckjz1oy9w04i517qw6fd8bhd4',
    scrollZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
