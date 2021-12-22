import React from 'react';
import '../assets/card.css';
import logo from '../logo.svg';


                     
export default function Card(props) {
    return (
        <div className={props.className}>
            <div className={['card', 'card-custom'].join(' ')} >
               <img src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">Hotel: {props.name}</h5>
                </div>

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
       
    )
}


