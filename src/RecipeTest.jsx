import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Random from '/Helper/Random.jsx';
import RecetteCard from './RecetteCard';
import GetRecipe from './GetRecipeee';


export default function RecipeTest() {

    const allRecipes = [];
    const [newRecipe, setNewRecipe] = useState(1);
   
    

    useEffect(() => {
    
                const timer = setInterval(() => {
               
               
                  let number = Random(1, 2);
                allRecipes.push(number);
                
                console.log(allRecipes)
                  let number1 = Random(1, 2);
                allRecipes.push(number1);
                console.log(allRecipes);
                
              
            }, 5000);
                    return () => clearTimeout(timer);
                    

                  }, []);
                  return (
                    <>
                    
                    <GetRecipe id={allRecipes[0]}/>
                    
                    <RecetteCard x={-1}  />
                  
                    <GetRecipe id={allRecipes[1]}/>
                     </>
                  )
                }
        



//                 console.log("ezeaezae") ;
                

//                 // const getFoodRecipe  = await prisma.FoodRecipe.findUnique({
//                 //     where: {
//                 //       id: 1,
//                 //     },
//                 //     select: {
//                 //         id: true,
//                 //         name: true,
//                 //     }
//                 //   })
//                 //     console.log("mon id est :",getFoodRecipe)
    

//     // setNewRecipe(Random(1, 10));
   
   
//     // setNewRecipe =Random(1, 10);
// //     // console.log(newRecipe)
// //   if(allRecipes.length < 3){
// //     useEffect(() => {
    
// //         const timer = setInterval(() => {
// //        if(allRecipes.length > 3){
// //           console.log(setNewRecipe)
// //           const number = Random(1, 10);
// //           console.log(number)
// //         allRecipes.push(number);

// //       }

// //         //  setNewRecipe((curr)=>{
// //         //       return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// //         //  })
// //         //  console.log({curr,newRecipe})
    
        
// //         }, 2000);
// //         return () => clearInterval(timer);
// //       }, []);
// // }





