import React, {useState} from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import "mapbox-gl/dist/mapbox-gl.css";

function Mapweb({ filterArr, input}) {
  const [selectLocation, setSelectLocation] = useState({})
  const coordinat = filterArr.map((coor) => ({
    longitude:coor.long,
    latitude:coor.lat,
  }))
  
  const center = getCenter(coordinat)
  
  console.log(filterArr);
  console.log(input);
  console.log(coordinat);
  console.log(center);
  console.log(selectLocation);
  return <Map
    initialViewState={{
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11
    }}
    mapStyle="mapbox://styles/lisichkin/cl3eb8896004y14th873rtdg2"
    mapboxAccessToken={process.env.mapbox_key}
    >
    {filterArr.map((result)=>(
      <div key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
        >
          <p 
          onClick={() => setSelectLocation(result)}
          className='cursor-pointer text-2xl'
          aria-label='push-in'
          role='img'
          >🏠</p>
        </Marker>
        {selectLocation.long === result.long ? (
          <Popup
          onClose={()=>setSelectLocation({})}
          closeOnClick={true}
          latitude={result.lat}
          longitude={result.long}
          >
            {result.title}
          </Popup>
        ):(false)}
      </div>
    ))}
    </Map>
  
}

export default Mapweb