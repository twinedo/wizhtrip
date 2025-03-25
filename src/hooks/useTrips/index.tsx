import {useEffect, useState} from 'react';
import data from '../../../mock.json';
import {TripTypes} from './types';

export const useTrips = () => {
  const [trips, setTrips] = useState<TripTypes[]>([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
      setTrips(data)
    }, 1000);
  }, [])

  const getTripById = (id: string) => {
    return trips.find(trip => trip.id.toString() === id);
  };

  return {
    trips,
    setTrips,
    isFetching,
    getTripById,
  };
};
