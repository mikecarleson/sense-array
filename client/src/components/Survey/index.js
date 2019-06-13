import React from "react";
import "./style.css";


function Dropdown(props) {
    return (
        <div>
        <h4 className="question">Aroma</h4>
        <select data-placeholder="" className="values" id="q1">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        
        <h4 className="question">Color</h4>
        <select data-placeholder="" className="values" id="q2">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h4 className="question">Bitterness</h4>
        <select data-placeholder="" className="values" id="q3">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h4 className="question">Sweetness</h4>
        <select data-placeholder="" className="values" id="q4">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h4 className="question">Head Retention</h4>
        <select data-placeholder="" className="values" id="q5">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <h4 className="question">Mouthfeel</h4>
        <select data-placeholder="" className="values" id="q6">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
    );
  }

export default Dropdown;