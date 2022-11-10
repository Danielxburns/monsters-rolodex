import { useState, useEffect, ChangeEvent } from 'react';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app.title">Monsters Rolodex</h1>
      <SearchBox
        className="search"
        placeholder="Search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
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
