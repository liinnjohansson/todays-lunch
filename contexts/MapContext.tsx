import React, { createContext, FC, useEffect, useState } from "react";
import * as Location from 'expo-location';

 export interface GeoLocation {
   longitude: number,
   latitude: number,
 }

interface ContextValue {
    userLocation?: GeoLocation;
    // mapLocation?: GeoLocation;
    setUserLocation: (location: GeoLocation) => void;
    // setMapLocation: (location: GeoLocation) => void;
}

export const MapContext = createContext<ContextValue>({
    setUserLocation: () => {},
    // setMapLocation: () => {},
})

const MapProvider: FC = ({ children }) => {
const [userLocation, setUserLocation] = useState<GeoLocation>();
const [errorMsg, setErrorMsg] = useState<string>(); 

useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Low});
      setUserLocation(location.coords);
      location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
      setUserLocation(location.coords);
    })();
  }, []);
    return (
        <MapContext.Provider
        value={{
            userLocation,
            // mapLocation,
            setUserLocation,
            // setMapLocation,
    }}
> 
{children}
</MapContext.Provider>      
  );
};

export default MapProvider;