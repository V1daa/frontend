import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          reiciendis accusantium ipsum similique inventore veniam, omnis dolore
          accusamus, aut minus neque repudiandae esse. Fuga odio maiores
          expedita laudantium est rem?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
