import PropTypes from "prop-types";
function Card({ title = "Food", price = "$10.99" }) {
    return (
        <div className="card">
            <img className="card-image" src="https://picsum.photos/200" alt="picture 200" />
            <h2 className="card-title">{title}</h2>
            <h2 id="price">{price}</h2>
            <button className="card-button">Add to card</button>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
}

export default Card;