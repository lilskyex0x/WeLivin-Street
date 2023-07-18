import { Component } from "react";
import eg from "../../assets/eg.png";
import '../../index.css';

export class EgCar extends Component {
    render(){
        return (
            <div className="egCar">
                <div className="new__tag">New</div>
                <h2>Know your buying power</h2>
                <p>How much car can you effort? Find out, then see vehicles that match your budget</p>
                <img src={eg} alt="" width={600} height={400}/>
            </div>
        )
    }
}