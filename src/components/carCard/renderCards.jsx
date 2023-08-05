import { Component } from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaRegBookmark, FaFireAlt } from "react-icons/fa";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import "../../index.css";

export class RenderCards extends Component {
  render() {
    const { image, name, price, totalSale, rating, timeLeft } = this.props.car;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <section className="carCardSection">
        <div className="carWrapper">
          <img src={image} style={{ width: "476px"}} alt="card image" className="cardImage" />

          <FaShoppingCart className={"carCards__cart"} />
          <FaRegBookmark className={"carCards__wishlist"} />
          <FaFireAlt className={"carCards__fastSelling"} />

          <div className="carCards__content">
            <h3 className="carName">{name}</h3>
            <div className="displayStack__1">
              <div className="carPrice">${price}</div>
              <div className="carSales">{totalSale} units sold</div>
            </div>
            <div className="displayStack__2">
              <div className="carRating">
                {Array.from({ length: fullStars }).map((_, index) => (
                  <BsStarFill id={index + 1} key={`rating-${index}`} />
                ))}
                {hasHalfStar && <BsStarHalf />}
                {Array.from({ length: emptyStars }).map((_, index) => (
                  <BsStar
                    id={index + fullStars + 1}
                    key={`rating-${index + fullStars}`}
                  />
                ))}
              </div>
              <div className="carTime">{timeLeft} day left</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

RenderCards.propTypes = {
  car: PropTypes.object.isRequired,
};
