import { Component } from "react";
import { LogoNav } from "./navlinks";
import { Search } from "./search";
import '../../index.css'

export class NavBar extends Component {
  render() {
    return (
      <header className="navSection">
        <LogoNav />
        <Search />
      </header>
    );
  }
}
