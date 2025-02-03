// Imports the PropTypes package, which is used to define type checking for component props in React.
import PropTypes from "prop-types"; // Import PropTypes

// defines a functional component named Card that takes a single prop named product. The product prop is being destructured from props, which means instead of writing props.product, we directly use product.
const Card = ({ product }) => {
  // The Card component returns a div element that contains an image, h2, p, and a tags. The image tag displays the product image, the h2 tag displays the product name, the p tag displays the product description, and the a tag is a link to the product's Amazon URL.
  return (
    <div className="Product-div">
      <a href={product.amazon_url} target="_blank" rel="noopener noreferrer">
        <img src={product.image_url} alt={product.name} />
      </a>
      <h2 className="h2-products">{product.name}</h2>
      <p className="p-products">{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

// The Card component has a prop type validation using PropTypes. The product prop is required and should be an object with specific shape and data types.
Card.propTypes = {
  // The product prop should be an object with the following shape and data types:
  product: PropTypes.shape({
    // The product object should have the following properties with specific data types:
    id: PropTypes.number.isRequired, // ID should be a number and required
    // The name, description, image_url, and amazon_url properties should be strings and required.
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    amazon_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
