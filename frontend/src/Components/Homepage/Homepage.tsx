import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Section from "./section";
import Footer from "./Footer";

const Homepage = (props: any) => {
  return (
    <>
      <div>
        <div className="container-img">
          <p className="text">
            Cleaning is hard at first, messy in the middle and gorgeous in the
            end
          </p>

          <div className="container-btns">
            <Link to="/services" style={{ textDecoration: "none" }}>
              <Button id="btn" style={{ backgroundColor: '#B2D3EF' }} variant="contained">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Section />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
