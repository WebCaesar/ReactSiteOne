import React from 'react';
import Carousel from 'nuka-carousel';
// import { useMediaQuery } from 'react-responsive';

import './index.css';

const Works = () => {
  // const sm = useMediaQuery({ query: '(max-width: 640px)' });
  // const md = useMediaQuery({ query: 'max-width: 768px' });
  // const lg = useMediaQuery({ query: 'max-width: 1024px' });

  return (
    <div>
      <div className="works mt-5" id="works">
        <div className="container">
          <div className="works_title d-flex justify-content-between ">
            <h1>
              <b>Works</b>
            </h1>
            <div className=" works_btn d-flex justify-content-start align-content-start ">
              <div className=" works_text d-flex justify-content-center align-content-center ">
                <h4>View All</h4>
              </div>
              <div className=" works_border d-flex align-content-center justify-content-center "></div>
            </div>
          </div>
          <h4 className=" mt-3 " style={{ color: '#e9204f' }}>
            THINGS WE'VE MADE
          </h4>
        </div>

        <div className="">
          <Carousel wrapAround={true} slidesToShow={3} withoutControls={true}>
            <div className="zoom-1">
              <div className=" black_display "></div>
              <div className=" work_text ">
                <h3>
                  <b>Woody</b>
                </h3>
                <p className=" text-center ">Achitecture/Concept</p>
              </div>
              <img
                src="images/01.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div className=" black_display "></div>
              <div className=" work_text ">
                <h3>
                  <b>Product Design</b>
                </h3>
                <p className=" text-center ">Design/marketing</p>
              </div>
              <img
                src="images/03.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div className=" work_text ">
                <h3>
                  <b>Interior</b>
                </h3>
                <p className=" text-center ">Achitecture/Design</p>
              </div>
              <div className=" black_display "></div>
              <img
                src="images/02.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div className=" work_text ">
                <h3>
                  <b>Electrica</b>
                </h3>
                <p className=" text-center ">App</p>
              </div>
              <div className=" black_display "></div>
              <img
                src="images/04.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div className=" black_display "></div>
              <div className=" work_text ">
                <h3>
                  <b>Home Design</b>
                </h3>
                <p className=" text-center ">Achitecture/Design</p>
              </div>

              <img
                src="images/05.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div className=" work_text ">
                <h3>
                  <b>Bikeer</b>
                </h3>
                <p className=" text-center ">Concept/Design</p>
              </div>
              <img
                src="images/03.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className=" d-flex justify-content-center ">
        <div className=" service_v_arrow_1 "></div>
      </div>
    </div>
  );
};

export default Works;
