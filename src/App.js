import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-field/serach-box';


class App extends Component{
  constructor(){
    super();
  
    this.state = {
      users : [],
      searchField : ""
    }
  }

  onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
          return {searchField}
        })
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {return {users: users}},
      () => {console.log(this.state)}
    ))
  }

  render(){
    const {users, searchField} =  this.state;
    const{onSearchChange} = this;

    const filteredUsers =  users.filter((user) => 
      user.name.toLocaleLowerCase().includes(searchField));
    return (
      <div className="App">
        {/* Props are same like other properties that are input field that ae predefined by reacts
        When we create our own props we can name them whatever we want
        But we need to pass the same thing as the component expecting */}
        <h1 className='app-title'>Users-Viewer</h1>
        <SearchBox onChangeHandler ={onSearchChange} placeholder ='Serach Users' className ='search-box-user'/>
        <CardList users ={filteredUsers} />
      </div>
    );
  } 
}

export default App;