import { Component } from "react";
import carData from "./carData";
import { RenderCards } from "./renderCards";

export class CarCards extends Component {
  render() {
    return (
      <>
        <h1 className="carCardTitle">Top-rated Beasts Selection</h1>
        <div className="carCard">
          {carData.map((car, index) => (
            <RenderCards key={`rating-${index}`} car={car} />
          ))}
        </div>
      </>
    );
  }
}
