


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { FoodRecipe} = prisma;



export default{
    getAll(req, res){
    FoodRecipe.findMany().then((data)=> {
        res.status(200).send(data)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving users',
        })
    })

        
    },
}
