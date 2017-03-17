'use strict';

const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {games: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/games'}).done(response => {
			this.setState({games: response.entity._embedded.games});
		});
	}

	render() {
		return (
			<GameList games={this.state.games}/>
		)
	}
}

class GameList extends React.Component{
	render() {
		var games = this.props.games.map(game =>
			<Game key={game._links.self.href} game={game}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{games}
				</tbody>
			</table>
		)
	}
}

class Game extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.game.firstName}</td>
				<td>{this.props.game.lastName}</td>
				<td>{this.props.game.description}</td>
			</tr>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
	)