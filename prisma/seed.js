import pgk from "@prisma/client";
const { PrismaClient } = pgk;
const prisma = new PrismaClient();

const foods = [];
const recipes = [];
const menu = [];

//
// Food Data set
//
async function createFood() {
    foods.push(
        prisma.Food.create({
            data: {
                name: "Pain",
                isCookable: true,
                isCooking: true,
                isCooked: true,
                isChoppable: false,
                isChopping: false,
                isChopped: false,
                isGrabbed: true,
                delay: 1,
            },
        })
    );

    foods.push(
        prisma.Food.create({
            data: {
                name: "Steak",
                isCookable: true,
                isCooking: true,
                isCooked: true,
                isChoppable: true,
                isChopping: true,
                isChopped: true,
                isGrabbed: true,
                delay: 1,
            },
        })
    );

    foods.push(
        prisma.Food.create({
            data: {
                name: "Fromage",
                isCookable: false,
                isCooking: false,
                isCooked: false,
                isChoppable: true,
                isChopping: true,
                isChopped: true,
                isGrabbed: true,
                delay: 1,
            },
        })
    );

    foods.push(
        prisma.Food.create({
            data: {
                name: "Salade",
                isCookable: false,
                isCooking: false,
                isCooked: false,
                isChoppable: true,
                isChopping: true,
                isChopped: true,
                isGrabbed: true,
                delay: 1,
            },
        })
    );

    foods.push(
        prisma.Food.create({
            data: {
                name: "Tomate",
                isCookable: false,
                isCooking: false,
                isCooked: false,
                isChoppable: true,
                isChopping: true,
                isChopped: true,
                isGrabbed: true,
                delay: 1,
            },
        })
    );

    return Promise.all(foods);
}

//
// Recipe Data set
//

async function createRecipe() {
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Supreme burger",
                timer: 1,
            },
        })
    );
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Bloody burger",
                timer: 1,
            },
        })
    );

    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Mommy's burger",
                timer: 1,
            },
        })
    );

    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Soul burger",
                timer: 1,
            },
        })
    );
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Peckish burger",
                timer: 1,
            },
        })
    );
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Friendly burger",
                timer: 1,
            },
        })
    );
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Poor burger",
                timer: 1,
            },
        })
    );
    recipes.push(
        prisma.FoodRecipe.create({
            data: {
                name: "Hess burger",
                timer: 1,
            },
        })
    );

    return Promise.all(recipes);
}
//
// RecipeFood Data set
//
async function createFoodRecipe() {
    // SUPREME BURGER
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 2,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 2,
                idRecipe: 2,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 2,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 4,
                idRecipe: 2,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 5,
                idRecipe: 2,
                quantity: 1,
            },
        })
    );

    //BLOODY BURGER
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 3,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 2,
                idRecipe: 3,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 3,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 4,
                idRecipe: 3,
                quantity: 1,
            },
        })
    );

    //MOMMY'S BURGER
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 4,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 2,
                idRecipe: 4,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 4,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 5,
                idRecipe: 4,
                quantity: 1,
            },
        })
    );

    //SOUL BURGER
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 1,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 1,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 4,
                idRecipe: 1,
                quantity: 1,
            },
        })
    );
    menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 5,
                idRecipe: 1,
                quantity: 1,
            },
        })
    );

	//Peckish burger
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 6,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 2,
                idRecipe: 6,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 4,
                idRecipe: 6,
                quantity: 1,
            },
        })
    );

	//Friendly burger
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 5,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 5,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 4,
                idRecipe: 5,
                quantity: 1,
            },
        })
    );
	//Poor burger
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 8,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 3,
                idRecipe: 8,
                quantity: 1,
            },
        })
    );
	//Hess burger
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 1,
                idRecipe: 7,
                quantity: 1,
            },
        })
    );
	menu.push(
        prisma.recipeFood.create({
            data: {
                idFood: 5,
                idRecipe: 7,
                quantity: 1,
            },
        })
    );

    return Promise.all(menu);
}

async function main() {
    await createFood();
    await createRecipe();
    await createFoodRecipe();

    const allRecipes = await prisma.FoodRecipe.findMany();
    console.dir(allRecipes, { depth: null });
}

main();

