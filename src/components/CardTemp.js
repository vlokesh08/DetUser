import React from 'react'

function CardTemp(props) {
  return (
    <div className="card_main">
      <div className="inside_card">
        <img className="card_image" src={props.data.avatar} alt="lala image"></img>
      </div>
      <div className="card_text">
        <h3>FirstName : {props.data.first_name}</h3>
        <h3>SecondName : {props.data.last_name}</h3>
        <h3>Email : {props.data.email}</h3>
      </div>
    </div>
  )
}

export default CardTemp