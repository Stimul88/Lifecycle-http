import {useEffect, useState} from 'react'
import './App.css'
import {Card} from "./components/Card.jsx";

const defaultValue = []

const server = 'http://localhost:7070'

function App() {
  const [users, setUsers] = useState(defaultValue);
  const [add, setAdd] = useState('');
  const [del, setDel] = useState('');
  const [value, setValue] = useState('');


  useEffect(() => {
    getApiData();
    return () => {}
  }, []);


  useEffect(() => {

    if(value === '') return ;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: 0, content: value})
    };
    fetch(`${server}/notes/`, requestOptions)
      .then(response => response.json())
      .then(data => setUsers(data));
    setValue('')
    setAdd('')
    getApiData();
  }, [add]);



  useEffect(() => {
    if(del === '') return ;
    fetch(`${server}/notes/${del}`, { method: 'DELETE' })
      .then(() => getApiData()
        .then(() => setDel('')));

  }, [del]);


  const getApiData = async () => {
    const response = await fetch(
      `${server}/notes/`
    ).then((response) => response.json());

    // Обновим состояние
    setUsers(response);
  };

  const inputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  }

  const reload = () => {
    getApiData();
  }

  const inputEvent = (e)=> {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="update-box">
          <div className="update-text">Notes</div>
          <div className="update-button"
               onClick={reload}
          >↻</div>
        </div>

        <div className="notes">
          <Card props={users}
                onDElete={(filter) => setDel(filter)}/>
        </div>
        <form className="new-note-box" onSubmit={inputEvent}>
          <textarea className="input-text"
                    value={value}
                    onChange={inputChange}/>
          <button type="submit" className="push"
               onClick={() => setAdd('add')}
          >▶</button>
        </form>
      </div>
    </>
  )
}

export default App
