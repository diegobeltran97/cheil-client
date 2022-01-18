import React from 'react';
import '../assets/card.css';
import logo from '../logo.svg';



export default function Card(props) {


    return (
        <div className={props.className}>
            <div className={['card', 'card-custom'].join(' ')} >
                <img src={`http://localhost:3001/static/${props.image}`} alt="data dfasd" />
                <div className="card-body">
                    <h5 className="card-title">Hotel: {props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item font-weight-bold">
                            <strong>Precio:</strong> {props.price}$
                        </li>
                        <li className="list-group-item">
                            <strong>Categoria:</strong> {props.category} estrellas
                        </li>
                        <li className="list-group-item">
                            <strong>Puntaje: {props.raiting}</strong>
                        </li>
                    </ul>
                </div>


            </div>

        </div>

    )
}


