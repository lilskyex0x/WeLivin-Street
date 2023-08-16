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
                        img="src\assets\cardLogos\kindpng_201388.png"
                        title="Find your fit"
                        description="Not sure what you want? Answer a few to find what fits you best."
                        btnName="Start quiz"
                    />
                    <Card
                        img="https://img.freepik.com/free-photo/car-model-calculator-coins-white-table_1387-583.jpg?w=1380&t=st=1692194898~exp=1692195498~hmac=d27a4872c9002bab5f7dae89beec49ad423d42f58c592552bbc872d00aefb98e" 
                        title="Shop by budget"
                        description="Save time and narrow down cars that fit your monthly payment and price point."
                        btnName="See your buying power"
                    />
                    <Card
                        img="https://img.freepik.com/free-vector/car-tuning-isometric-illustration-representing-automobile-with-improving-wheels-nitrous-oxide-systems-headlights-vinyl-stickers-body-kit-elements_1284-32989.jpg?w=996&t=st=1692195577~exp=1692196177~hmac=d11c2d235a4ea46f62841c528e5c25ae6c1818c927b4661a8e0c71d492873a9d"
                        title="Build and price"
                        description="Choose the make, model, trim and options you want."
                        btnName="Build your car"
                    />
                    <Card
                        img="https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg?w=1380&t=st=1692194823~exp=1692195423~hmac=26f455659596913c31d0e1cf590e270944ebb8bd18ef6577bc7050c42894a9a9"
                        title="Sell and trade"
                        description="Get an offer in minutes, then cash out or trade in"
                        btnName="Learn more"
                    />
                </div>
            </section>
        )
    }
}