import React from 'react'
import Map from 'react-map-gl';
function Mapweb(input) {
  
  let inputCity = input.input
  
  return <Map
    initialViewState={{
      longitude: 37.5,
      latitude: 55.5,
      zoom: 10
    }}
    
    mapStyle="mapbox://styles/lisichkin/cl1pdnfo9009415qgq7ntsnea"
    mapboxAccessToken={process.env.mapbox_key}
  />
  
}

export default Mapweb