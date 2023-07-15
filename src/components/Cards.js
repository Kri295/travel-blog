import React from "react"

function Cards (props) {
    let hrSee
    if (props.data.id < props.length) {
        hrSee = "TRUE"
    } else {
        hrSee = ""
    }
    return (
        <div>
            <section className = 'card'>
                <img src = {`/images/${props.data.countryImg}`} alt = {props.data.country} className="card--image" />
                <section className="card--info">
                    <div className="card--map-info">
                        <img src = '/images/Map-logo.png' alt = 'Map-logo' />
                        <p className="card--map-info--text">{props.data.country}<a target = "_balnk" href = {props.data.locationLink}>View on Google Maps</a></p>
                    </div>
                    <h2 className="card--h1-text">{props.data.location}</h2>
                    <h4 className="card--date">{props.data.date}</h4>
                    <p className="card--description">{props.data.description}</p>
                </section>
            </section>
        {hrSee && <hr className="card--hr" />}
        </div>
    )
}

export default Cards