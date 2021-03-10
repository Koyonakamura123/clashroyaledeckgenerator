import './App.css';
import {useState, useEffect} from "react";

function CardSummary(props) {
    const [cardSummary, setCardSummary] = useState({});
    useEffect(() => {
        if(props.levels !== undefined && props.cards !== undefined) {
            //make dictionary cardName: cardLevel
            const cardSummaries = {};
            var i = 0;
            console.log(props.cards["items"]);
            for(i = 0; i < props.cards["items"].length; i++) {
                var cardName = props.cards["items"][i]["name"];
                cardSummaries[cardName] = {};
                cardSummaries[cardName]["name"] = cardName;
                cardSummaries[cardName]["level"] = props.levels[cardName]; //props.levels[cardName] undefined if the player hasn't unlocked the card yet
                cardSummaries[cardName]["iconUrl"] = props.cards["items"][i]["iconUrls"]["medium"];
            }
            setCardSummary(cardSummaries);
            props.saveCards(cardSummary);
        }
    }, [props.levels]);
    if(cardSummary == undefined) {
        return(
            <div>
                Unable to generate card summary.
            </div>
        )
    }
    return(
        <div>
            {Object.keys(cardSummary).map((key, index) => {
                return <div key={index}>
                    <h3>Card information for {key}:</h3>
                    <p>Level: {cardSummary[key]["level"]}</p>
                    <p>Image: {cardSummary[key]["iconUrl"]}</p>
                </div>
            })}
        </div>
    )
}

export default CardSummary;