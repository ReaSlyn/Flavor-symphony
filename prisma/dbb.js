// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   await prisma.Food.create({
//     data: {
//       name: 'Pain',
//       isCookable: true,
//       isCooking : true,
//       isCooked  : true,
//       isChoppabl: true,
//       isChopping: true,
//       isChopped : true,
//       isGrabbed : true,
//       delay     : 1,
     
     
    
//     },
//   })
// }


// const allFood = await prisma.Food.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allFood, { depth: null })



async function main() {
  await prisma.FoodRecipe.create({
    data: {

      name: 'Tomate farcie',
      timer     : 1,
    },
  })
}
main()
const allFood = await prisma.FoodRecipe.findMany()
      console.dir(allFood, { depth: null })
    

// model FoodRecipe {
//     id    Int     @id @default(autoincrement())
//     name  String
//     food  Food[]
//     timer Int
//     Level Level[]
//   }