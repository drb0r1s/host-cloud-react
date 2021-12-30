import React, { useState, useRef } from "react";
import { homeReviewsData, homeReviewsDataButtons } from "../data";
import reviewsQuote from "../images/home-reviews-quote.svg";

const Reviews = () => {
    const [activeButton, setActiveButton] = useState(1);
    
    let allReviews = useRef(null);
    
    function mouseDown(event) {
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);

        const prevX = event.clientX;
        const reviewsStyle = allReviews.current.style.left;
        const reviewsLeft = reviewsStyle.substring(0, reviewsStyle.length - 2);
        
        function mouseMove(event) {
            const newX = prevX - event.clientX;
            allReviews.current.style.left = reviewsLeft - newX + "px";
        }

        function mouseUp() {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
            
            if(reviewsLeft > 500) setActiveButton(0);
            if(reviewsLeft <= 500 && reviewsLeft >= -500) setActiveButton(1);
            if(reviewsLeft < -500) setActiveButton(2);
            
            if(reviewsLeft > 610) {
                const max = 550;
                const min = 300;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                allReviews.current.style.transition = "300ms";
                allReviews.current.style.left = randomRange + "px";

                setTimeout(() => {
                    allReviews.current.style.transition = "0ms";
                }, 300);
            }
            
            if(reviewsLeft < -610) {
                const max = -550;
                const min = -300;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                allReviews.current.style.transition = "300ms";
                allReviews.current.style.left = randomRange + "px";

                setTimeout(() => {
                    allReviews.current.style.transition = "0ms";
                }, 300);
            }
        }
    }

    function touchStart(event) {
        window.addEventListener("touchmove", touchMove);
        window.addEventListener("touchend", touchEnd);

        const prevTouches = event.targetTouches[0];

        const reviewsStyle = allReviews.current.style.left;
        const reviewsLeft = reviewsStyle.substring(0, reviewsStyle.length - 2);

        function touchMove(event) {
            const touchLocation = event.targetTouches[0];
            const newTouch = prevTouches.clientX - touchLocation.clientX;

            allReviews.current.style.left = reviewsLeft - newTouch + "px";
        }

        function touchEnd() {
            window.removeEventListener("touchmove", touchMove);
            window.removeEventListener("touchend", touchEnd);

            if(reviewsLeft > 500) setActiveButton(0);
            if(reviewsLeft <= 500 && reviewsLeft >= -500) setActiveButton(1);
            if(reviewsLeft < -500) setActiveButton(2);
            
            if(reviewsLeft > 610) {
                const max = 550;
                const min = 300;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                allReviews.current.style.transition = "300ms";
                allReviews.current.style.left = randomRange + "px";

                setTimeout(() => {
                    allReviews.current.style.transition = "0ms";
                }, 300);
            }
            
            if(reviewsLeft < -610) {
                const max = -550;
                const min = -300;

                const randomRange = Math.floor(Math.random() * (max - min) + min);
                
                allReviews.current.style.transition = "300ms";
                allReviews.current.style.left = randomRange + "px";

                setTimeout(() => {
                    allReviews.current.style.transition = "0ms";
                }, 300);
            }
        }
    }

    function moveReview(b) {
        allReviews.current.style.transition = "300ms";

        setTimeout(() => {
            allReviews.current.style.transition = "0ms";
        }, 300);
        
        switch(b) {
            case 0:
                allReviews.current.style.left = "609px";
                break;
            case 1:
                allReviews.current.style.left = "0";
                break;
            case 2:
                allReviews.current.style.left = "-609px";
                break;
            default:
                allReviews.current.style.left = "0";
        }

        setActiveButton(b);
    }
    
    return(
        <div className="reviews">
            <div id="subtitle-p">testimonials</div>
            <h2>what they say about us</h2>

            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-10 reviews-holder d-flex align-items-center justify-content-center">
                        <div
                            className="all-reviews"
                            ref={allReviews}
                            onMouseDown={mouseDown}
                            onTouchStart={touchStart}
                        >
                            {homeReviewsData.map((review) => {
                                return <Review
                                    key={review.id}
                                    {...review}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-holder">
                {homeReviewsDataButtons.map((button) => {
                    return <button
                        key={button}
                        id={activeButton === button ? "active-button" : ""}
                        onClick={() => moveReview(button)}
                    ></button>
                })}
            </div>
        </div>
    );
}

const Review = (props) => {
    const { name, title, description } = props;
    
    return(
        <div className="review">
            <div className="img-holder">
                <img src={reviewsQuote} alt="QUOTE" />
            </div>

            <p className="review-description">{description}</p>

            <div className="review-info">
                <strong>{name}</strong>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Reviews;