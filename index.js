const searchResultsContainer = document.querySelector('#search-results');

const createCard = recipe => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div class="card-display">
      <img src="${recipe.image}" style="width:200px; height:200px;">
      <h2>${recipe.title}</h2>
    </div>
    <div class="card-body">
      <button id="view-details">View Details</button>
    </div>
  `;

  return card;
};

const button = document.querySelector("#search-button")
const input = document.querySelector("#search")

button.addEventListener("click", event => {

    event.preventDefault();

    const recipeName = input.value;
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fc1b9482698049b6af3fd94cc094518b&query=${recipeName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      const recipes = data.results;

      recipes.forEach(recipe => {
        const card = createCard(recipe);
        searchResultsContainer.appendChild(card);
} )
})})
