import { Component } from "react";
import "../../../index.css";
import { SignUpBtn } from "../signUpBtn";

export class Search extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        users: [],
        searchQuery: "",
      });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.log(err));
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount(){
    document.removeEventListener("click", this.handleDocumentClick)
  }

  handleDocumentClick = (e) => {
    const isClickedInsideSearch = e.target.closest(".input-group__input");
    if(!isClickedInsideSearch) {
      this.setState({searchQuery : ""})
    }
  }

  render() {
    const { users, searchQuery } = this.state;
    const isSearchFocused = searchQuery !== "";

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="searchBar">
        <div className="input-group">
          <label className="input-group__label" alt="myInput">
            Search
          </label>
          <input
            type="text"
            id="myInput"
            className="input-group__input"
            placeholder="Find somthing you need"
            value={searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            onClick={(e) => e.stopPropagation()}
          />
          <div className={`searchResults ${isSearchFocused ? "visible" : ""}`}>
            {filteredUsers.map((user) => (
              <div key={user.id} className="userResult">
                {user.name}
              </div>
            ))}
          </div>
        </div>
        <div className="forwardSlash">|</div>
        <SignUpBtn />
      </div>
    );
  }
}
