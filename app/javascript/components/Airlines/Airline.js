import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

const Airline = (props) => {
  return (

            <div class="col-md-4 mb-3">
                <div className="card py-3">
                <img src={props.attributes.image_url} className="card-img-top rounded-circle" alt={props.attributes.image_url}       
                style={{  }}
                />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.attributes.name}</h5>
                        <p className="card-text"> {props.attributes.avg_score} </p>
                        <Link to={`/airline/${props.attributes.slug}`} className='btn btn-outline-secondary form-control'>Show Detail</Link>
                    </div>
                </div>
            </div>
    
  )
}

export default Airline