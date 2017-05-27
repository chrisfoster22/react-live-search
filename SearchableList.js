class SearchableList extends React.Component {

	constructor(props) {
		super(props);
		this.productList = props.products;
		this.state = {
			searchTerm: "",
			filteredProducts: props.products
		}

		this.updateSearchState = this.updateSearchState.bind(this);
	}


	render() {
		return(
			<div>
				<SearchBar search={this.updateSearchState} />
				<SearchResults results={this.state.filteredProducts}/>
			</div>
		)
	}

	updateSearchState(searchTerm) {
		searchTerm = searchTerm.toLowerCase();
		let products = this.productList;
		if (searchTerm !== "") {
			products = products.filter(function(product) {
				return product.name.toLowerCase().includes(searchTerm) || product.brand.toLowerCase().includes(searchTerm);
			})
		}

		this.setState({searchTerm: searchTerm, filteredProducts: products})
	}



}
