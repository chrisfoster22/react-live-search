
let productList = [
	{
		name: "Desk",
		brand: "Authentic Wood Furniture",
		price: 99.99
	},
	{
		name: "Padded Chair",
		brand: "Authentic Wood Furniture",
		price: 59.99
	},
	{
		name: "Side Table",
		brand: "Modern Trendz",
		price: 149.99
	},
	{
		name: "Skrlui Bedframe",
		brand: "Sensational Sweden",
		price: 599.99
	},
	{
		name: "Minimalist Entertainment Center",
		brand: "Modern Trendz",
		price: 189.99
	},
	{
		name: "Beige Couch",
		brand: "American Furniture (From America!)",
		price: 889.99
	},
	{
		name: "Reclining Futon",
		brand: "Unique Collections",
		price: 359.99
	},

]

ReactDOM.render(
	<SearchableList products={productList} />,
	document.getElementById("react")
)
