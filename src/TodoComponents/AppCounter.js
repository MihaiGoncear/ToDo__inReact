import React from 'react';

export function CharacterCounter(props) {
    return (
        props.input.length ? (
            <span id="counter" className="counter">Characters counting: {props.input.length} </span>
          ) : <span id="counter" className="counter"> You can start writing: </span> 
    )
}