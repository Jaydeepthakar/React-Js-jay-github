import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container text-center py-3">
                <p className="mb-2">&copy; 2024 Anime App. All Rights Reserved.</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
