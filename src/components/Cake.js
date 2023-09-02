const Cake = ()



const RecipeComponent =({cakeName, ingredients, price, rating, onButtonClick})=> {
let totalSales;
    const handleSellCakeClick = () => {
        
        onButtonClick(totalSales += price);
    }



    return (
         <>
            <h3>{cakeName}</h3>
            <p>Ingredients: {ingredients}</p>
            <p>Price : {price} £</p>
            <p>Rating: {rating}</p>
            <button onClick = {handleSellCakeClick}>Sell Cake</button>
            <hr></hr>
         
         </>
    )

}

export default Cake;