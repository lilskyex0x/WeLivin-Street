import { Component } from "react";
import { EgCar } from "./featuredCar";
import { Price } from "./priceDetail";
import '../../index.css';

export class Buy extends Component {
    render(){
        return (
            <section className="BuyShowcase">
                <EgCar />
                <Price />
            </section>
        )
    }
}
