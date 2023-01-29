import { PrismaClient } from '@prisma/client';
import pkg from 'express';
import cors from 'cors';

const express = pkg;
const server = express();
const PORT = process.env.PORT || 5100;
const prisma = new PrismaClient();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

//Routes de L'api
server.get('/api/foodRecipe', async (req, res) => {
	try {
		const AllFoodRecipe = await prisma.FoodRecipe.findMany();
		res.json(AllFoodRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});
server.get('/api/food', async (req, res) => {
	try {
		const AllFood = await prisma.Food.findMany();
		res.json(AllFood);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});
server.get('/api/recipeFood', async (req, res) => {
	try {
		const allRecipesFood = await prisma.recipeFood.findMany();
		res.json(allRecipesFood);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Soul Burger
server.get(`/api/recipeFood/?idRecipe=${1}`, async (req, res) => {
	try {
		const soulBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 1 },
			include: { Food: true },
		});
		res.json(soulBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Supreme Burger
server.get(`/api/recipeFood/idRecipe=${2}`, async (req, res) => {
	try {
		const supremeBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 2 },
			include: { Food: true },
		});
		res.json(supremeBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Mommy's Burger
server.get(`/api/recipeFood/idRecipe=${3}`, async (req, res) => {
	try {
		const mommysBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 3 },
			include: { Food: true },
		});
		res.json(mommysBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Peckish Burger
server.get(`/api/recipeFood/idRecipe=${4}`, async (req, res) => {
	try {
		const peckishBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 4 },
			include: { Food: true },
		});
		res.json(peckishBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Bloody Burger
server.get(`/api/recipeFood/idRecipe=${5}`, async (req, res) => {
	try {
		const bloodyBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 5 },
			include: { Food: true },
		});
		res.json(bloodyBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});
//Friendly Burger
server.get(`/api/recipeFood/idRecipe=${6}`, async (req, res) => {
	try {
		const friendlyBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 6 },
			include: { Food: true },
		});
		res.json(friendlyBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Hess Burger
server.get(`/api/recipeFood/idRecipe=${7}`, async (req, res) => {
	try {
		const hessBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 7 },
			include: { Food: true },
		});
		res.json(hessBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

//Poor Burger
server.get(`/api/recipeFood/idRecipe=${8}`, async (req, res) => {
	try {
		const poorBurgerRecipe = await prisma.recipeFood.findMany({
			where: { idRecipe: 8 },
			include: { Food: true },
		});
		res.json(poorBurgerRecipe);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
		});
	}
});

server.listen(PORT, () => {
	console.log(`  Server running in port ${PORT}`);
});
export default server;
