import React from 'react'

const Body = (props) => {
    let rating
    if (props.rating === "Kimono Approved!") {
        rating = "Kimono Approved!"
    } else if (props.rating === "Kylie Approved!") {
        rating = "Kylie Approved"

    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <img width="600px" src={props.image} alt='safari' />
                </div>
                <div className="col">
                <i class="bi bi-geo-fill"></i><a href={props.google}>View on Google</a>
                    <h1>{props.title}</h1>
                    <p>{props.description} <br/> </p>
                    {rating && <button>{rating}</button>}
                    <p><a href={props.book}>Book Now</a></p>
                </div>
            </div>
        </div>
    )
}

export default Body
