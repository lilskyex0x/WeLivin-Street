import PropTypes from "prop-types";
export const Card = (props) => {

    return (
        <div className="featureIndividualCard">
            <div className="card__body">
                <img className="card__image" src={props.img} alt="Card Image" />
                <h1 className="card__title">{props.title}</h1>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">{props.btnName}</button>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
};

export default Card;