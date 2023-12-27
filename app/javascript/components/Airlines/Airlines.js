import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Airline from './Airline'
const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        //get all airlines and update state
        axios
            .get('/api/v1/airlines.json')
            .then(resp => {
                setAirlines(resp.data.data)
            })
            .catch(resp => console.log(resp))
        }, [airlines.length])

    const airlineList = airlines.map(item => {
        return (
            <Airline key={item.attributes.name} attributes={item.attributes}/>

        )
    })

    return <> 

          < div className = "container mt-5 mb-5" > 
            <div className="row">
                {airlineList}
            </div>
          </div>
</>

}

export default Airlines