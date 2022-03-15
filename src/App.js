import { useState, useEffect } from 'react';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);    
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app.title">Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>

    </div>

    );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users => this.setState({monsters: users}));
//   }

//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value })
//   };

//   render() {
//       const { monsters, searchField } = this.state;
//       const filteredMonsters = monsters.filter(monster =>
//         monster.name.toLowerCase().includes(searchField.toLowerCase()));
//       return (
//         <div className="App">
//         <h1> Monsters Rolodex </h1>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
