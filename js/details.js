

export async function fetchGameData(gameId) {
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
    {
      headers: {
        "X-Rapidapi-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
      },
    }
  );

  return response.json();
}

export function displayGameData(gameData) {
  let cartoona = "";

  cartoona += ` 
    <div class="col-md-4">
        <figure>
            <img src="${gameData.thumbnail}" class="w-100" alt="">
        </figure>
        </div>

    <div class="col-md-8">
        <h3>Title: ${gameData.title}</h3>
        <p>Category: <span class="badge text-bg-info">${gameData.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${gameData.platform}</span></p>
        <p>Status: <span class="badge text-bg-info">${gameData.status}</span></p>
        <p class="gameDesc">${gameData.description}</p>
        <button class="btn text-white btn-outline-warning">Show Game</button>
    </div>

    `;

  document.querySelector(".gameDetail .row").innerHTML = cartoona;
}


