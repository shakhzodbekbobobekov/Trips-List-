import React, { useState, useEffect, useCallback } from 'react'
import './TripList.css'

function TripList() {
    const [trips, setTrips] = useState([])
    const [ url, setUrl ] = useState('http://localhost:3000/trips')   

    // useCallback(0
    
    const fetchTrips  = useCallback(async () => {
        const res = await fetch(url)
        const data = await res.json()
        setTrips(data)
    }, [url])
    // console.log(trips);

    useEffect(() => {
        fetchTrips()
        },[fetchTrips])
        
  return (
      <div className='trip-list'>
          <h2>TripsList</h2>
          
          <ul>
              {
                  trips.map((trip) => {
                      return (
                              <li key={trip.id}>
                                  <h2>{ trip.title }</h2>
                                  <h4>{ trip.price }</h4>
                                  <p>{ trip.loc }</p>
                              </li>
                      )
                  })
              }
              <div className="filters">
                <button onClick={() => {setUrl('http://localhost:3000/trips?loc=europe')}} >europe trips</button>
                <button onClick={() => {setUrl('http://localhost:3000/trips?loc=america')}} >america trips</button>
                <button onClick={() => {setUrl('http://localhost:3000/trips')}} >All trips</button>
             </div>
          </ul>
    </div>
  )
}

export default TripList