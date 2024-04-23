import './App.css'
import { Watches} from "./components";
import {Input} from "./components";
import React, {useState} from "react";

function App() {
  const [info, setInfo] = useState({city: '', timeZone: ''})
  const [watches, setWatches] = useState([])

  const {city, timeZone} = info;


    const inputChange = (e) => {
        e.preventDefault()
      const { name, value } = e.target;

      setInfo((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }

    const inputEvent = (e) => {
      e.preventDefault();

      const findCity = watches.find(item => item.city === city)

      if(findCity) {
        return alert('такой город уже есть')
      }

      const inputElement = timeZone.match(/\d+/g)

      if(!inputElement) {
        return alert('Укажите число')
      }

      const newElem =[ {
        city: city,
        timeZone: timeZone,
      }]

      setWatches(watches.concat(newElem))
      setInfo({city: '', timeZone: ''})
    }

    const deleteElement = (city) => {
      console.log(city)

      if (watches.length === 1) {
        setWatches([])
        return
      }

      setWatches(watches.filter(item => item.city !== city))
    }


    return (
    <>
        <div className="container">
          <form className="form"
                onSubmit={inputEvent}
          >
            <Input title={"Название"} name={"city"} value={city}  onInputElement={inputChange}/>
            <Input title={"Временная зона"} name={"timeZone"} value={timeZone}  onInputElement={inputChange}/>
            <div className="button-box">
              <button type="submit" className="add"
                      disabled={city === '' || timeZone === ''}
              > Добавить</button>
            </div>
          </form>

            <Watches
              props={watches}
              onDelete={(filter) => {deleteElement(filter);}}
            />
        </div>
    </>
  )
}

export default App
