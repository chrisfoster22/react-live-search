// class SearchBar extends React.Component {
//
// 	constructor(props) {
// 		super(props);
//
// 		this.handleSearch = this.handleSearch.bind(this);
// 	}
//
// 	render() {
// 		return(
// 			<div>
// 				<input onChange={this.handleSearch} value={this.props.searchTerm} />
// 				<div>{this.props.searchTerm}</div>
// 			</div>
// 		)
// 	}
//
// 	handleSearch(event) {
// 		this.props.search(event.target.value);
// 	}
//
//
// }


function SearchBar(props) {
	return(
		<div>
			<input onChange={handleSearch} value={props.searchTerm} />
			<div>{props.searchTerm}</div>
		</div>
	)

	function handleSearch(event) {
		props.search(event.target.value);
	}
}
