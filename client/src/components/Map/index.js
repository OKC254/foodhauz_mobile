/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
// import { GOOGLE_MAPS_APIKEY } from '@env'
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInfo,
} from '../../redux/slices/nav.slice'

const MapDisplay = () => {
  // const origin = useSelector(selectOrigin)
  // const description = useSelector(selectDescription)
  const origin = {
    location: {
      lat: 0.005,
      lng: 0.005,
    },
    description: 'hello',
  }
  const destination = {
    location: {
      lat: 0.005,
      lng: 0.005,
    },
    description: 'hello',
  }
  const mapRef = useRef(null)
  const dispatch = useDispatch()
  const GOOGLE_MAPS_APIKEY = 'hello'

  useEffect(() => {
    if (!origin || !destination) return
    mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    })
  }, [origin, destination])

  useEffect(() => {
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`,
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInfo(data.rows[0].elements[0]))
        })
    }

    getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY])

  return (
    <MapView
      //   style={tw`flex-1`}
      //   mapType="standard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default MapDisplay
