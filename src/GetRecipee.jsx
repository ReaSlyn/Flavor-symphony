import RecetteCard from "./RecetteCard";

import React from 'react'
import { useState } from "react";

export default function GetRecipee() {
 const [posts, setPosts] = useState([]);
  componentDidMount()  {
    fetch('http://localhost:5100/api/foodRecipe')
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }
console.log(posts);
}


// const getFoodRecipe  = await prisma.FoodRecipe.findMany({
//     where: {
//       id: 1

//     },
//     select: {
//         id: true,
//         name: true,
//     }
//   })
   

  
//   console.log("mon id est :",getFoodRecipe)


//   export default function GetRecipe(props) {
    // Query all notes in the database
    // (Prisma translates this query to SQL)
    // const recipe = prisma.note.findMany({
    //   where: {
    //     title: {
    //       contains: searchText,
    //     },
    //   },
    // });
    
// console.log('lalala')
    
    
  
    









    
    // const  getNewFoodRecipe = async ()=> await prisma?.FoodRecipe.findUnique({
    //   where: {
    //     id: props.id,
  
    //   },
    //   select: {
    //       id: true,
    //       name: true,
    //   }
      
    // });
    // console.log("mon id est :",getNewFoodRecipe)
    

// console.log("mon id est :",1)

// console.log("mon nom est :",then.name)
// Display notes in React component

  // return (
  //   <ul> 
  //     {this.state.posts.map(post => (
  //       <li key={post.id}>{post.title}</li>
  //     ))}
  //   </ul>
  //  )
}

    // console.log("mon id est :",1)
    // { console.dir(getNewFoodRecipe, { depth: null })}
    // console.log("mon nom est :",getNewFoodRecipe.name)
    // // Display notes in React component
    // getNewFoodRecipe();

    // console.log("mon nom est :",getNewFoodRecipe.name)
    // getNewFoodRecipe();
    // console.log("mon nom est :",getNewFoodRecipe.name)
    // return getNewFoodRecipe.length >= 0 ? (
    //   console.log("mon id est :",getNewFoodRecipe),
    //   <ul className="notes-list">
    //     { console.dir(getNewFoodRecipe, { depth: null })}
    //     {getNewFoodRecipe.id.map((NewFoodRecipe) => 
    //       <li key={NewFoodRecipe.id}>
    //         {console.log('Jai eu la requette : '+ NewFoodRecipe.id)}
    //         <RecetteCard x={-5} />
    //       </li>
    //     )}
    //   </ul>
    // ) : (
    // null
    // );
  // }