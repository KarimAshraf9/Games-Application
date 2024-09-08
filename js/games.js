export async function fetchGames(category) {
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    {
      headers: {
        "X-Rapidapi-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
      },
    }
  );

  return response.json();
}

export function displayGames(games) {
  let cartoona = "";

  for (let i = 0; i < games.length; i++) {
    cartoona += ` 
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="gameCard rounded pt-3">
                <figure class="px-3">
                    <img src="${games[i].thumbnail}" class="w-100 rounded-top" alt="">
                </figure>
                <div class="d-flex justify-content-between align-items-center px-3">
                    <h3 class="text-white fw-medium mb-0">${games[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <div class="text-center px-3 pt-1">
                    <p class="text-white opacity-50">${games[i].short_description}</p>
                </div>
                
                <footer class="d-flex justify-content-between text-white py-2 px-3">
                    <span class="badge">${games[i].genre}</span>
                    <span class="badge">${games[i].platform}</span>
                </footer>
            </div>
        </div>
        
            `;
  }

  document.querySelector(".gameCards .row").innerHTML = cartoona;
}
