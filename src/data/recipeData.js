const recipeData = [{
  id: "green-curry",
  name: "Thai Green Curry With Chicken",
  type: "Dinner",
  serves: "about 4",
  ingredients: [
    "Thai green curry paste",
    "500g chicken breast (or chicken tenderloin)",
    "400ml coconut cream (or coconut milk)",
    "1/2 cup chicken stock (or water)",
    "Brown onion",
    "Garlic",
    "Bamboo shoots",
    "Broccoli",
    "Carrot",
    "Green beans",
    "1 tsp fish sauce (opt)",
    "1 tsp sugar (opt)",
    "1-2 lime leaves (opt)",
    "Thai basil (opt)",
    "Lemon grass (opt)"
  ],
  instructions: [
    "Cook chopped onion and garlic over low heat until soft",
    "Add curry paste and an equivalent amount of the coconut cream, stir, and cook until the oil splits",
    "Add remaining coconut cream, chicken stock, and (opt) lemongrass, lime leaves, fish sauce and sugar",
    "Let it come to a simmer, then add chicken and bamboo shoots to cook on low for 20-30 minutes or until chicken is fully cooked",
    "In the meantime, chop and steam remaining veggies (broccoli, carrot, green beans)",
    "After the 20-30 minutes, add steamed veggies and (opt) Thai basil",
    "Serve with rice"
  ]
}, {
  id: "beef-salad",
  name: "Thai Beef Salad",
  type: "Lunch",
  serves: "about 4",
  ingredients: [
    "2 225g sirloin steaks",
    "2 tbsp chopped spring onions",
    "Red onion",
    "1 stalk lemon grass",
    "1/2 cucumber",
    "1/2 red capsicum",
    "Lime juice",
    "1 tbsp fish sauce"

  ],
  instructions: [
    "Pan fry or grill beef steaks to medium-rare",
    "Allow to cool, then thinly slice the beef into a large bowl",
    "Add sliced onion, cucumber, lemongrass and spring onions",
    "Toss and season with lime juice and fish sauce"
  ]
}, {
  id: "tuna-tomato-pasta",
  name: "Tuna Tomato Pasta",
  type: "Dinner",
  serves: "about 4",
  ingredients: [
    "500g tomato pasta sauce",
    "Brown onion",
    "Garlic",
    "Red capsicum",
    "200g tuna",
    "1 tsp paprika",
    "Pepper"
  ],
  instructions: [
    "Cook chopped onion, garlic and capscium over low heat until soft",
    "Add pasta sauce and tuna",
    "Add paprika and pepper to taste",
    "Let simmer for 15-20 mintues",
    "Serve with penne pasta"
  ]
}, {
  id: "lamb-soup",
  name: "Middle Eastern Lamb Soup With Couscous",
  type: "Dinner",
  serves: "about 4",
  ingredients: [
    "Brown onion",
    "Garlic",
    "Carrot",
    "Spinach",
    "250g lamb leg steak (or 1 cup red lentils)",
    "1 tsp paprika, cumin, coriander, turmeric, sambal oelek",
    "1/4 tsp garam masala",
    "Can tomatoes",
    "Can mixed beans",
    "Couscous"
  ],
  instructions: [
    "Cook chopped onion and garlic over low heat until soft",
    "If using lamb, add",
    "Add garlic and all spices and mix",
    "Add can tomatoes and 1/2 cup water",
    "If using lentils, add",
    "Leave to simmer for 10-15 minutes",
    "Add mixed beans and chopped carrot, and extra water if needed",
    "Simmer for another 30 minutes until lamb (or lentils) fully cooked",
    "Serve with couscous"
  ]
}, {
  id: "fried-rice",
  name: "Fried Rice",
  type: "Dinner",
  serves: "about 3",
  ingredients: [
    "Red onion",
    "Garlic",
    "Carrot",
    "Broccoli",
    "Peas",
    "1 egg",
    "1 cup day-old cooked rice",
    "Soy sauce"
  ],
  instructions: [
    "Cook chopped onion and garlic over low heat until soft",
    "Add grated carrot",
    "Add egg and slowly mix in",
    "Lightly steam broccoli and peas, then add",
    "Add cooked rice",
    "Add soy sauce to taste"
  ]
}, {
  id: "spaghetti-bolognese",
  name: "Spaghetti Bolognese",
  type: "Dinner",
  serves: "about 5",
  ingredients: [
    "Brown onion",
    "Garlic",
    "Carrot",
    "2 celery sticks",
    "500g beef mince",
    "30g butter",
    "2/3 cup milk",
    "700g sugo",
    "0.5 cup tomato paste",
    "1 tsp sugar",
    "Pepper",
    "Spaghetti"
  ],
  instructions: [
    "Heat butter in a pan and cook chopped onion, garlic, celery and grated carrot over low heat until soft",
    "Add beef mince and salt, breaking mince up until it loses its redness",
    "Add milk and cook uncovered on low heat for 15-20 minutes",
    "Add sugo, tomato paste, sugar and pepper to taste",
    "Bring to a boil then reduce to low to simmer uncovered for 2 hours",
    "Serve with spaghetti"
  ]
}, {
  id: "pumpkin-soup",
  name: "Pumpkin Soup",
  type: "Lunch",
  serves: "about 3",
  ingredients: [
    "Jack pumpkin",
    "Large potato",
    "Brown onion",
    "Garlic",
    "Chicken stock",
    "Basil",
    "Pepper"
  ],
  instructions: [
    "Roughly chop veggies",
    "Cook everything on a low simmer for 30-40 minutes",
    "Blend with a stick blender until smooth"
  ]
}, {
  id: "salmon-red-curry",
  name: "Thai Red Curry With Salmon",
  type: "Dinner",
  serves: "about 4",
  ingredients: [
    "350g salmon fillet",
    "3 tbsp Thai red curry paste",
    "Garlic",
    "1 tsp ginger",
    "1/2 cup chicken stock",
    "400ml coconut milk",
    "2 tsp fish sauce",
    "1 tsp sugar",
    "4 baby bok choy",
    "Lime",
    "Salt",
    "Pepper",
    "100g rice vermicelli noodles"
  ],
  instructions: [
    "Season salmon with salt and pepper",
    "Cook each side of the salmon in a pan over high heat until light golden",
    "Transfer salmon to a plate",
    "Add red curry paste, garlic and ginger to the pan and cook for 1 minute",
    "Add chicken stock, coconut milk, fish sauce and sugar",
    "Return salmon to sauce and add bok choy, simmer until salmon fully cooked",
    "Serve with lime and noodles"
  ]
}, {
  id: "lemongrass-chicken",
  name: "Roasted Lemongrass Chicken",
  type: "Dinner",
  serves: "4",
  ingredients: [
    "2 tbsp veggie oil",
    "2 tbsp chopped lemongrass",
    "1 tbsp lemon juice",
    "2 tsp soy sauce",
    "2 tsp light brown sugar",
    "1 tsp fish sauce",
    "3 cloves garlic",
    "700g chicken breast"
  ],
  instructions: [
    "Mix ingredients together and marinate chicken in fridge for 1-4 hours",
    "Preheat oven to 180°C",
    "Pan fry chicken on medium high for 4 minutes (reserving the marinade)",
    "Transfer chicken to oven with remaining marinade and roast for 25-30 minutes until cooked"
  ]
}, {
  id: "almond-shortbread",
  name: "Almond Shortbread",
  type: "Treat",
  serves: "many",
  ingredients: [
    "250g butter",
    "1 cup icing sugar",
    "1 tsp vanilla extract",
    "2 cups plain flour",
    "100g toasted blanched almonds, chopped"
  ],
  instructions: [
    "Place butter, 3/4 cups icing sugar and vanilla extract in a bowl and beat until light and creamy",
    "Add flour and almonds and mix until smooth",
    "Refrigerate for 5 minutes until dough is firm",
    "Roll dough into shape and place on baking paper lined tray",
    "Bake at 160°C for 15 minutes",
    "After cooling, cover in remaining icing sugar"
  ]
}, {
  id: "rum-balls",
  name: "Rum Balls",
  type: "Treat",
  serves: "many",
  ingredients: [
    "250g plain sweet biscuits",
    "400g sweetened condensed milk",
    "25g (1/4 cup) cocoa powder",
    "85g (1 cup) desiccated coconut",
    "130g (3/2 cups) desiccated coconut for rolling"
  ],
  instructions: [
    "Crush biscuits into fine crumbs and place in large bowl",
    "Stir in cocoa powder, coconut and condensed milk",
    "Roll into balls and cover in remaining coconut",
    "Store in fridge"
  ]
}];

export default recipeData;
