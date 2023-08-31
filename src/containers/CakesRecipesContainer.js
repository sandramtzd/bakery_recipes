import { useState } from "react";
import RecipeComponent from "../components/RecipeComponent";

const CakesRecipesContainer = () => {

    
    const [totalSales, setTotalSales] = useState(0);

    return(

        <>
            <h2>Cake Recipes</h2>
            <RecipeComponent
                cakeName={"Victora Sponge"}
                ingredients={["eggs, butter, sugar, self-raising flour, baking powder, milk"]}
                price={5}
                rating={5}
                onButtonClick={setTotalSales}
            />
            <RecipeComponent
                cakeName={"Tea Loaf"}
                ingredients={["eggs, oil, dried fruit, sugar, self-raising flour, strong tea"]}
                price={2}
                rating={5}
                onButtonClick={setTotalSales}
            />
            <RecipeComponent
                cakeName={"Carrot Cake"}
                ingredients={["carrots, walnuts, oil, cream, cheese, flour, sugar"]}
                price={8}
                rating={5}
                onButtonClick={setTotalSales}
            />
            <p>Average Rating: X</p>
            <p>Total Sales: {totalSales} £</p>

        
        </>
    )
}
export default CakesRecipesContainer;