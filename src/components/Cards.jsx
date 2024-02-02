import React from 'react'

function Cards( { cardTitle, cardText, cardLink , cardDescriptionLink }) {
  return (
    <>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{ cardTitle }</h5>
            <p className="card-text">{ cardText } </p>
            <a href={ cardLink } className="card-link"> { cardDescriptionLink } </a>
        </div>
    </div>
    </>
  )
}

export default Cards