import React, {useState, useEffect,useContext } from "react";
import { View } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
// import Geolocation from '@react-native-community/geolocation';
// import { PermissionsAndroid } from 'react-native';
import Geolocation from "@react-native-community/geolocation";



import SearchScreen from './SearchScreen';
import Bottom from "./Bottom";
import { Context } from '../context/AmbulanceContext';


MapboxGL.setWellKnownTileServer('Mapbox');

const accessToken = 'sk.eyJ1Ijoic2VzbW8iLCJhIjoiY2xhdXA3YmtwMDhycjN5bnkyZm1iYmJ2NiJ9.vwwhLPsxEJtMh-daTqua6A';

MapboxGL.setAccessToken(accessToken);

const directionsClient = MapboxDirectionsFactory({accessToken});

export default HomeScreen = () => {

  const {visible}=useContext(Context);
  const [isVisible, setVisible]=visible




  const [search, setSearch] = useState({
    searchKeyword:"",
    searchItem:"",
    searchResults:[],
    coords:[36.791376,-1.312217],
    isShowingResults:false
  })






const lat = search.coords && search.coords[0]
const lng = search.coords && search.coords[1]

  const startingPoint = [36.791376,-1.312217];
  const destinationPoint = search.coords

  const [route, setRoute] = useState(null);
// console.log([lat,lng])

  const startDestinationPoints = [startingPoint,  destinationPoint]

  useEffect(() => {
    fetchRoute();
  })

  // useEffect(()=>{
  //   if 
  // })  
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
     <SearchScreen search={search} setSearch={setSearch}/>
   </View>

      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={12}
        centerCoordinate={startingPoint}
        showUserLocation={true}
        style={{flex: 1}}>
          <MapboxGL.Camera
            zoomLevel={12}
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

<MapboxGL.UserLocation 
visible={true}
animated={true}
/>


      </MapboxGL.MapView>

      {isVisible && (
        <Bottom/>
      )}
    </View>
  )
}

