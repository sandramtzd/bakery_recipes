import { useState } from "react";
import Cake from "../components/Cake";

const CakesContainer = () => {

    const [cakes, setCakes] = useState(
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter", 
                "sugar", 
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5

        },

        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil", 
                "dried fruit", 
                "sugar",
                "self-raising flour",
                "strong tea"
            ],
            price: 5,
            rating: 5

        },

        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts", 
                "oil", 
                "cream cheese",
                "flour",
                "sugar"
            ],
            price: 8,
            rating: 5

        }



    );

    

    //EXTENSION -TRACKING REVENUE

    const[revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }


    return(
        <>
            <div className= "container">
                <Cake cake={victoraSponge} updateRevenue={updateRevenue}/>
                <Cake cake={teaLoaf} updateRevenue={updateRevenue}/>
                <Cake cake={carrotCake} updateRevenue={updateRevenue}/>
            </div>
            <p>Average Rating: {(victoraSponge.rating)}</p>
            <p id = "price">Total Sales: £{revenue}</p>
        
        </>

        // <>
        //     <h2>Cake Recipes</h2>
        //     <RecipeComponent
        //         cakeName={"Victora Sponge"}
        //         ingredients={["eggs, butter, sugar, self-raising flour, baking powder, milk"]}
        //         price={5}
        //         rating={5}
        //         onButtonClick={setTotalSales}
        //     />
        //     <RecipeComponent
        //         cakeName={"Tea Loaf"}
        //         ingredients={["eggs, oil, dried fruit, sugar, self-raising flour, strong tea"]}
        //         price={2}
        //         rating={5}
        //         onButtonClick={setTotalSales}
        //     />
        //     <RecipeComponent
        //         cakeName={"Carrot Cake"}
        //         ingredients={["carrots, walnuts, oil, cream, cheese, flour, sugar"]}
        //         price={8}
        //         rating={5}
        //         onButtonClick={setTotalSales}
        //     />
        //     <p>Average Rating: X</p>
        //     <p>Total Sales: {totalSales} £</p>

        
        // </>
    );
}
export default CakeContainer;