import { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  // first constructor run
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // lifecycle method
  // third lyfcycle method run
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { monsters: users };
    }
    ))
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })
  }

  // second render run
  render () {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className = 'monster-search-box' onChangeHandler = {onSearchChange} placeholder= 'Search Monsters' />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
    
  }
}

export default App;
