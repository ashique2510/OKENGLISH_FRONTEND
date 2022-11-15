import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


const ArticleUser = () => {

  const userDetails = useSelector(
    (state) => state.auth
  )

  return (
    <>
      <div className="profile">
        {/* <button className="img">
          <img
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Facebook-Profile-Images-40.jpg"
            alt="UserImg"
          />
        </button> */}

        <div className="openProfile boxItems">
          <Link to="/account_info">
            <div className="image">
              <div className="img">
                <img
                  src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Facebook-Profile-Images-40.jpg"
                  alt="UserImg"
                />
              </div>
              <div className="tex">
                <h4>{userDetails.user.name}</h4>
                <p>india, kerala</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
};

export default ArticleUser;
