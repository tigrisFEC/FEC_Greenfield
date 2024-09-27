import React from "react";
import Rating from "react-rating";
import "./StarRating.css";

const StarRating = (props) => {
  return (
    <div>
      <Rating
        readonly = {true}
        initialRating={props.rating}
        emptySymbol={<i className="far fa-star" style={{}}></i>}
        fullSymbol={<i className="fa fa-star" style={{ color: "#d4af37" }}></i>}
      />
    </div>
  );
};

export default StarRating;
