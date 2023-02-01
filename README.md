# Flavor-symphony

## TLDR
- The main branch possess the working game.

- The feat/backend branch possess the working customer order (recipe) generation with the used backend but interaction aren't working.

- After doing everything to set-up the game, it should run on port https://localhost:5173

- Most of the interaction requires you to be really close and in front of the object, fusing bread with steak needs you to have one of them in hands (**SPACE**) and interact with the other with (**SHIFT**) while being really colliding with it.

## How to play
1. Clone the repository **main** branch
```
git clone https://github.com/ReaSlyn/Flavor-symphony.git
```

2. Install the dependencies
```
npm i
```

3. Run the game
```
**"npm run dev"**
```

Move with **ZQSD** for azerty keyboard or **WASD** for qwerty keyboard.
**SHIFT** is used to interact with food boxes, the plate pile, workboards, frying pans and the bin
**SPACE** is used to pick/drop bread, steak, tomato, cheese and plate.


## How to get a custom order (recipe)
1. Clone the repository **feat/backend** branch
```
git clone https://github.com/ReaSlyn/Flavor-symphony.git
```
```
git checkout feat/backend
```

2. Install the dependencies
```
npm i
```

3. Run MAMP/WAMP on "MAMP DEFAULT" which is 8889 for the mySQL

4. Don't forget to use "Flavor symphony" as the document root folder

5. Next run the command in the terminal in "Flavor symphony" folder to create the database schema
```
npx prisma db push
```

6. Then populate the database with the command
```
npx prisma db seed
```

7. Run the server with
```
npm run server
```

8. And the game with
```
npm run dev
```

### Help, i can't connect to the local databse
All the credentials of the local databased used is in the **".env"** file, we are using **"root"** as the user and password
