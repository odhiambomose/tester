import React, {useState, useEffect } from "react";
import { View } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import SearchScreen from './SearchScreen';


const accessToken = 'sk.eyJ1Ijoic2VzbW8iLCJhIjoiY2xhdXA3YmtwMDhycjN5bnkyZm1iYmJ2NiJ9.vwwhLPsxEJtMh-daTqua6A';

MapboxGL.setAccessToken(accessToken);

const directionsClient = MapboxDirectionsFactory({accessToken});

export default App = () => {

  const IS_ANDROID=Platform.OS==="android"
  
  let isGranted

  useEffect(()=>{
    (async()=>{
  if(IS_ANDROID){
     isGranted=await MapboxGL.requestAndroidLocationPermissions();
  
  }
    })()

    setPermission(prev=>({ ...prev,isAndroidPermissionGranted:isGranted,isFetchingAndroidPermissin:false}))
  },[])

  const [permission,setPermission]=useState({
isAndroidPermissionGranted:isGranted,
isFetchingAndroidPermissin:false,
showUserLocation:true,

  })




  const startingPoint = [3.3362400, 6.5790100];
  const destinationPoint = [ 3.3750014, 6.5367877 ];

  const [route, setRoute] = useState(null);

  const startDestinationPoints = [startingPoint,  destinationPoint]

  useEffect(() => {
    fetchRoute();
  })
  
  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [
        {coordinates: startingPoint},
        {coordinates: destinationPoint},
      ],
      profile: 'driving-traffic',
      geometries: 'geojson',
    };

    const res = await directionsClient.getDirections(reqOptions).send();

    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(newRoute);
  };

  const renderAnnotations = () => {
    return (
      startDestinationPoints.map((point, index) => (
        <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}> 
            <View style={{
              height: 30, 
              width: 30, 
              backgroundColor: '#00cccc', 
              borderRadius: 50, 
              borderColor: '#fff', 
              borderWidth: 3
            }} 
          />
        </MapboxGL.PointAnnotation>
      ))
    );
  }


  return (
    <View style={{flex: 1, height: "100%", width: "100%" }}>
<View style={{zIndex:100}}>
     <SearchScreen/>
   </View>

      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={11}
        centerCoordinate={startingPoint}
        showUserLocation={true}
        style={{flex: 1}}>
          <MapboxGL.Camera
            zoomLevel={11}
            centerCoordinate={startingPoint}
            animationMode={'flyTo'}
            animationDuration={0}
          >
          </MapboxGL.Camera>
          {renderAnnotations()}
          {
          route && (
            <MapboxGL.ShapeSource id='shapeSource' shape={route}>
              <MapboxGL.LineLayer id='lineLayer' style={{lineWidth: 3, lineJoin: 'bevel', lineColor: '#ff0000'}} />
            </MapboxGL.ShapeSource>
          )
        }

<MapboxGL.UserLocation>

</MapboxGL.UserLocation>

      </MapboxGL.MapView>
    </View>
  )
}

