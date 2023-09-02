import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
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



    ]); // stablishing cakes's array by adding square brackets


    //EXTENSION -TRACKING REVENUE

    const[revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }

    const rating = cakes.victoraSponge.rating + cakes.teaLoaf.rating + cakes.carrotCake.rating 

    const mappedCakes = cakes.map((cake, id) => {
        return <Cake
                    cake = {cake}
                    updateRevenue = {updateRevenue}
                />
    })

    return(
        <>
            <div className= "container">
                {mappedCakes}
            </div>
            <p id = "rating">Average Rating: {rating}</p>
            <p id = "price">Total Sales: £{revenue}</p>
        
        </>
       
    );
}
export default CakeContainer;

// FIRST ATTEMPT
        // <>
        //     <h2>Cake Recipes</h2>
        //     <RecipeComponent
        //         cakeName={"Victora Sponge"}
        //         ingredients={["eggs, butter, sugar, self-raising flour, baking powder, milk"]}
        //         price={5}
        //         rating={5}
        //         onButtonClick={setTotalSales}