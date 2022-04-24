import React, {useState, useEffect} from 'react'

function TripList() {
    const [trips, setTrips] = useState([])
        // fetch('http://localhost:3000/trips')
        // .then((res)=> res.json())
        // .then((data)=> setTrips(data))
        // console.log(trips);
    
    useEffect(() => {
         fetch('http://localhost:3000/trips')
        .then((res)=> res.json())
            .then((data) => setTrips(data))
        },[])
        console.log(trips);

  return (
    <div>TripList</div>
  )
}

export default TripList