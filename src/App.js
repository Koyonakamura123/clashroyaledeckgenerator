import './App.css';
import NamePicker from "./NamePicker";
import PlayerInfo from "./PlayerInfo";
import CardSummary from "./CardSummary";
import {useState, useEffect} from "react";
// generate api key at https://developer.clashroyale.com/

// Run vercel dev to use api/cards, api/currentRankings

function App() {
  const [cards, setCards] = useState();
  const [playerid, setPlayerid] = useState("");
  const [cardLevels, setCardLevels] = useState();
  const [cardSummary, setCardSummary] = useState();

  function getCards() {
    fetch("/api/cards").then(response => response.json()).then(data => setCards(data));
  }  

  // just runs when App is rendered
  useEffect(()=>{
    getCards();
    // getRankings();
    // getCurrentSeason();
    // getPlayerInfo();
  }, []);

  console.log(playerid);

  return (
    <div className="App">
      <NamePicker saveName = {setPlayerid} />
      <PlayerInfo id={playerid} saveLevels = {setCardLevels} />
      <CardSummary levels={cardLevels} cards={cards} saveCards = {setCardSummary} />
      {/* <DeckSuggestions levels={cardLevels} /> */}
    </div>
  );
}
export default App;
