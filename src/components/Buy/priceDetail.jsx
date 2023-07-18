import { Component } from "react";
import "../../index.css";

export class Price extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
    };
  }

  handleChange = (e) => {
    const selectedValue = e.target.value;
    this.setState({
      selected: selectedValue,
    });
  };

  render() {
    const creditScores = [
      { value: "", text: "__Choose Wisely__", number: "" },
      { value: "POOR", text: "300 - 579", number: "$22,698", quality: "OLD" },
      { value: "FAIR", text: "580 - 669", number: "$29,654", quality: "OLD" },
      { value: "GOOD", text: "670 - 739", number: "$31,873", quality: "OLD" },
      {
        value: "VERY-GOOD",
        text: "740 - 799",
        number: "$40,443",
        quality: "NEW",
      },
      {
        value: "EXCELLENT",
        text: "800 - 850",
        number: "$68,546",
        quality: "NEW",
      },
      {
        value: "EXTRAORDINARY",
        text: "900 - 1500",
        number: "$95,984",
        quality: "NEW",
      },
    ];

    const selectedNum =
      creditScores.find((score) => score.value === this.state.selected)
        ?.number || "$27,527"; // Fallback value if selectedNum is not found

    return (
      <div className="price__box">
        <h1 className={selectedNum ? "number-transition" : ""} id="price">
          {selectedNum}
        </h1>
        <h4>Est. buying power</h4>
        <h3>Based on 8.32% APR</h3>
        <hr />
        <div className="select__container">
          <div className="first__row">
            <div className="first__block">
              <label className="labelTag" htmlFor="Looking-For">
                Looking for
              </label>
              <select
                onChange={this.handleChange}
                value={this.state.selected}
                name="looking-for"
                className="form-select-element"
              >
                <option value="">__Choose Wisely__</option>
                <option value="NEW">NEW</option>
                <option value="OLD">OLD</option>
              </select>
            </div>
            <div className="second__block">
              <input
                type="number"
                aria-label="Down payment"
                placeholder=" "
                maxLength={10}
                defaultValue={3000}
              />
              <label htmlFor="field label">Down payment</label>
            </div>
          </div>
          <div className="second__row">
            <div className="first__block">
              <label className="labelTag" htmlFor="credit-score">
                Credit score
              </label>
              <select
                onChange={this.handleChange}
                value={this.state.selected}
                className="form-select-element"
              >
                <option value="">__Choose Wisely__</option>
                {creditScores
                  .filter((score) => score.quality === "NEW")
                  .map((score, index) => (
                    <option key={index} value={score.value}>
                      {score.text}
                    </option>
                  ))}
                {creditScores
                  .filter((score) => score.quality === "OLD")
                  .map((score, index) => (
                    <option key={index} value={score.value}>
                      {score.text}
                    </option>
                  ))}
              </select>
            </div>
            <div className="second__block">
              <input
                type="number"
                aria-label="Monthly payment"
                placeholder=" "
                maxLength={10}
                defaultValue={500}
              />
              <label htmlFor="field label">Monthly payment</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
