import { Component } from "react";
import Card from "./cardComponent";
import '../../index.css';

export class CardContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="featureCard">
                <div className="cardWrapper">
                    <Card
                        img="https://img.freepik.com/premium-vector/premium-japanese-jdm-90-s-sport-car-vector-illustration-best-automotive-tshirt-design_289688-12.jpg?w=360"
                        title="Find your fit"
                        description="Not sure what you want? Answer a few to find what fits you best."
                        btnName="Start Quiz"
                    />
                </div>
            </section>
        )
    }
}