import React, { useState } from 'react'
import Map, { Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter';
import { Marker } from 'react-map-gl';

function MapArea({searchResults}) {
  const [selectedLocation,setSelectedLocation] = useState({})  
  const coordinates = searchResults.map((result)=>({
    longitude:result.long,
    latitude:result.lat,
  }))
  
  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/dark-knight-/cl7c1b216000k15qjoubglo2g"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p 
              role='img'
              aria-label='push-pin'
              onClick={()=> setSelectedLocation(result)} className='cursor-pointer text-xl animate-bounce'
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              // closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapArea
