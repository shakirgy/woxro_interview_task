import React from "react";
import fortinite from "./Assets/fortnite-pictures-b5kfcchwazwiz3cs 1.jpg";
import card1 from "./Assets/e6367d9b4eb33348f4ea89fafecbed9f.jpg";
import card2 from "./Assets/Mask group.jpg";
import card3 from "./Assets/Mask group1.jpg";
import { IoMdClose } from "react-icons/io";
import "./EpicGames.css";

function EpicGames() {
  return (
    <div>
      <div>
        <button className="close-button">
          <IoMdClose />
        </button>
      </div>
      <div className="fortnite">
        <div className="f-span">
          <span>
            Epic Games : An American video game and software developer and
            publisher based in Cary, North Carolina.
          </span>
        </div>
        <br />
        <img src={fortinite} alt="Fortnite Logo" className="fortnite-logo" />
        <p className="f-para">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="view-button">View Website</button>

        <div className="card-div">
          <div className="card-img-div">
            <img src={card1} alt="" className="card-img" />
            <br />
            <span className="card-p">
              Explore large, destructible environments where no two games are
              ever the same.
            </span>
          </div>
          <div className="card-img-div">
            <img src={card2} alt="" className="card-img" />
            <br />
            <span className="card-p">
              Team up with friends by sprinting, climbing and smashing your way
              to earn your Victory Royale
            </span>
          </div>
          <div className="card-img-div">
            <img src={card3} alt="" className="card-img" />
            <br />
            <span className="card-p">
              Discover even more ways to play across thousands of creator-made
              game genres
            </span>
          </div>
        </div>
        <div
          style={{
            padding: "0% 7.5%",
          }}
        >
          <span className="contri-head">Our Contribution</span>
          <br />
          <p className="contri-para">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
          <br />
        </div>
        <div className="contri-chart-div">
          <div className="head-para-contri">
            <span className="contri-chart-span-head">5M</span>
            <br />
            <span className="contri-chart-span-para">Daily User Engagment</span>
          </div>
          <div className="head-para-contri">
            <span className="contri-chart-span-head">$500K</span>
            <br />
            <span className="contri-chart-span-para">
              Revenue Surge for an platfrom
            </span>
          </div>
          <div className="head-para-contri">
            <span className="contri-chart-span-head">10X</span>
            <br />
            <span className="contri-chart-span-para">
              ROAS on all our marketing campaingns
            </span>
          </div>
        </div>
        <div className="bottom-div">
          <div>
            <span className="bottom-head">
              Interested in delving deeper into the project?
            </span>
          </div>
          <div className="bottom-para">
            <span>
              If you'd like to explore further details about our initiatives or
              any of our affiliated brands, don't hesitate to connect. You can
              reach out to us via email at{" "}
              <span className="contact">hello@abc.com</span> or give us a call
              at
              <span className="contact">+91 480 20802730.</span>
            </span>
          </div>
          <div className="button-div">
            <div>
              <button className="button-last">Ring us on skype</button>
            </div>
            <div>
              <button className="view-button">Contact Us</button>
            </div>
          </div>
          <div id="b0ttom-para">
            <p>
              © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpicGames;
