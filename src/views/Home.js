import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Menu from '../components/menu/Menu';

export default function Home() {
    const [computedCards, setComputedCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [sortDown, setSortDown] = useState(false)
    
  


    useEffect(() => {
       const fetchCards = async () => {
         const response = await fetch('http://localhost:3000/api/');
         const data = await response.json();
         setCards(data);
         setComputedCards(data);
       }

       fetchCards();
      }, []);

    const filterCategry = (values, itemToFilter) => {
        console.log('itemToFilter', values, itemToFilter);
        const categoryToFilter = values;

        if ( categoryToFilter.length > 0 ) {
            
            const filter =  cards.filter( (element) => {  
                let evaluate = itemToFilter == 'category' ? element.category : element.raiting
                console.log('evalutate', evaluate);
                return categoryToFilter.includes(evaluate);
            });
            setComputedCards(filter)
        } else {
            setComputedCards(cards);
        }
            
    } 

    const cardsOrder = (value) => { 
        const sortDown = value === 'ASC' ? false : true;
        const copy = [...computedCards]
         copy.sort((a, b) => {
            if ( !sortDown) {
                return  a.price_hotel - b.price_hotel;
            } else {
                return   b.price_hotel - a.price_hotel ;
            }
        });
        setSortDown((prev) => !prev);
        setComputedCards(copy); 
        
    }
    return (
        <div>
        <Menu onClickcategory={filterCategry} sendOrder={cardsOrder}/>
        <main className='container'>
            <div className='row'>
                { computedCards.map((card) => (
                    <Card 
                     key={card.id}
                     className="col-12 col-md-4 mt-2"
                     name={card.name_hotel}
                     price={card.price_hotel}
                     category={card.category}
                     hotelImage={card.image_hotel}
                     raiting={card.raiting}
                     
                    />
                 ))}
           </div>

        </main>
            
        </div>
    )
}
