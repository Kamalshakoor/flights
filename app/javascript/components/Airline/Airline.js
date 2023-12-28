import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
const Airline = () => {
  const [airline, setAirline] = useState({})
  const [review, setreview] = useState({})
  const [loaded, setloaded] = useState(false)
  const { slug } = useParams(); 
  useEffect(() => {
    // const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
    .then((resp) => {
      console.log(resp),
      setAirline(resp.data),
      setloaded(true)
    })
      .catch((error) => {
        console.log(error);
      });
  }, [slug])


  return <>
    <div
      className="container mt-5"
    >
      <div
        className="row"
      >
        <div className="col-sm-8">
          {
            loaded &&  
            <Header 
            attributes={airline.data.attributes} 
            reviews = {airline.included}
            />
          }
        </div>
        <div className="col-sm-4">Column</div>
      </div>
      
    </div>
    
  </>
}

export default Airline