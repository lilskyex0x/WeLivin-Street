import { Component } from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from "react-icons/fa";
import "../../index.css";

export class CarCard extends Component {
    render() {
        return (
            <section className="carCardSection">
                <div key={this.props.id} className="carWrapper">
                    <img src={this.props.image} alt="card image" className="cardImage" />

                    <FaShoppingCart className={"carCards__cart"} />
                    <FaRegBookmark className={"carCards__wishlist"} />
                    <FaFireAlt className={"carCards__fastSelling"} />

                    <div className="carCards__content">
                        <h3 className="carName">{this.props.name}</h3>
                        <div className="displayStack__1">
                            <div className="carPrice">${this.props.price}</div>
                            <div className="carSales">{this.props.totalSale} units sold</div>
                        </div>
                        <div className="displayStack__2">
                            <div className="carRating">
                                {[...Array(this.props.rating)].map((index) => (
                                    <FaStar id={index + 1} key={index} />
                                ))}
                            </div>
                            <div className="carTime">{this.props.timeLeft} day left</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

CarCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalSale: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
};
