// Import the useEffect and useState hooks from the React library.
import { useEffect, useState, useCallback } from "react";

// Import the Card component from the components folder.
import Card from "../components/Card";

// Import the CSS file for the Products page.
import "../styles/products.css";

// Create a functional component named Products.
const Products = () => {
  // Create state variables for products, filtered products, and error messages.
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // For displaying filtered products
  const [error, setError] = useState(null);

  // Create state variables for filters.
  const [filters, setFilters] = useState({
    // The filters state object contains three properties: minPrice, maxPrice, and type.
    minPrice: "",
    maxPrice: "",
    type: "", // Samsung or iPhone
  });

  // Create a useEffect hook to fetch products from the API when the component mounts.
  useEffect(() => {
    // Fetch products from the API using the fetch function.
    fetch("http://localhost:5000/api/products")
      // Check if the response is successful.
      .then((res) => {
        // If the response is not successful, throw an error.
        if (!res.ok) throw new Error("Failed to fetch products");

        // If the response is successful, parse the JSON data.
        return res.json();
      })

      // Set the products state variable with the fetched data.
      .then((data) => {
        // Log the fetched product data for debugging purposes.
        console.log("Fetched Products:", data);

        // Set the products state variable with the fetched data.
        setProducts(data);

        // Initialize the filtered products state variable with the fetched data.
        setFilteredProducts(data);
      })

      // If an error occurs during the fetch request, set the error state variable with the error message.
      .catch((err) => setError(err.message));
  }, []);

  // Create a useCallback hook to apply filters to the products.
  const applyFilters = useCallback(() => {
    // Destructure the minPrice, maxPrice, and type properties from the filters state object.
    const { minPrice, maxPrice, type } = filters;

    // Log the filters for debugging purposes.
    console.log("Applying Filters:", filters);

    // Filter the products based on the filter criteria.
    const filtered = products.filter((product) => {
      // Check if the product price is within the specified range.
      const matchesPrice =
        // If the minPrice filter is not set or the product price is greater than or equal to the minPrice.
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        // If the maxPrice filter is not set or the product price is less than or equal to the maxPrice.
        (!maxPrice || product.price <= parseFloat(maxPrice));

      // Check if the product type matches the specified type filter.
      const matchesType =
        // If the type filter is not set or the product type matches the specified type.
        !type ||
        // If the product type is set and matches the specified type (case-insensitive comparison).
        (product.type && product.type.toLowerCase() === type.toLowerCase());

      // Return true if the product matches the price and type filters.
      return matchesPrice && matchesType;
    });

    // Log the filtered products for debugging purposes.
    console.log("Filtered Products:", filtered);

    // Set the filteredProducts state variable with the filtered products.
    setFilteredProducts(filtered);
  }, [filters, products]);

  // Create a useEffect hook to apply filters whenever the filters change.
  useEffect(() => {
    // Call the applyFilters function whenever the filters change.
    applyFilters();
  }, [applyFilters]);

  // Create a function to handle filter input changes.
  const handleFilterChange = (e) => {
    // Update the filters state object with the new filter value.
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // If there is an error fetching the products, display an error message.
  if (error) return <p>Error: {error}</p>;

  // If the products are still loading, display a loading message.
  if (products.length === 0) return <p>Loading products...</p>;

  // Return the Products page with the filter section and the products section.
  return (
    // The Products page contains a filter section and a products section.
    <div className="products-page">
      {/* The Products page contains a filter section and a products section. */}
      <h1>Products</h1>

      {/* Filter Section */}
      <div className="filters">
        {/* The filter section contains input fields for minPrice, maxPrice, and a select dropdown for type. */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          // The value of the minPrice input field is set to the minPrice filter value.
          value={filters.minPrice}
          // When the minPrice input field value changes, call the handleFilterChange function.
          onChange={handleFilterChange}
        />

        {/* The maxPrice input field allows users to set the maximum price filter. */}
        <input
          // The input field type is set to number.
          type="number"
          // The input field name is set to maxPrice.
          name="maxPrice"
          // The input field placeholder is set to "Max Price".
          placeholder="Max Price"
          // The value of the maxPrice input field is set to the maxPrice filter value.
          value={filters.maxPrice}
          // When the maxPrice input field value changes, call the handleFilterChange function.
          onChange={handleFilterChange}
        />

        {/* The type select dropdown allows users to filter products by type (iPhone or Samsung). */}
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          {/* The default option is "All Types". */}
          <option value="">All Types</option>

          {/* The iPhone option filters products by the iPhone type. */}
          <option value="iPhone">iPhone</option>

          {/* The Samsung option filters products by the Samsung type. */}
          <option value="Samsung">Samsung</option>
        </select>
      </div>

      {/* Products Section */}
      <div id="dataDisplay">
        {/* The products section displays the filtered products using the Card component. */}
        {filteredProducts.map((product) => (
          // For each filtered product, render a Card component with the product data.
          // The key prop is set to the product ID to uniquely identify each product card.
          // The product prop is set to the product data to pass the product
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Export the Products component as the default export.
export default Products;
