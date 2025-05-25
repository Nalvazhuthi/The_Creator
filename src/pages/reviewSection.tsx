import React, { useRef, useState, useEffect } from "react";
import avatar1 from "../assets/images/avatars/Avatar (1).png";
import avatar2 from "../assets/images/avatars/Avatar (2).png";
import avatar3 from "../assets/images/avatars/Avatar (3).png";
import { NextIcon, PreviewIcon } from "../assets/svgs/exportIcons";
import { HomeimaginationHighlight } from "../assets/svgs/exportPaths";

const ReviewSection: React.FC = () => {
    const reviewsRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const reviews = [
        {
            userImage: avatar1,
            userName: "John Li",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar2,
            userName: "Amanda Steen",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar3,
            userName: "Nicholas Love",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar1,
            userName: "John Li",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar2,
            userName: "Amanda Steen",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar3,
            userName: "Nicholas Love",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar1,
            userName: "John Li",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar2,
            userName: "Amanda Steen",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar3,
            userName: "Nicholas Love",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar1,
            userName: "John Li",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar2,
            userName: "Amanda Steen",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
        {
            userImage: avatar3,
            userName: "Nicholas Love",
            review: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
        },
    ];

    const scroll = (direction: "next" | "prev") => {
        const container = reviewsRef.current;
        const scrollAmount = 550;

        if (container) {
            const newScrollLeft =
                direction === "next"
                    ? container.scrollLeft + scrollAmount
                    : container.scrollLeft - scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        const container = reviewsRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        const container = reviewsRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll(); // initial check
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="review-container" id="review">
            <div className="header">
                We’ve taught
                over 3,000 creators
                how to
                <span className="highlight">
                    <span className="messgae">grow on any Platform</span>
                    <div className="svg">
                        <HomeimaginationHighlight />
                    </div>
                </span>
            </div>
            <div className="header">Now we can do it for you</div>
            <div className="header-wrapper">
                <div className="message">See what our famous clients write about us:</div>
                <div className="pagination">
                    <div
                        className={`navigation  ${!canScrollPrev ? "navigate" : ""}`}
                        onClick={() => scroll("prev")}
                    >
                        <PreviewIcon />
                    </div>
                    <div
                        className={`navigation ${!canScrollNext ? "navigate" : ""}`}
                        onClick={() => scroll("next")}
                    >
                        <NextIcon />
                    </div>
                </div>
            </div>
            <div className="review-section" ref={reviewsRef}>
                {reviews.map((review, index) => (
                    <div className="review-wrapper" key={index}>
                        <img src={review.userImage} alt={review.userName} />
                        <div className="userName">{review.userName}</div>
                        <div className="review">{review.review}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;



