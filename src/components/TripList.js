import React, { useState, useEffect, useCallback } from 'react'
import './TripList.css'

function TripList() {
    const [trips, setTrips] = useState([])
    const [ url, setUrl ] = useState('http://localhost:3000/trips')   

    // useCallback(0
    
    useEffect(() => {
         fetch(url)
        .then((res)=> res.json())
            .then((data) => setTrips(data))
        },[url])
        
        console.log(trips);
  return (
      <div className='trip-list'>
          <h2>TripsList</h2>
          
          <ul>
              {
                  trips.map((trip) => {
                      return (
                          <div>
                              <li>
                                  <h2>{ trip.title }</h2>
                                  <p>{ trip.price }</p>
                              </li>
                          </div>
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