import React from "react"
import { IoLocationSharp } from "react-icons/io5";

export default function Travel(props) {
    return (
        <div clasName="section">
            <img className="image" src={`${props.imageUrl}`} />
            <div className="box">
                <span><IoLocationSharp />{props.location}</span>
                <a href={props.googleMapsUrl}>  View on Google Maps</a>
                <h2>{props.title}</h2>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
            <br></br>
        </div>
    )
}