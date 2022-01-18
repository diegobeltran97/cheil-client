import React from 'react';
import { useState, useEffect } from 'react';


export default function Menu(props) {

  const [category, setCategory] = useState([
    { id: 1, text: '1 estrella' },
    { id: 2, text: '2 estrella' },
    { id: 3, text: '3 estrella' },
    { id: 4, text: '4 estrella' },
    { id: 5, text: '5 estrella' },

  ]);
  const [categorySelected, setCategorySelected] = useState([])

  const [raiting, setRaiting] = useState([
    { id: 1, text: '1 Puntos' },
    { id: 2, text: '2 Puntos' },
    { id: 3, text: '3 Puntos' },
    { id: 4, text: '4 Puntos' },
    { id: 5, text: '5 Puntos' },
  ]);

  const [raitingSelected, setRaitingSelected] = useState([]);

  const [order, setOrder] = useState('ASC');



  useEffect(() => {
    let listToSelect = category.map(item => { return { id: item.id, value: item.text, selected: false } });
    let raitingList = raiting.map(item => { return { id: item.id, value: item.text, selected: false } });
    setCategorySelected(listToSelect);
    setRaitingSelected(raitingList);
  }, []);


  const getValuesSelected = (value, list) => {

    console.log('list es ', list);

    if (list === 'category') {
      let items = categorySelected.map(item => {
        if (item.id === value.id) {
          item.selected = value.selected
        }

        return item;
      })
      console.log('category selected', items);

      filterCategorySelected(items);
    } else {
      let items = raitingSelected.map(item => {
        if (item.id === value.id) {
          item.selected = value.selected
        }

        return item;
      })


      filterRaitingSelected(items);
    }

  }



  const filterCategorySelected = (values) => {
    props.onClickcategory(values.filter(item => item.selected).map(item => item.id), 'category')
  }

  const filterRaitingSelected = (values) => {
    props.onClickcategory(values.filter(item => item.selected).map(item => item.id), 'raiting')
  }

  const sortByPrice = () => {
    if (order === 'ASC') {
      setOrder('DESC');
    } else {
      setOrder('ASC');
    }

    props.sendOrder(order);
  }




  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item ">
              <span
                className="nav-link  dropdown-toggle"
                role="button"
                id="dropdownMenuLink1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Categoria
              </span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                {category.map((item) => (
                  // <span onClick={() => getCategory(item.id)} className="dropdown-item">{item.text}</span>
                  <Checkbox key={item.text} value={item.text} text={item.text} id={item.id} sendCheckbox={(value) => getValuesSelected(value, 'category')} />

                ))
                }
              </div>
            </li>

            <li className="nav-item ">
              <span
                className="nav-link  dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Puntuacion
              </span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {raiting.map((item) => (
                  // <span onClick={() => getCategory(item.id)} className="dropdown-item">{item.text}</span>
                  <Checkbox key={item.text} value={item.text} text={item.text} id={item.id} sendCheckbox={(value) => getValuesSelected(value, 'raiting')} />

                ))
                }
              </div>
            </li>

            <li className='nav-item'>
              <span className='nav-link' onClick={sortByPrice}>
                Precio Orden  {order === 'ASC' ? <i class="bi bi-arrow-bar-up"></i> : <i class="bi bi-arrow-bar-down"></i>}
              </span>

            </li>


          </ul>
        </div>
      </nav>
    </div>
  );
}


const Checkbox = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleOnChange = (e) => {

    let res = !isChecked;
    setChecked(res);


    props.sendCheckbox({ id: props.id, selected: !isChecked })
  };
  return (
    <div >
      <input checked={isChecked} onChange={handleOnChange} className="form-check-input" type="checkbox" id={props.value} value={props.value} />
      <label className="form-check-label" htmlFor={props.value}>{' '}{props.text}</label>


    </div>
  )

}
