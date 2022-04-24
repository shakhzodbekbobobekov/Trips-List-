import React, { useState } from 'react'
import './TripList.css'
import useFetch from '../hooks/useFetch'

function TripList() {
    const [ url, setUrl ] = useState('http://localhost:3000/trips')
    const { data, isPending, error } = useFetch(url)
    
  return (
      <div className='trip-list'>
          <h2>TripsList</h2>
          {isPending && <div>Loading.....</div>}
          { error && <div>{ error }</div>}
          <ul>
              {data && 
                  data.map((trip) => {
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