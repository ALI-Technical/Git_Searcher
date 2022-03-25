import { useRef, useState } from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import styles from './Components/userCard.module.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputTag = useRef();
  const inputHandler = (e) => {
    e.preventDefault();
    const searchValue = inputTag.current.value;
    setInputValue(searchValue);
  };

  return (
    <div className='container'>
      <h1 style={{ textAlign: "center" }}>GITHUB USER FINDER</h1>
      <form onSubmit={inputHandler}>
        <div>
          <div className="row">
            <div className={`${styles.inputBox} container col-lg-12 col-md-12 col-sm-10`}>
              <input ref={inputTag} type="text" className='form-control'/>
              <button className='btn btn-outline-info'><i className="fa-solid fa-search"></i></button>
            </div>
          </div>
        </div>
      </form>

      <UserCard inputValue={inputValue} />
    </div>
  );
}

export default App;
