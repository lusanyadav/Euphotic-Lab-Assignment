import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"

function DishListings() {
    
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/dishes/allDishes").then((result) => {
            setDishes(result.data.Dishes);
        }
        )
    }, []);
    
    return (
      <>
        <div className="bg-amber-200 rounded-4xl py-10 p-5 m-[2%]">
          {dishes.map((dish, index) => {
            return (
              <DishItem dish={dish} index={index} setDishes={setDishes} />
            );
          })}
        </div>
      </>
    );
}



function DishItem({ dish, index, setDishes }) {

    const fetchDishes = () => {
      axios.get("http://localhost:8080/dishes/allDishes").then((result) => {
        setDishes(result.data.Dishes);
      });
    };

    const handlePublish = async (dish) => {
      await axios.put(`http://localhost:8080/update/${dish.dishId}`, {
        isPublished: !dish.isPublished,
      });
      
      fetchDishes();
    };
    return ( 
        <>
            <div
                className="mx-[12%] rounded-4xl my-5 p-10 bg-red-300 w-[75%] flex hover:scale-106 transition-all duration-200"
                key={index}
              >
                <div>
                  <img
                    className="w-[300px] h-[250px] border-2 rounded-2xl"
                    src={dish.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-col mt-5 ml-[50px]">
                  <p className="font-bold italic">Dish Id: {dish.dishId}</p>
                  <p className="text-4xl mt-3 font-bold italic">
                    {dish.dishName}
                  </p>
                  <p>
                    Creamy paneer butter masala mixed with fragrant biryani
                    rice.
                  </p>
                  <div
                    className={
                      `${dish.isPublished ? "bg-green-600" : "bg-red-400"} p-2 w-35 mt-5 rounded-2xl flex justify-center`
                    }
                  >
                    <span>
                      {dish.isPublished ? "Published" : "Not Published"}
                    </span>
                  </div>
                  <div
                    onClick={(e) => {
                      handlePublish(dish);
                    }}
                    className="bg-blue-500 p-2 w-35 mt-7 ml-85 rounded-2xl flex justify-center hover:bg-blue-600 transition-all duration-200 hover:cursor-pointer"
                  >
                    <span>
                      {dish.isPublished ? "Unpublish Now" : "Publish Now"}
                    </span>
                  </div>
                </div>
              </div>
        </>
     );
}



export default DishListings;