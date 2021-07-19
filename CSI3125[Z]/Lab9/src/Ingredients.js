import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AccordionMP from "./Accordion";
import AccordionOpenDefault from "./AccordionOpenDefault";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import StarRatings from "react-rating-stars-component";

const ResultsSection = ({
  props,
  warn,
  isCheckedMeat0,
  meat0,
  isCheckedMeat1,
  meat1,
  isCheckedMeat2,
  meat2,
  isCheckedMeat3,
  meat3,
  isCheckedVeg0,
  veg0,
  isCheckedVeg1,
  veg1,
  isCheckedVeg2,
  veg2,
  isCheckedFruit0,
  fruit0,
  isCheckedFruit1,
  fruit1,
  isCheckedDairy0,
  dairy0,
  isCheckedDairy1,
  dairy1,
}) => {
  let resultContent = {
    English: {
      title: "Results",
      time_to_cook: "Time to Cook: ",
      notFound:
        "Sorry we couldn’t find a recipe with the ingredients you chose.",
      recipes: [
        {
          id: "chicken_marinade",
          title: "Chicken Marinade",
          image: "/chicken_marinade.PNG",
          ingredients: [
            "- Cup of olive oil",
            "- Spicy brown mustard",
            "- Chicken",
          ],
          steps: [
            "1. In a large bowl, mix the olive oil and mustard, and place chicken in the bowl",
            "2. Preheat the grill for high heat.",
            "3. Oil grill grate. Discard marinade, and place chicken on grate. Cook 6 to 8 minutes on each side, until juices run clear.",
          ],
          prep: "15 mins",
          cook: "16 mins",
          total: "4 hrs 30 mins",
          servings: "4",
          yield: "4 servings",
          rating: 4,
          Nutrition_info:
            "Per Serving: 549 calories; protein 27.5g; carbohydrates 7g; fat 46.1g; cholesterol 67.2mg; sodium 1573.9mg.",
        },
        {
          id: "teriyaki_chicken",
          title: "Teriyaki Chicken",
          image: "/teriyaki_chicken.PNG",
          ingredients: [
            "- Chicken",
            "- Sugar",
            "- Soy sauce",
            "- 2 cloves garlic, minced",
          ],
          steps: [
            "1. Rinse chicken halves, and pat dry with paper towels",
            "2. Mix sugar, garlic and pour on chicken",
            "3. Bake chicken uncovered in the preheated oven for 1 hour",
          ],
          prep: "30 mins",
          cook: "1 hr",
          total: "1 hr 30 mins",
          servings: "6",
          yield: "6 servings",
          rating: 3.5,
          Nutrition_info:
            "Per Serving: 604 calories; protein 44.3g; carbohydrates 27.9g; fat 34.2g; cholesterol 170.3mg; sodium 1963mg.",
        },
        {
          id: "grilled_tuna",
          title: "Grilled Tuna",
          image: "/grilled_tuna.PNG",
          ingredients: [
            "- Tuna",
            "- 3 tablespoons extra virgin olive oil",
            "- Salt ",
            "- 1 lime, juiced",
          ],
          steps: [
            "1. Place tuna steaks and olive oil in a large resealable plastic bag. Seal, and refrigerate for 1 hour",
            "2. Preheat the grill for medium heat",
            "3. Season tuna with salt and pepper, and cook on the preheated grill approximately 6 minutes, turning once",
          ],
          prep: "10 mins",
          cook: "6 mins",
          total: "1 hr 16 mins",
          servings: "4",
          yield: "4 servings",
          rating: 4.5,
          Nutrition_info:
            "Per Serving: 281 calories; protein 40g; carbohydrates 1.8g; fat 11.8g; cholesterol 77.1mg; sodium 644.2mg.",
        },
        {
          id: "oven_fried_salmon",
          title: "Oven-Fried Salmon",
          image: "/oven_fried_salmon.PNG",
          ingredients: ["- Garlic", "- Cheese", "- Salmon"],
          steps: [
            "1. Preheat the oven to 500 degrees F ",
            "2. Coat salmon on all sides with olive oil mixture",
            "3. Bake in the preheated oven",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "25 mins",
          servings: "6",
          yield: "6 servings",
          rating: 5,
          Nutrition_info:
            "Per Serving: 405 calories; protein 31.2g; carbohydrates 13.7g; fat 24.2g; cholesterol 80.3mg; sodium 694.7mg.",
        },
        {
          id: "beef_stew",
          title: "Beef Stew",
          image: "/beef_stew.PNG",
          ingredients: [
            "- Vegetable oil",
            "- Garlic",
            "- 1 onion",
            "- Beef",
            "- 1 can crushed tomatoes",
          ],
          steps: [
            "1. Heat oil in a large pot over medium-high heat. Add meat, flour, onion, and garlic",
            "2. Add broth, tomatoes and cook for about 1 hour",
          ],
          prep: "20 mins",
          cook: "1 hr 10 mins",
          total: "1 hr 30 mins",
          servings: "8",
          yield: "8 servings",
          rating: 3,
          Nutrition_info:
            "Per Serving: 403 calories; protein 24.4g; carbohydrates 27.7g; fat 21.5g; cholesterol 62.6mg; sodium 238.3mg.",
        },
        {
          id: "roasted_garlic",
          title: "Roasted Garlic",
          image: "/roasted_garlic.PNG",
          ingredients: ["- Garlic", "- Olive oil"],
          steps: [
            "1. Preheat oven to 400 degrees F (200 degrees C).",
            "2. Arrange heads of garlic on a baking sheet. Sprinkle garlic with olive oil. Bake for 40 minutes to 1 hour",
          ],
          prep: "5 mins",
          cook: "1 hr",
          total: "1 hr 5 mins",
          servings: "15",
          yield: "15 servings",
          rating: 2.5,
          Nutrition_info:
            "Per Serving: 80 calories; protein 2.4g; carbohydrates 12.3g; fat 2.9g; sodium 6.4mg.",
        },
        {
          id: "stuffed_potatoes",
          title: "Stuffed Potatoes",
          image: "/stuffed_potatoes.PNG",
          ingredients: [
            "- Potato",
            "- Cheddar cheese",
            "- Sour cream and onion dip",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Bake potatoes in preheated oven for 45 minutes",
            "3. Slice tops off of potatoes and scoop the flesh into a large bowl",
            "4. To the potato flesh add the cheese and dip. Mix well and spoon mixture into potato skins.",
          ],
          prep: "15 mins",
          cook: "1 hr 30 mins",
          total: "1 hr 45 mins",
          servings: "4",
          yield: "4 servings",
          rating: 4,
          Nutrition_info:
            "Per Serving: 512 calories; protein 21.7g; carbohydrates 63.6g; fat 20g; cholesterol 62.7mg; sodium 416.5mg. ",
        },
        {
          id: "oven_roasted_potatoes",
          title: "Oven-Roasted Potatoes",
          image: "/oven_roasted_potatoes.PNG",
          ingredients: ["- Potato", "- Olive oil", "- Salt", "- Pepper"],
          steps: [
            "1. Preheat oven to 400 degrees F",
            "2. Add olive oil, seasoned salt, salt, and black pepper; mix well. Spread potatoes on a baking sheet.",
            "3. Bake in preheated oven for 30 minutes, turning potatoes occasionally",
          ],
          prep: "10 mins",
          cook: "1 hr",
          total: "1 hr 10 mins",
          servings: "6",
          yield: "6 servings",
          rating: 4.5,
          Nutrition_info:
            "Per Serving: 206 calories; protein 4.4g; carbohydrates 37.6g; fat 4.7g; sodium 553.5mg.",
        },
        {
          id: "oven_roasted_grapetomatoes",
          title: "Oven Roasted Grape Tomatoes",
          image: "/oven_roasted_grapetomatoes.PNG",
          ingredients: [
            "- Tomato",
            "- Garlic",
            "- Salt",
            "- Olive oil",
            "- Basil",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Drizzle olive oil over tomatoes and top with garlic, basil and salt",
            "3. Bake in the preheated oven until tomatoes are tender, about 30 minutes",
          ],
          prep: "15 mins",
          cook: "30 mins",
          total: "45 mins",
          servings: "2",
          yield: "2 servings",
          rating: 3.5,
          Nutrition_info:
            "Per Serving: 113 calories; protein 2.2g; carbohydrates 11.7g; fat 7.5g; sodium 98.7mg.",
        },
        {
          id: "tomato_mozzarella_salad",
          title: "Tomato Mozzarella Salad",
          image: "/tomato_mozzarella_salad.PNG",
          ingredients: [
            "- Tomato",
            "- Mozzarella cheese",
            "- Olive oil",
            "- Salt",
            "- Balsamic vinegar",
          ],
          steps: [
            "1. Place tomato slices, alternating with mozzarella slices, on a large serving platter.",
            "2. Drizzle over tomatoes and mozzarella olive oil, salt and vinegar",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "20 mins",
          servings: "6",
          yield: "6 servings",
          rating: 5,
          Nutrition_info:
            "Per Serving: 199 calories; protein 10.1g; carbohydrates 6.2g; fat 15.2g; cholesterol 24.2mg; sodium 338.3mg.",
        },
        {
          id: "french_strawberry_cake",
          title: "French Strawberry Cake",
          image: "/french_strawberry_cake.PNG",
          ingredients: [
            "- White sugar",
            "- 2 eggs",
            "- Vanilla extract",
            "- Baking powder",
            "- Strawberry",
          ],
          steps: [
            "1. Preheat the oven to 350 degrees F ",
            "2. Whisk together flour, baking powder, and salt in a medium bowl",
            "3. Spread batter into the prepared cake pan",
            "4. Bake in the preheated oven",
          ],
          prep: "20 mins",
          cook: "40 mins",
          total: "1 hr",
          servings: "10",
          yield: "1 8-inch round cake pan",
          rating: 4.5,
          Nutrition_info:
            "Per Serving: 294 calories; protein 3.7g; carbohydrates 42g; fat 12.9g; cholesterol 66.6mg; sodium 141.3mg.",
        },
        {
          id: "cookie_butter_cookies",
          title: "Cookie Butter Cookies",
          image: "/cookie_butter_cookies.PNG",
          ingredients: [
            "- Butter",
            "- Brown sugar",
            "- Cup of cookie butter",
            "- 2 cups flour",
            "- 1 egg",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Beat butter, brown sugar, and 3/4 cup white sugar with an electric mixer in a large bowl until smooth. ",
            "3. Bake in preheated oven until golden brown, about 12 minutes.",
          ],
          prep: "15 mins",
          cook: "12 mins",
          total: "27 mins",
          servings: "25",
          yield: "25 cookies",
          rating: 3,
          Nutrition_info:
            "Per Serving: 196 calories; protein 2.6g; carbohydrates 24g; fat 10.2g; cholesterol 22.1mg; sodium 125.3mg.",
        },
        {
          id: "grilled_cheese_sandwich",
          title: "Grilled Cheese Sandwich",
          image: "/grilled_cheese_sandwich.PNG",
          ingredients: [
            "- 1 tablespoon butter",
            "- Cheese",
            "- 1 glazed raised ring doughnut, halved horizontally",
          ],
          steps: [
            "1. Spread butter onto the cut sides of the doughnut",
            "2. Cook, flipping once, until lightly browned on both sides and cheese is melted, about 4 minutes.",
          ],
          prep: "5 mins",
          cook: "4 mins",
          total: "9 mins",
          servings: "1",
          yield: "1 sandwich",
          rating: 2.5,
          Nutrition_info:
            "Per Serving: 543 calories; protein 17.9g; carbohydrates 27.8g; fat 40.6g; cholesterol 98mg; sodium 745.6mg. ",
        },
      ],
    },
    Français: {
      title: "Résultats",
      time_to_cook: "Temps à cuire: ",
      notFound:
        "Désolé, nous n'avons pas trouvé de recette avec les ingrédients que vous avez choisis.",
      recipes: [
        {
          id: "chicken_marinade",
          title: "Marinade au Poulet",
          image: "/chicken_marinade.PNG",
          ingredients: [
            "- Tasse d'huile d'olive",
            "- Moutarde brune épicée",
            "- Poulet",
          ],
          steps: [
            "1. Dans un grand bol, mélangez l'huile d'olive et la moutarde et placez le poulet dans le bol",
            "2. Préchauffez le gril à feu vif.",
            "3. Huilez la grille du gril. Jeter la marinade et placer le poulet sur la grille. Cuire 6 à 8 minutes de chaque côté, jusqu'à ce que le jus soit clair.",
          ],
          prep: "15 mins",
          cook: "16 mins",
          total: "4 hrs 30 mins",
          servings: "4",
          yield: "4 portions",
          rating: 4,
          Nutrition_info:
            "Par portion: 549 calories; protéine 27,5 g; glucides 7g; graisse 46,1 g; cholestérol 67,2 mg; sodium 1573,9 mg.",
        },
        {
          id: "teriyaki_chicken",
          title: "Poulet teriyaki",
          image: "/teriyaki_chicken.PNG",
          ingredients: [
            "- Poulet",
            "- Sucre",
            "- Sauce soja",
            "- 2 gousses d'ail émincées",
          ],
          steps: [
            "1. Rincer les moitiés de poulet et les sécher avec du papier absorbant",
            "2. Mélanger le sucre, l'ail et verser sur le poulet",
            "3. Cuire le poulet à découvert dans le four préchauffé pendant 1 heure",
          ],
          prep: "30 mins",
          cook: "1 hr",
          total: "1 hr 30 mins",
          servings: "6",
          yield: "6 portions",
          rating: 3.5,
          Nutrition_info:
            "Par portion: 604 calories; protéine 44,3 g; glucides 27,9 g; graisse 34,2 g; cholestérol 170,3 mg; sodium 1963 mg.",
        },
        {
          id: "grilled_tuna",
          title: "Thon grillé",
          image: "/grilled_tuna.PNG",
          ingredients: [
            "- Thon",
            "- 3 cuillères à soupe d'huile d'olive extra vierge",
            "- Sel",
            "- 1 citron vert pressé",
          ],
          steps: [
            "1. Placez les steaks de thon et l'huile d'olive dans un grand sac en plastique refermable. Sceller et réfrigérer pendant 1 heure",
            "2. Préchauffez le gril à feu moyen",
            "3. Assaisonner le thon avec du sel et du poivre et cuire sur le gril préchauffé environ 6 minutes, en le retournant une fois",
          ],
          prep: "10 mins",
          cook: "6 mins",
          total: "1 hr 16 mins",
          servings: "4",
          yield: "4 portions",
          rating: 4.5,
          Nutrition_info:
            "Par portion: 281 calories; protéine 40g; glucides 1,8 g; matières grasses 11,8 g; cholestérol 77,1 mg; sodium 644,2 mg.",
        },
        {
          id: "oven_fried_salmon",
          title: "Saumon frit au four",
          image: "/oven_fried_salmon.PNG",
          ingredients: ["- Ail", "- Fromage", "- Saumon"],
          steps: [
            "1. Préchauffez le four à 500 degrés F",
            "2. Enrober le saumon de tous les côtés du mélange d'huile d'olive",
            "3. Bake in the preheated oven",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "25 mins",
          servings: "6",
          yield: "6 portions",
          rating: 5,
          Nutrition_info:
            "Par portion: 405 calories; protéine 31,2 g; glucides 13,7 g; graisse 24,2 g; cholestérol 80,3 mg; sodium 694,7 mg.",
        },
        {
          id: "beef_stew",
          title: "Ragoût de bœuf",
          image: "/beef_stew.PNG",
          ingredients: [
            "- Huile végétale",
            "- Ail",
            "- 1 oignon",
            "- Boeuf",
            "- 1 boîte de tomates concassées",
          ],
          steps: [
            "1. Chauffer l'huile dans une grande casserole à feu moyen-vif. Ajouter la viande, la farine, l'oignon et l'ail",
            "2. Ajouter le bouillon, les tomates et cuire environ 1 heure",
          ],
          prep: "20 mins",
          cook: "1 hr 10 mins",
          total: "1 hr 30 mins",
          servings: "8",
          yield: "8 portions",
          rating: 3,
          Nutrition_info:
            "Par portion: 403 calories; protéine 24,4 g; glucides 27,7 g; matières grasses 21,5 g; cholestérol 62,6 mg; sodium 238,3 mg.",
        },
        {
          id: "roasted_garlic",
          title: "Ail rôti",
          image: "/roasted_garlic.PNG",
          ingredients: ["- Ail", "- Huile d'olive"],
          steps: [
            "1. Préchauffer le four à 400 degrés F (200 degrés C).",
            "2. Disposer les têtes d'ail sur une plaque à pâtisserie. Saupoudrer l'ail d'huile d'olive. Cuire au four de 40 minutes à 1 heure",
          ],
          prep: "5 mins",
          cook: "1 hr",
          total: "1 hr 5 mins",
          servings: "15",
          yield: "15 portions",
          rating: 2.5,
          Nutrition_info:
            "Par portion: 80 calories; protéine 2,4 g; glucides 12,3 g; graisse 2,9 g; sodium 6,4 mg.",
        },
        {
          id: "stuffed_potatoes",
          title: "Pommes de terre farcies",
          image: "/stuffed_potatoes.PNG",
          ingredients: [
            "- Pomme de terre",
            "- Fromage cheddar",
            "- Trempette à la crème fraîche et à l'oignon",
          ],
          steps: [
            "1. Préchauffer le four à 350 degrés F",
            "2. Cuire les pommes de terre au four préchauffé pendant 45 minutes",
            "3. Trancher le dessus des pommes de terre et ramasser la chair dans un grand bol",
            "4. À la chair de pomme de terre, ajoutez le fromage et la trempette. Mélangez bien et déposez le mélange dans la peau des pommes de terre.",
          ],
          prep: "15 mins",
          cook: "1 hr 30 mins",
          total: "1 hr 45 mins",
          servings: "4",
          yield: "4 portions",
          rating: 4,
          Nutrition_info:
            "Par portion: 512 calories; protéine 21,7 g; glucides 63,6 g; graisse 20g; cholestérol 62,7 mg; sodium 416,5 mg.",
        },
        {
          id: "oven_roasted_potatoes",
          title: "Pommes de terre rôties au four",
          image: "/oven_roasted_potatoes.PNG",
          ingredients: [
            "- Pomme de terre",
            "- Huile d'olive",
            "- Sel",
            "- Poivre",
          ],
          steps: [
            "1. Préchauffer le four à 400 degrés F",
            "2. Ajouter l'huile d'olive, le sel assaisonné, le sel et le poivre noir; bien mélanger. Étaler les pommes de terre sur une plaque à pâtisserie.",
            "3. Cuire au four préchauffé pendant 30 minutes, en retournant les pommes de terre de temps en temps",
          ],
          prep: "10 mins",
          cook: "1 hr",
          total: "1 hr 10 mins",
          servings: "6",
          yield: "6 portions",
          rating: 4.5,
          Nutrition_info:
            "Par portion: 206 calories; protéine 4,4 g; glucides 37,6 g; graisse 4,7 g; sodium 553,5 mg.",
        },
        {
          id: "oven_roasted_grapetomatoes",
          title: "Tomates raisins rôties au four",
          image: "/oven_roasted_grapetomatoes.PNG",
          ingredients: [
            "- Tomate",
            "- Ail",
            "- Le sel",
            "- Huile d'olive",
            "- Basilic",
          ],
          steps: [
            "1. Préchauffer le four à 350 degrés F",
            "2. Arroser les tomates d'huile d'olive et garnir d'ail, de basilic et de sel",
            "3. Cuire au four préchauffé jusqu'à ce que les tomates soient tendres, environ 30 minutes",
          ],
          prep: "15 mins",
          cook: "30 mins",
          total: "45 mins",
          servings: "2",
          yield: "2 portions",
          rating: 3.5,
          Nutrition_info:
            "Par portion: 113 calories; protéine 2,2 g; glucides 11,7 g; graisse 7,5 g; sodium 98,7 mg.",
        },
        {
          id: "tomato_mozzarella_salad",
          title: "Salade de tomates et mozzarella",
          image: "/tomato_mozzarella_salad.PNG",
          ingredients: [
            "- Tomate",
            "- Fromage mozzarella",
            "- Huile d'olive",
            "- Le sel",
            "- Vinaigre balsamique",
          ],
          steps: [
            "1. Placer les tranches de tomates, en alternant avec les tranches de mozzarella, sur un grand plat de service.",
            "2. Arroser les tomates et la mozzarella d'huile d'olive, de sel et de vinaigre",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "20 mins",
          servings: "6",
          yield: "6 portions",
          rating: 5,
          Nutrition_info:
            "Par portion: 199 calories; protéine 10,1 g; glucides 6,2 g; graisse 15,2 g; cholestérol 24,2 mg; sodium 338,3 mg.",
        },
        {
          id: "french_strawberry_cake",
          title: "Gâteau aux fraises à la française",
          image: "/french_strawberry_cake.PNG",
          ingredients: [
            "- Sucre blanc",
            "- 2 oeufs",
            "- Extrait de vanille",
            "- Levure chimique",
            "- Fraise",
          ],
          steps: [
            "1. Préchauffez le four à 350 degrés F",
            "2. Fouetter ensemble la farine, la poudre à pâte et le sel dans un bol moyen",
            "3. Étalez la pâte dans le moule à gâteau préparé",
            "4. Cuire au four préchauffé",
          ],
          prep: "20 mins",
          cook: "40 mins",
          total: "1 hr",
          servings: "10",
          yield: "1 moule à gâteau rond de 8 pouces",
          rating: 4.5,
          Nutrition_info:
            "Par portion: 294 calories; protéine 3,7 g; glucides 42g; matières grasses 12,9 g; cholestérol 66,6 mg; sodium 141,3 mg.",
        },
        {
          id: "cookie_butter_cookies",
          title: "Biscuits au beurre",
          image: "/cookie_butter_cookies.PNG",
          ingredients: [
            "- Beurre",
            "- Cassonade",
            "- Tasse de beurre aux biscuits",
            "- 2 tasses de farine",
            "- 1 oeuf",
          ],
          steps: [
            "1. Préchauffer le four à 350 degrés F",
            "2. Battre le beurre, la cassonade et 3/4 tasse de sucre blanc au batteur électrique dans un grand bol jusqu'à consistance lisse.",
            "3. Cuire au four préchauffé jusqu'à coloration dorée, environ 12 minutes.",
          ],
          prep: "15 mins",
          cook: "12 mins",
          total: "27 mins",
          servings: "25",
          yield: "25 biscuits",
          rating: 3,
          Nutrition_info:
            "Par portion: 196 calories; protéine 2,6 g; glucides 24g; graisse 10,2 g; cholestérol 22,1 mg; sodium 125,3 mg.",
        },
        {
          id: "grilled_cheese_sandwich",
          title: "Sandwich au fromage grillé",
          image: "/grilled_cheese_sandwich.PNG",
          ingredients: [
            "- 1 cuillère à soupe de beurre",
            "- Fromage",
            "- 1 anneau en forme de beignet émaillé, coupé en deux horizontalement",
          ],
          steps: [
            "1. Étalez du beurre sur les côtés coupés du beignet",
            "2. Cuire, en retournant une fois, jusqu'à ce qu'il soit légèrement doré des deux côtés et que le fromage soit fondu, environ 4 minutes.",
          ],
          prep: "5 mins",
          cook: "4 mins",
          total: "9 mins",
          servings: "1",
          yield: "1 sandwich",
          rating: 2.5,
          Nutrition_info:
            "Par portion: 543 calories; protéine 17,9 g; glucides 27,8 g; graisse 40,6 g; cholestérol 98 mg; sodium 745,6 mg.",
        },
      ],
    },
  };

  props.language === "Français"
    ? (resultContent = resultContent.Français)
    : (resultContent = resultContent.English);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const createCard = (itemId) =>
    resultContent.recipes.map((recipe) => {
      if (recipe.id === itemId) {
        return (
          <Card
            style={{
              width: "20rem",
              display: "inline-block",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Link to={{ pathname: "/recipes", recipeId: itemId }}>
              <Card.Link>
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Img variant="top" src={recipe.image} />
                  <Card.Text style={{ display: "inline-block" }}>
                    <div style={{ display: "inline-block" }}>
                      <StarRatings
                        count={5}
                        value={recipe.rating}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#F5BE2C"
                        isHalf={true}
                      />
                      <p>{recipe.total} </p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Link>
          </Card>
        );
      }
    });

  const getResults = () => {
    // chicken
    if (
      isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("chicken_marinade")}
          {createCard("teriyaki_chicken")}
        </div>
      );
    } else if (
      isCheckedMeat1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //tuna
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("grilled_tuna")}
        </div>
      );
    } else if (
      isCheckedMeat2 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //salmon
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("oven_fried_salmon")}
        </div>
      );
    } else if (
      isCheckedMeat3 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //beef
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("beef_stew")}
        </div>
      );
    } else if (
      isCheckedVeg0 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //potato
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("stuffed_potatoes")}
          {createCard("oven_roasted_potatoes")}
        </div>
      );
    } else if (
      isCheckedVeg1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //garlic
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("teriyaki_chicken")}
          {createCard("oven_fried_salmon")}
          {createCard("beef_stew")}
          {createCard("roasted_garlic")}
          {createCard("oven_roasted_grapetomatoes")}
        </div>
      );
    } else if (
      isCheckedVeg2 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //tomato
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("beef_stew")}
          {createCard("oven_roasted_grapetomatoes")}
          {createCard("tomato_mozzarella_salad")}
        </div>
      );
    } else if (
      isCheckedFruit1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //strawberry
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("french_strawberry_cake")}
        </div>
      );
    } else if (
      isCheckedDairy0 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy1
    ) {
      //butter
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("cookie_butter_cookies")}
          {createCard("grilled_cheese_sandwich")}
        </div>
      );
    } else if (
      isCheckedDairy1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0
    ) {
      //cheese
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("oven_fried_salmon")}
          {createCard("stuffed_potatoes")}
          {createCard("tomato_mozzarella_salad")}
          {createCard("grilled_cheese_sandwich")}
        </div>
      );
    } else if (
      isCheckedMeat0 &&
      isCheckedVeg1 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //chicken and garlic
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("teriyaki_chicken")}
        </div>
      );
    } else if (
      isCheckedMeat2 &&
      isCheckedDairy1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0
    ) {
      //salmon and cheese
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("oven_fried_salmon")}
        </div>
      );
    } else if (
      isCheckedMeat2 &&
      isCheckedDairy1 &&
      isCheckedVeg1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0
    ) {
      //salmon, cheese and garlic
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("oven_fried_salmon")}
        </div>
      );
    } else if (
      isCheckedDairy1 &&
      isCheckedVeg1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0
    ) {
      //garlic and cheese
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("oven_fried_salmon")}
        </div>
      );
    } else if (
      isCheckedMeat3 &&
      isCheckedVeg1 &&
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedVeg0 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //beef and garlic
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("beef_stew")}
        </div>
      );
    } else if (
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //beef and tomato
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("beef_stew")}
        </div>
      );
    } else if (
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      isCheckedVeg1 &&
      isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      !isCheckedDairy1
    ) {
      //garlic and tomato
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("beef_stew")}
          {createCard("oven_roasted_grapetomatoes")}
        </div>
      );
    } else if (
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      isCheckedDairy1
    ) {
      // potato and cheese
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("stuffed_potatoes")}
        </div>
      );
    } else if (
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      !isCheckedDairy0 &&
      isCheckedDairy1
    ) {
      // tomato and cheese
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("tomato_mozzarella_salad")}
        </div>
      );
    } else if (
      !isCheckedMeat0 &&
      !isCheckedMeat1 &&
      !isCheckedMeat2 &&
      !isCheckedMeat3 &&
      !isCheckedVeg0 &&
      !isCheckedVeg1 &&
      !isCheckedVeg2 &&
      !isCheckedFruit0 &&
      !isCheckedFruit1 &&
      isCheckedDairy0 &&
      isCheckedDairy1
    ) {
      // cheese and butter
      return (
        <div>
          <h3 style={{ marginTop: 30, marginBottom: 30 }}>
            {resultContent.title}
          </h3>
          {createCard("grilled_cheese_sandwich")}
        </div>
      );
    } else {
      return (
        <div style={{ textAlignVertical: "center", textAlign: "center" }}>
          <h5
            style={{
              background: "#FFFFFF",
              paddingTop: 30,
              paddingBottom: 30,
              marginLeft: 100,
              marginRight: 100,
            }}
          >
            {resultContent.notFound}
          </h5>
        </div>
      );
    }
  };

  return (
    <div
      className={warn ? "warning" : "hide"}
      style={{ paddingTop: 50, paddingBottom: 35 }}
    >
      {getResults()}
    </div>
  );
};

