const Cake = ({cake, updateRevenue})=> {

    const handleSellCakeClick = () => {
        updateRevenue(cake.price)
    }

    return (
        <div className="cake">
           <h3>{cake.cakeName}</h3>
           <h4>Ingredients:</h4>
           <ul>
            {cake.ingredients.map(ingredient => {
                return <li>{ingredient}</li>
            })}
           </ul>
           <p>Rating : {cake.rating}</p>
           <p>Price: £{cake.price}</p>
           <button onClick = {handleSellCakeClick}>Sell Cake</button>
        
        </div>
   )

}

export default Cake;

// FIRST ATTEMPT
// const RecipeComponent =({cakeName, ingredients, price, rating, onButtonClick})=> {
// let totalSales;