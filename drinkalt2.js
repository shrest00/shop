$(document).ready(function () {
  const cocktails = [
      {
          name: "Eggnog",
          ingredients: "Milk, Cream, Sugar, Eggs",
          recipe: "1 cup milk, 1/2 cup cream, whisk with 2 eggs and sugar. Serve chilled.",
          calories: 223,
          image: "images/Eggnog.jpg"
      },
      {
          name: "Cranberry Spritzer",
          ingredients: "Cranberry Juice, Sparkling Water, Lime",
          recipe: "Mix 1 cup cranberry juice, 1 cup sparkling water, garnish with lime.",
          calories: 90,
          image: "images/Cranberry-Spritzer.jpg"
      },
      {
          name: "Spiked Hot Cocoa",
          ingredients: "Cocoa Powder, Milk, Rum",
          recipe: "Heat 1 cup milk, 2 tbsp cocoa powder, add a splash of rum, serve hot.",
          calories: 150,
          image: "images/SpikedHotCocoa.jpg"
      },
      {
          name: "Pumpkin Punch",
          ingredients: "Pumpkin Puree, Apple Cider, Cinnamon",
          recipe: "Mix 1/2 cup pumpkin puree, 1 cup apple cider, sprinkle cinnamon.",
          calories: 130,
          image: "images/Pumpkin-Punch.jpg"
      },
      {
          name: "Minty Mocktail",
          ingredients: "Mint, Lime, Ginger Ale",
          recipe: "Muddle mint, add lime juice, top with ginger ale.",
          calories: 80,
          image: "images/Minty-Mocktail.jpg"
      }
  ];

  const createCocktailCards = () => {
      let container = $('.wrapper');
      cocktails.forEach((cocktail) => {
          let cardHTML = `
          <div class="card">
              <img class="cocktail_pic" src="${cocktail.image}" alt="${cocktail.name}" />
              <p class="cocktail_name">${cocktail.name}</p>
              <p class="details">${cocktail.ingredients}</p> <!-- Display ingredients -->
          </div>`;
          container.append(cardHTML);
      });
  };

  const initializeCocktailInteractions = () => {
      $(".card").on("mouseover", function () {
          let index = $(".card").index(this);
          $(this).find("p.details").text(cocktails[index].recipe); // Show recipe on hover
      });

      $(".card").on("mouseout", function () {
          let index = $(".card").index(this);
          $(this).find("p.details").text(cocktails[index].ingredients); // Reset to ingredients
      });

      $(".card").on("click", function () {
          let index = $(".card").index(this);
          $(this).find("p.details").text("Calories: " + cocktails[index].calories); // Show calories on click
      });
  };

  // Initialize the app
  createCocktailCards();
  initializeCocktailInteractions();
});
