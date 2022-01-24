import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchField from './components/SearchField';
import './components/styles/CardList.module.css';
import styles from './components/styles/SearchBox.module.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monster: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => this.setState({ monster: data }));
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ searchfield: e.target.value });
	};

	render() {
		const { monster, searchfield } = this.state;
		const filterMonster = monster.filter((monsters) =>
			monsters.name.toLowerCase().includes(searchfield.toLowerCase())
		);
		return (
			<div className="App">
				<h1 className="heading">monster rolodex</h1>
				<div className={styles.searchbox}>
					<SearchField handleChange={this.handleChange} />
				</div>
				<CardList filterMonster={filterMonster} />
			</div>
		);
	}
}
