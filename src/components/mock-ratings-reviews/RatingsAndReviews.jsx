import React, { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "./Ratings.jsx";
import Reviews from "./Reviews.jsx";
import { connect } from "react-redux";
import { fakeSoloReview } from "./state.js";

import "./RatingsAndReviews.css";

const mapStateToProps = (store) => ({ productId: 1 });

const RatingsAndReviewsContainer = (props) => {
  const [filters, setFilters] = useState(["relevant", "newest", "helpful"]);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);
  const [soloReview, setFakeSoloReview] = useState(fakeSoloReview);
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${productId}/meta`).then((res) => {
      setProductId(res.data.product_id);
      setFakeSoloReview(res.data);
    });
  }, []);

  return (
    <>
      <div className="container is-fluid">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-4">
              <Ratings filters={filters} setFilter={setFilters} soloReview={soloReview} />
            </div>

            <div className="column is-8">
              <Reviews
                filters={filters}
                charList={fakeSoloReview.characteristics}
                productId={productId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RatingsAndReviews = connect(mapStateToProps)(RatingsAndReviewsContainer);

export default RatingsAndReviews;
