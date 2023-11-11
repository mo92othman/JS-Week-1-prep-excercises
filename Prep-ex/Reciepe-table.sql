/* Cake Recipe Table */
CREATE TABLE CakeRecipes (
    recipe_id INT PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255)
);

/* Ingredient Table */
CREATE TABLE Ingredients (
    ingredient_id INT PRIMARY KEY,
    name VARCHAR(255)
);

/* Step Table */
CREATE TABLE Steps (
    step_id INT PRIMARY KEY,
    description TEXT
);

/* RecipeDetails Table */
CREATE TABLE RecipeDetails (
    recipe_id INT,
    ingredient_id INT,
    step_id INT,
    PRIMARY KEY (recipe_id, ingredient_id, step_id),
    FOREIGN KEY (recipe_id) REFERENCES CakeRecipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id),
    FOREIGN KEY (step_id) REFERENCES Steps(step_id)
);

/* Days Table */
CREATE TABLE Days (
    day_id INT PRIMARY KEY,
    day_name VARCHAR(255)
);

/* Orders Table */
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    day_id INT,
    recipe_id INT,
    FOREIGN KEY (day_id) REFERENCES Days(day_id),
    FOREIGN KEY (recipe_id) REFERENCES CakeRecipes(recipe_id)
);
