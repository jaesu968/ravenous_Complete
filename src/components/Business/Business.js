import React from "react";
import PropTypes from "prop-types"; // so can use prop types
import styles from "./Business.module.css";

// refactor the business component to use the data from the Yelp API

// update the business component to use the business prop 
const Business = ({ business }) => {
  // destructure business props for cleaner JSX
  const {
    id,
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = business;
  // return the business component with the passed props
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="" />
      </div>
      <h2>{name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{address}</p>
          <p>{city}</p>
          <p>{`${state} ${zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${rating} stars`}</h3>
          <p>{`${reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

// Add prop validation 
Business.propTypes = {
  business: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default Business;
