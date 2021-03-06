import React from 'react';
import Carousel from 'nuka-carousel';

import './blog.css';

const Blog = () => {
  return (
    <div>
      <div className="blog" id=" blog ">
        <div className="">
          <h1 className=" blog_title text-center " style={{ zIndex: '15' }}>
            <b>Latest News.</b>
          </h1>
          <h4 className=" blog_sm_title mt-4 ml-3 text-center ">
            CHECK OUT SOME OF OUR THINKING
          </h4>
        </div>

        <Carousel wrapAround={true} slidesToShow={3} withoutControls={true}>
          <div className=" zoom-1 ">
            <div className=" blog_text ">
              <div
                className=" text-center mb-2 "
                style={{ fontSize: '10px', width: '100%' }}
              >
                DEIGN/UX
              </div>
              <p className=" text-center blog_txt" style={{ fontSize: '20px' }}>
                How to drive your customer experience
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              <img src=" ./images/blog/01-min.jpg " alt=" " />
            </>
          </div>
          <div className=" zoom-1 ">
            <div className=" black_display_blog "></div>
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                DEIGN/UX
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to be more productive usgin sticky notes
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              {' '}
              <img src=" ./images/blog/03-min.jpg " alt=" " />
            </>
          </div>
          <div className=" zoom-1 ">
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                CAREERS
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to drive your customer experience
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              <img src=" ./images/blog/02-min.jpg " alt=" " />
            </>
          </div>
          <div className=" zoom-1 ">
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                MARKETING
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                Choose from meeting speak, client feedback
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              <img src=" ./images/blog/06-min.jpg " alt=" " />
            </>
          </div>
          <div className=" zoom-1 ">
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                DEIGN/UX
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to make your product stand out
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              <img src=" ./images/blog/02-min.jpg " alt=" " />
            </>
          </div>
          <div className=" zoom-1 ">
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                CAREERS/MARKETING
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to become a best sale marketing in a year
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>
            <div className=" black_display_blog "></div>
            <>
              <img src=" ./images/blog/04-min.jpg " alt=" " />
            </>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
