import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  console.log(selectedLocation);
  console.log(selectedLocation.long);

  return (
    <ReactMapGL
      style={{ width: "100%", height: "100%" }}
      {...viewport}
      mapStyle="mapbox://styles/olenaavdiunina/clcg32mvx002j14qlfafwa6bt"
      mapboxAccessToken={process.env.mapbox_key}
      // onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((res) => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === res.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default MapComponent;
