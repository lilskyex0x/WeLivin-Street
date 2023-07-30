import { Component } from "react";
import { FaShoppingCart, FaRegBookmark, FaFireAlt } from "react-icons/fa"
import '../../index.css';

export class CarCard extends Component {
    render(){
        return (
            <section className="carCardSection">
                <div key={this.props} className="carWrapper">
                    <img src={this.props} alt="card image" className="cardImage" />

                    <FaShoppingCart className={"carCards__cart"} />
                    <FaRegBookmark className={"carCards__wishlist"} />
                    <FaFireAlt className={"carCards__fastSelling"} />

                    <div className="carCards__content">
                        <h3 className="carName">{this.props}</h3>
                        <div className="displayStack__1">
                            <div className="carPrice">${this.props}</div>
                            <div className="carSales">{this.props} units sold</div>
                        </div>
                        <div className="displayStack__2">
                            <div className="carRating">${this.props}</div>
                            <div className="carSales">{this.props} units sold</div>
                        </div>
                    </div>
                    <h1>hello Bois</h1>
                </div>
            </section>
        )
    }
}