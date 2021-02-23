import './App.css';
import { useState, useEffect } from 'react';


function App() {
    const names = ["John","Steve","Alen","Stephen","Smith","Alex","Jack","Andy","Jacky"];

    const [term, setTerm] = useState('');
  const [filltredData, setFillterd] = useState(names);


  const onSubmit = (event) => {
    event.preventDefault();
    search(term);
  };

  const search =  (value) => {
    if (value) {
      // console.log(value);
      let searchResults = [...names].filter(name => {
            return name.toLowerCase().includes(term.toLowerCase());
          })
      setFillterd(searchResults);
    }
    if (value === ''){
        setFillterd(names);
    }
  }

  useEffect(() => {
    search();
  }, [term]);

    const rerenderData = () => {
        return  filltredData.map(item => <div key={names.indexOf(item)}>{item}</div>);
    }
  return (
    <div className="App">
      <form onSubmit={onSubmit} className="search-form">
        <div className="search-field">
          <input
              className="search-input"
              type="text"
              value={term}
              onChange={(event) => {
                setTerm(event.target.value);
                search(term);
              }}
              placeholder="Search here"
          />
            {rerenderData()}
        </div>
      </form>
    </div>
  );
}

export default App;
