"use client";

import {
  GoogleMap as GoogleMapLibComponent,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const GoogleMap = () => {
  // Map container styles
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Center of the map
  const center = {
    lat: 40.748817, // Replace with your restaurant's latitude
    lng: -73.985428, // Replace with your restaurant's longitude
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMapLibComponent
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* Marker on the restaurant */}
        <Marker position={center} />
      </GoogleMapLibComponent>
    </LoadScript>
  );
};

export default GoogleMap;
