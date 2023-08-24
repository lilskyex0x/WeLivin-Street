import { Component } from "react";
import "../../../index.css";
import { SignUpBtn } from "../signUpBtn";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchQuery: "",
      isSearchFocused: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.log(err));
    document.body.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleDocumentClick);
  }

  handleDocumentClick = (e) => {
    const isClickedInsideSearch = e.target.closest(".input-group__input");

    if (!isClickedInsideSearch) {
      this.setState({ isSearchFocused: false });
    }
  };

  render() {
    const { users, searchQuery, isSearchFocused } = this.state;
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
            placeholder="Find something you need"
            onChange={(e) =>
              this.setState({
                searchQuery: e.target.value,
                isSearchFocused: true,
              })
            }
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ isSearchFocused: true });
            }}
            value={searchQuery}
          />
          <div className={`searchResults ${isSearchFocused ? "visible" : ""}`}>
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="userResult"
                onClick={(e) => {
                  e.stopPropagation();
                  this.setState({
                    searchQuery: user.name,
                    isSearchFocused: false,
                  });
                }}
              >
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
