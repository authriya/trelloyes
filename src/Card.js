import React from 'react';
import "./card.css"

export default function Card(props) {
    return (
        <div className='Card'>
            <button type='button'
            onClick= {() => props.onDeleteItem(props.id)}>
                Delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Card.propTypes = {
    onClickDelete: () => {}
  }