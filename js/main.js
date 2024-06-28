import { displayGames, fetchGames } from "./games.js";
import { displayGameData, fetchGameData } from "./details.js";

const games = await fetchGames("mmorpg");
displayGames(games);
attachCardGameEventListener();


const closeGameSectionDetails = document.querySelector(".gameDetail i.fa-xmark");

document.querySelectorAll(".navbar a").forEach(function (anchor) {
  anchor.addEventListener("click", async function () {
    const activeElement = document.querySelector(".navbar .active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }
    anchor.classList.add("active");

    const games = await fetchGames(anchor.innerHTML.toLowerCase());
    displayGames(games);

    attachCardGameEventListener();

  });
});

 
function attachCardGameEventListener(){
  const gamesCards = document.querySelectorAll(".gameCard");
  const gamesSection = document.querySelector(".gamesSection");
  const gamesSectionDetails = document.querySelector(".gamesSectionDetails");
  const loadingComponent = document.querySelector("#loader");

  gamesCards.forEach((card, index) => {
    card.addEventListener("click", async function () {
      loadingComponent.classList.toggle("d-none");
  
      const gameId = games[index].id;
      console.log('11');
      const gameData = await fetchGameData(gameId);
      console.log('22');
  
  
      displayGameData(gameData);
      console.log('33');
  
      gamesSection.classList.toggle("d-none");
      gamesSectionDetails.classList.toggle("d-none");
      loadingComponent.classList.toggle("d-none");

      const gameLink = document.querySelector('.gameDetail button');
      gameLink.addEventListener('click',function(){
        open(`${gameData.game_url}`)
      })


    });
  });
}

closeGameSectionDetails.addEventListener("click", function () {
  const gamesSection = document.querySelector(".gamesSection");
  const gamesSectionDetails = document.querySelector(".gamesSectionDetails");

  gamesSection.classList.toggle("d-none");
  gamesSectionDetails.classList.toggle("d-none");
});


