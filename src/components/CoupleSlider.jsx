import React from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider_background from "../images/slider_background.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CoupleSlider() {
  return (
    <div>
      {/*event section start */}
      <div id="background-black"></div>
      <div
        id="mmw-img-div"
        className="py-5"
        style={{
          backgroundImage: "url(" + slider_background + ")",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" loop margin={60} items={1}>
                <div className="item">
                  <h1 className="text-center pb-5" id="organise-h1">
                    Millions have found their <span>Life Partner </span> at
                    Magic Fix
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <img src={slider1} id="slider-image" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Supriya & Ashish</h1>

                      <p id="organise-p">
                        I found my match on magic fix within a month. Not yet
                        married but going steady with him. Three cheers to magic
                        fix. Fairy tales do come true. I never thought my
                        passion for travel would take me towards my partner for
                        life. Yes! Two travel enthusiasts met in Magic Fix
                        matrimony on 19th July, 2021 and hitched forever.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h1 className="text-center pb-5" id="organise-h1">
                    Millions have found their <span>Life Partner </span> at
                    Magic Fix
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <img src={slider2} id="slider-image" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Ranjana & Arijit</h1>

                      <p id="organise-p">
                        We met through the interaction between our arents an
                        then with time we fell for each other an now welocke for
                        life. Now she is everything my life is all about. We
                        connected over Magic Fix and then soon exchanged mobile
                        numbers, and rest was a roller coaster ride till we
                        finally got married after 5 months since our first meet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h1 className="text-center pb-5" id="organise-h1">
                    Millions have found their <span>Life Partner </span> at
                    Magic Fix
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <img src={slider3} id="slider-image" alt="my-pic" />
                    </div>
                    <div className="col-md-6">
                      <h1 id="organise-h1">Daniel & Lavina</h1>

                      <p id="organise-p">
                        I think it was pre destined to meet someone more than
                        thousand miles from all together different culture.
                        thanks Magic Fix. I would to thank team Magic Fix for
                        helping me find my life partner cum my best friend. I
                        1st meet her on 15th of July and after talking to each
                        other for 10 mins we found out that our vibes matches.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/*event section complete */}
    </div>
  );
}
