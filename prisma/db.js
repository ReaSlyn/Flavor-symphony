import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const foods = []
const recipes = []

async function createFood() {
	foods.push(
		prisma.Food.create({
			data: {
				name: 'Pain',
				isCookable: true,
				isCooking : true,
				isCooked  : true,
				isChoppabl: false,
				isChopping: false,
				isChopped : false,
				isGrabbed : true,
				delay     : 1
			},
		})
	)

	foods.push(
		prisma.Food.create({
			data: {
				name: 'Steak',
				isCookable: true,
				isCooking : true,
				isCooked  : true,
				isChoppabl: true,
				isChopping: true,
				isChopped : true,
				isGrabbed : true,
				delay     : 1
			},
		})
	)

	foods.push(
		prisma.Food.create({
			data: {
				name: 'Fromage',
				isCookable: false,
				isCooking : false,
				isCooked  : false,
				isChoppabl: true,
				isChopping: true,
				isChopped : true,
				isGrabbed : true,
				delay     : 1
			},
		})
	)

	foods.push(
		prisma.Food.create({
			data: {
				name: 'Salade',
				isCookable: false,
				isCooking : false,
				isCooked  : false,
				isChoppabl: true,
				isChopping: true,
				isChopped : true,
				isGrabbed : true,
				delay     : 1
			},
		})
	)
	
	foods.push(
		prisma.Food.create({
			data: {
				name: 'Tomate',
				isCookable: false,
				isCooking : false,
				isCooked  : false,
				isChoppabl: true,
				isChopping: true,
				isChopped : true,
				isGrabbed : true,
				delay     : 1
			},
		})
	)

	return Promise.all(foods)
}



// const allFood = await prisma.Food.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allFood, { depth: null })



async function createRecipe() {
	
	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Suprême burger',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[2], // fromage
					foods[3], // salade
					foods[4], // tomate
				],
				timer: 1,
				level: 3
			},	
		})
	)
		
	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Burger sanglant',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[2], // fromage
					foods[4], // tomate
				],
				timer: 1,
				level: 2
				
			},
		})
	)

	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Le burger de maman',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[2], // fromage
					foods[3], // salade
				],
				timer: 1,
				level: 2
			
			},
		}),
	)

	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Le burger sans âme',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[3], // salade
					foods[4], // tomate
				],
				timer: 1,
				level: 2
				
			},
		}),
	)

	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Burger petite faim',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[4], // tomate
				],
				timer: 1,
				level: 1
				
			},
		}),
	)		
		
	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Burger convivial',
				foods: [
					foods[0], // pain
					foods[1], // steak
					foods[3], // salade
				],
				timer: 1,
				level: 1
				
			},
		}),
	)		

	recipes.push(
		prisma.FoodRecipe.create({
			data: {
				name: 'Burger du pauvre',
				foods: [
					foods[0], // pain
					foods[1], // steak

				],
				timer: 1,
				level: 1
				
			},
		}),
	)		
		
	return Promise.all(recipes)
}

async function main() {
	await createFood()
	await createRecipe()

	const allRecipes = await prisma.FoodRecipe.findMany()
	console.dir(allRecipes, { depth: null })
}

main()


// model FoodRecipe {
//     id    Int     @id @default(autoincrement())
//     name  String
//     food  Food[]
//     timer Int
//     Level Level[]
//   }