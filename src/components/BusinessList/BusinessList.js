import React from "react";
import PropTypes from "prop-types";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.BusinessList}>
      {businesses && businesses.map((business) => (
        <Business 
        key={business.id}
        business={business} 
        />
      ))}
    </div>
  );
};

// add prop validation 
BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    })
  ).isRequired, 
};

export default BusinessList;
