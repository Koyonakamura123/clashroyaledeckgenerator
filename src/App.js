import './App.css';
import NamePicker from "./NamePicker";
import PlayerInfo from "./PlayerInfo";
import {useState, useEffect} from "react";
// generate api key at https://developer.clashroyale.com/

// Run vercel dev to use api/cards, api/currentRankings

function App() {
  const [cards, setCards] = useState();
  const [season, setSeason] = useState("2016-02");
  const [rankings, setRankings] = useState();
  const [playerid, setPlayerid] = useState("");
  const [cardLevels, setCardLevels] = useState();

  function getCards() {
    fetch("/api/cards").then(response => response.json()).then(data => setCards(data));
  }
  function getRankings() {
    fetch("/api/currentRankings").then(response => response.json()).then(data => console.log(data));
  }
  function getCurrentSeason() {
    fetch("/api/seasons").then(response => response.json()).then(data => updateSeason(data));
  }

  function getPlayerInfo() {
    fetch("/api/player?name=%252320LPYLRCL").then(response => response.json()).then(data => console.log(data)); //%25 encodes to %
  }
  

  function updateSeason(data) {
    const length = data["items"].length;
    console.log("Array length: " + length);
    console.log(data["items"][length - 1]);
    setSeason(data["items"][length - 1]);
  }

  // just runs when App is rendered
  useEffect(()=>{
    getCards();
    getRankings();
    // getCurrentSeason();
    // getPlayerInfo();
  }, []);

  console.log(playerid);

  return (
    <div className="App">
      <NamePicker saveName = {setPlayerid} />
      <PlayerInfo id={playerid} saveLevels = {setCardLevels} />
      {/* <CardLevelSummary levels={cardLevels} cards={cards} /> */}
      {/* <DeckSuggestions levels={cardLevels} /> */}
    </div>
  );
}
export default App;
