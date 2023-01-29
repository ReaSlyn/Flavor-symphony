import { PrismaClient } from "@prisma/client";
import pkg from "express";
import cors from "cors";

const express = pkg;
const server = express();
const PORT = process.env.PORT || 5100;
const prisma = new PrismaClient();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//Routes de L'api

server.get("/api/foodRecipe", async (req, res) => {
    try {
        const AllFoodRecipe = await prisma.FoodRecipe.findMany();
        res.json(AllFoodRecipe);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
});

server.listen(PORT, () => {
    console.log(`  Server running in port ${PORT}`);
});
export default server;
