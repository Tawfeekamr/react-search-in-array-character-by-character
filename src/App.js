//****************************
// Functional component
//****************************

// import './App.css';
// import { useState, useEffect } from 'react';
//
//
// function App() {
//     const names = ["John","Steve","Alen","Stephen","Smith","Alex","Jack","Andy","Jacky"];
//
//     const [term, setTerm] = useState('');
//   const [filltredData, setFillterd] = useState(names);
//
//
//   const onSubmit = (event) => {
//     event.preventDefault();
//     search(term);
//   };
//
//   const search =  (value) => {
//     if (value) {
//       // console.log(value);
//       let searchResults = [...names].filter(name => {
//             return name.toLowerCase().includes(term.toLowerCase());
//           })
//       setFillterd(searchResults);
//     }
//     if (value === ''){
//         setFillterd(names);
//     }
//   }
//
//   useEffect(() => {
//     search();
//   }, [term]);
//
//     const rerenderData = () => {
//         return  filltredData.map(item => <div key={names.indexOf(item)}>{item}</div>);
//     }
//   return (
//     <div className="App">
//       <form onSubmit={onSubmit} className="search-form">
//         <div className="search-field">
//             <label>Input Your search term: </label>
//           <input
//               className="search-input"
//               type="text"
//               value={term}
//               onChange={(event) => {
//                 setTerm(event.target.value);
//                 search(term);
//               }}
//               placeholder="Search here"
//           />
//             {rerenderData()}
//         </div>
//       </form>
//     </div>
//   );
// }
//
// export default App;


//****************************
// Class based component
//****************************

import React from 'react';
import NameItem from "./components/NameItem";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { term: '', names: ["John","Steve","Alen","Stephen","Smith","Alex","Jack","Andy","Jacky"], filteredData: [] };
    }

    renderData(filteredData) {
        if(filteredData) {
            this.setState({names: filteredData});
        }
        return filteredData.map(item => <NameItem item={item}></NameItem>);

    }

    filterNames(namePass) {
       const names = ["John","Steve","Alen","Stephen","Smith","Alex","Jack","Andy","Jacky"];
        if(namePass && names) {
            let filteredData = names.filter((item) => {
               return  item.toLowerCase().includes(namePass.toLowerCase())
            });
            console.log(filteredData);
            this.setState({filteredData: filteredData});
            if (filteredData) {
                this.renderData(filteredData);
            }
        }
        }

    render() {
        return (
            <>
                <div>
                    <label>Search Person: </label>
                    <input type="text" value={this.state.name} id="searchEmp"
                           placeholder="Enter Person's Name"
                           onChange={(event) => {
                               this.setState({term: event.target.value});
                               // console.log(event.target.value);
                               this.filterNames(event.target.value);
                           }}/><br/>
                </div>
                <ul>
                    <NameItem item={this.state.names}></NameItem>
                    {
                    }
                </ul>
            </>
        );
    }
}

export default App;