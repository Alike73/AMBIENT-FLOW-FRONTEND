
import './ScrollToTopAndBottom.css';
import React, { useState, useEffect } from "react";


const ScrollToTopAndBottom = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 450) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <i className="bi bi-chevron-down icon-position2 icon-style fs-5" onClick={scrollToBottom} />
                )}{" "}
            </div>

            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <i className="bi bi-chevron-up icon-position icon-style fs-5" onClick={goToTop} />
                )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTopAndBottom;