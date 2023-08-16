import { Component } from "react";
import '../../index.css';
import { CardContainer } from "./container";


export class Feature extends Component {
    render() {
        return (
            <section className="featureSection">
                <div className="feature__wrapper">
                    <h2>Featured tools</h2>
                    <CardContainer />
                </div>
            </section>
        );
    }
}