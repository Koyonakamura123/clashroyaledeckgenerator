import './App.css';
import {useState, useEffect} from "react";

function NamePicker(props) {
    return (
        <div className = "name-picker">
            <input value={props.id}
                onChange={e=> props.setPlayerid(e)}
            />
        </div>
    )
}