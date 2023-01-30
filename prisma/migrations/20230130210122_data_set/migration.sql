-- CreateTable
CREATE TABLE `FoodRecipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `timer` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isCookable` BOOLEAN NOT NULL,
    `isCooking` BOOLEAN NOT NULL,
    `isCooked` BOOLEAN NOT NULL,
    `isChoppable` BOOLEAN NOT NULL,
    `isChopping` BOOLEAN NOT NULL,
    `isChopped` BOOLEAN NOT NULL,
    `isGrabbed` BOOLEAN NOT NULL,
    `delay` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recipeFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFood` INTEGER NOT NULL,
    `idRecipe` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Save` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `points` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saveId` INTEGER NULL,
    `foodRecipeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `recipeFood` ADD CONSTRAINT `recipeFood_idFood_fkey` FOREIGN KEY (`idFood`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipeFood` ADD CONSTRAINT `recipeFood_idRecipe_fkey` FOREIGN KEY (`idRecipe`) REFERENCES `FoodRecipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Level` ADD CONSTRAINT `Level_saveId_fkey` FOREIGN KEY (`saveId`) REFERENCES `Save`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Level` ADD CONSTRAINT `Level_foodRecipeId_fkey` FOREIGN KEY (`foodRecipeId`) REFERENCES `FoodRecipe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
