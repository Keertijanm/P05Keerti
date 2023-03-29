import React from "react";
import { Link } from "react-router-dom";

 const Footer=()=> {
   
    return (
      <div
        className=" row text-light bg-dark p-2"
        style={{ maxWidth: "100%", margin: "auto" }}
      >
        <div className="col-12 col-md-6 w-100">
          <h4 className="white-text">Contact Us</h4>
          <p className="grey-text">
            ABES Engineering College, Ghaziabad Campus 1, 19th KM Stone, NH 24,
            Ghaziabad - 201009, U.P.
          </p>
          <p className="grey-text">+911207135112</p>
        </div>

        <div className="col-12 col-md-6 w-100">
          <h4 className="white-text">Social Media</h4>
          <ul>
            <li>
              <Link
                to="https://www.linkedin.com/in/keerti-gupta-907793202/"
                className="grey-text"
              >
                {" "}
                Linkedin
              </Link>
            </li>
            <li>
              <Link to="https://github.com/Keertijanm" className="grey-text">
                {" "}
                GitHub
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/keertijanm" className="grey-text">
               {""}
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Footer;