const breadcrumb = {
  color: "black",
  background: "#f1cf91",
};
const Container = styled.div`
  font-family: sans-serif;
  padding: 1vh 5vw;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  display: inline-block;
`;

const divBorderStyle = {
  border: "2px solid rgba(0, 0, 0, 0.5)",
  marginTop: 30,
};

function Ingredients(props) {
  const [isCheckedMeat0, setCheckedMeat0] = useState(false);

  const handleChangeMeat0 = () => {
    setCheckedMeat0((prevState) => !prevState);
  };

  const [isCheckedMeat1, setCheckedMeat1] = useState(false);

  const handleChangeMeat1 = () => {
    setCheckedMeat1((prevState) => !prevState);
  };

  const [isCheckedMeat2, setCheckedMeat2] = useState(false);

  const handleChangeMeat2 = () => {
    setCheckedMeat2((prevState) => !prevState);
  };

  const [isCheckedMeat3, setCheckedMeat3] = useState(false);

  const handleChangeMeat3 = () => {
    setCheckedMeat3((prevState) => !prevState);
  };

  const [isCheckedVeg0, setCheckedVeg0] = useState(false);

  const handleChangeVeg0 = () => {
    setCheckedVeg0((prevState) => !prevState);
  };

  const [isCheckedVeg1, setCheckedVeg1] = useState(false);

  const handleChangeVeg1 = () => {
    setCheckedVeg1((prevState) => !prevState);
  };

  const [isCheckedVeg2, setCheckedVeg2] = useState(false);

  const handleChangeVeg2 = () => {
    setCheckedVeg2((prevState) => !prevState);
  };

  const [isCheckedFruit0, setCheckedFruit0] = useState(false);

  const handleChangeFruit0 = () => {
    setCheckedFruit0((prevState) => !prevState);
  };

  const [isCheckedFruit1, setCheckedFruit1] = useState(false);

  const handleChangeFruit1 = () => {
    setCheckedFruit1((prevState) => !prevState);
  };

  const [isCheckedDairy0, setCheckedDairy0] = useState(false);

  const handleChangeDairy0 = () => {
    setCheckedDairy0((prevState) => !prevState);
  };

  const [isCheckedDairy1, setCheckedDairy1] = useState(false);

  const handleChangeDairy1 = () => {
    setCheckedDairy1((prevState) => !prevState);
  };

  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  const disableSearchBtn = !(
    isCheckedMeat0 ||
    isCheckedMeat1 ||
    isCheckedMeat2 ||
    isCheckedMeat3 ||
    isCheckedVeg0 ||
    isCheckedVeg1 ||
    isCheckedVeg2 ||
    isCheckedFruit0 ||
    isCheckedFruit1 ||
    isCheckedDairy0 ||
    isCheckedDairy1
  );

  let content = {
    English: {
      title: "Select Ingredients",
      description: "Please check all the ingredients you wish to use today!",
      breadcrumb_home: "Home",
      breadcrumb_ingr: "Ingredients",
      search_button: "SEARCH",
      hide_results: "HIDE RESULTS",
      ingredient_list_categories: ["Meat", "Vegetables", "Fruits", "Dairy"],
      ingredients_list: {
        meat: ["Chicken", "Tuna", "Salmon", "Beef"],
        vegetables: ["Potato", "Garlic", "Tomato"],
        fruits: ["Apple", "Strawberry"],
        dairy: ["Butter", "Cheese"],
      },
    },
    Français: {
      title: "Séléctionnez les ingrédients",
      description:
        "S.V.P cochez la case pour tous les ingrédients que vous désirez utiliser aujourd'hui !",
      breadcrumb_home: "Page d'accueil",
      breadcrumb_ingr: "Ingrédients",
      search_button: "CHERCHER",
      hide_results: "MASQUER LES RÉSULTATS",
      ingredient_list_categories: ["Viande", "Légumes", "Fruits", "Laitier"],
      ingredients_list: {
        meat: ["Poulet", "Thon", "Saumon", "Boeuf"],
        vegetables: ["Pommes de Terre", "Ail", "Tomate"],
        fruits: ["Pommes", "Fraises"],
        dairy: ["Beurre", "Fromage"],
      },
    },
  };
  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);
  let listAcc = [
    {
      title: <h4>{content.ingredient_list_categories[0]}</h4>,
      content: (
        <form action="#">
          <Label>
            <input
              type="checkbox"
              onChange={handleChangeMeat0}
              checked={isCheckedMeat0}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[0]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeMeat1}
              checked={isCheckedMeat1}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[1]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeMeat2}
              checked={isCheckedMeat2}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[2]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeMeat3}
              checked={isCheckedMeat3}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[3]}
            </span>
          </Label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[1]}</h4>,
      content: (
        <form action="#">
          <label>
            <input
              type="checkbox"
              onChange={handleChangeVeg0}
              checked={isCheckedVeg0}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeVeg1}
              checked={isCheckedVeg1}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[1]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeVeg2}
              checked={isCheckedVeg2}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[2]}
            </span>
          </label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[2]}</h4>,
      content: (
        <form action="#">
          <label>
            <input
              type="checkbox"
              onChange={handleChangeFruit0}
              checked={isCheckedFruit0}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.fruits[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeFruit1}
              checked={isCheckedFruit1}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.fruits[1]}
            </span>
          </label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[3]}</h4>,
      content: (
        <form action="#">
          <label>
            <input
              type="checkbox"
              onChange={handleChangeDairy0}
              checked={isCheckedDairy0}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.dairy[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input
              type="checkbox"
              onChange={handleChangeDairy1}
              checked={isCheckedDairy1}
            />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.dairy[1]}
            </span>
          </label>
        </form>
      ),
    },
  ];

  const [showResults, setShowResults] = useState(false);

  const handleToggleClick = () => {
    setShowResults((prevState) => !prevState);
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/" style={breadcrumb}>
          {content.breadcrumb_home}
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={breadcrumb}>
          {content.breadcrumb_ingr}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={divBorderStyle}>
        <br />
        <br />
        <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>
          {content.title}
        </h3>
        <br />
        <h5 style={{ textAlignVertical: "center", textAlign: "center" }}>
          {content.description}
        </h5>
        <br />
        <div class="row">
          <div class="col-lg-6 pl-5 pr-2">
            <div>
              <AccordionOpenDefault
                list={listAcc.slice(0, 1)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
          <div class="col-lg-6 pl-2 pr-5">
            <div>
              <AccordionOpenDefault
                list={listAcc.slice(1, 2)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 pl-5 pr-2">
            <div>
              <AccordionMP
                list={listAcc.slice(2, 3)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
          <div class="col-lg-6 pl-2 pr-5">
            <div>
              <AccordionMP
                list={listAcc.slice(3, 4)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
        </div>
        <br />
        <div
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            marginBottom: 35,
          }}
        >
          <button
            disabled={disableSearchBtn}
            className="btn btn-primary"
            onClick={handleToggleClick}
          >
            {showResults && !disableSearchBtn
              ? content.hide_results
              : content.search_button}
          </button>
        </div>
      </div>

      <div style={{ textAlignVertical: "center", textAlign: "center" }}>
        <ResultsSection
          props={props}
          warn={showResults && !disableSearchBtn}
          isCheckedMeat0={isCheckedMeat0}
          meat0={content.ingredients_list.meat[0]}
          isCheckedMeat1={isCheckedMeat1}
          meat1={content.ingredients_list.meat[1]}
          isCheckedMeat2={isCheckedMeat2}
          meat2={content.ingredients_list.meat[2]}
          isCheckedMeat3={isCheckedMeat3}
          meat3={content.ingredients_list.meat[3]}
          isCheckedVeg0={isCheckedVeg0}
          veg0={content.ingredients_list.vegetables[0]}
          isCheckedVeg1={isCheckedVeg1}
          veg1={content.ingredients_list.vegetables[1]}
          isCheckedVeg2={isCheckedVeg2}
          veg2={content.ingredients_list.vegetables[2]}
          isCheckedFruit0={isCheckedFruit0}
          fruit0={content.ingredients_list.fruits[0]}
          isCheckedFruit1={isCheckedFruit1}
          fruit1={content.ingredients_list.fruits[1]}
          isCheckedDairy0={isCheckedDairy0}
          dairy0={content.ingredients_list.dairy[0]}
          isCheckedDairy1={isCheckedDairy1}
          dairy1={content.ingredients_list.dairy[1]}
        />
      </div>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Ingredients />, rootElement);
export default Ingredients;
