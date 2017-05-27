// class SearchResults extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 	}
//
// 	render() {
// 		let products = this.props.results.map(function(product, index) {
// 			return(
// 				<div key={index}>
// 					<div>{product.name}</div>
// 					<div>{product.brand}</div>
// 				</div>
// 			)
// 		});
//
// 		return(
// 			<div>
// 				{products}
// 			</div>
// 			)
// 	}
//
// }

function SearchResults(props) {
	let products = props.results.map(function(product, index) {
		return(
			<div key={index}>
				<div>{product.name}</div>
				<div>{product.brand}</div>
			</div>
		)
	});

	return(
		<div>
			{products}
		</div>
	)
}
