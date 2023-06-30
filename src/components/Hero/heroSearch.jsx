import { Component } from "react";
import { FiChevronRight } from 'react-icons/fi';
import "../../index.css";

export class HeroSearch extends Component {
  render() {
    return (
      <div className="heroSearch">
        <div className="webflow-style-input">
          <input className="heroInput" type="text" placeholder="Search make, model, or type"/>
          <button className="rightArrow" type="submit">
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  }
}
