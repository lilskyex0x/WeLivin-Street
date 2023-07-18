import { Component } from "react";
import { HeroSearch } from "./heroSearch";
import '../../index.css';

export class Hero extends Component {
    render(){
        return (
            <section className="heroSection">
                <h2>Life is too short</h2>
                <h2>to drive boring cars</h2>
                <HeroSearch />
                <div className="links">
                    <a href="#">Shop New</a> 
                    <a href="#">Shop Used</a>
                </div>
            </section>
        )
    }
}