import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll'
import './App.css'

class App extends Component {
	constructor()
	{
		super() 
		this.state = {	
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots : users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield	: event.target.value})
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobot = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!robots.length)
		{
			return <h1 className= 'tc'> Loading </h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots = {filteredRobot}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;