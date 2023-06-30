import { Component } from "react";
import '../../index.css';
import { SignUpBtn } from "./signUpBtn";

export class Search extends Component {
    render(){
        return(
            <div className="searchBar">
                <div className="input-group">
                    <label className="input-group__label" alt="myInput">Search</label>
                    <input type="text" id="myInput" className="input-group__input" placeholder="Find somthing you need" />
                </div>
                <div className="forwardSlash">|</div>
                <SignUpBtn />
            </div>
        )
    }
}