const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleLocation);
  } else {
    alert("Não foi possível encontrar sua localização.");
  }
};

const handleLocation = (position) => {
  const { latitude, longitude } = position.coords;
  setupMap(longitude, latitude);
};

const setupMap = (lng, lat) => {
  const containerID = "map";
  const currentMapStyle = "mapbox://styles/mapbox/streets-v11";
  const accessToken =
    "pk.eyJ1IjoibWlndWVsLW5vZ3VlaXJhIiwiYSI6ImNraXVsNG1uMTBibG8yc3BnNmNoaXJhcGkifQ.gyM6jVIVLtQzy2aU9xMhTQ";
  const currentZoom = 14;

  mapboxgl.accessToken = accessToken;
  const map = new mapboxgl.Map({
    container: containerID,
    style: currentMapStyle, // stylesheet location
    center: [lng, lat], // starting position [lng, lat]
    zoom: currentZoom, // starting zoom
  });
};

const displayMap = () => {
  getLocation();
};

displayMap();
