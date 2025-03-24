import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer_center">
                <div className="add_copyright">
                    <div className="footer_full_cont">
                        <div className="footer01">
                            <p className="footer_t">Menu</p>
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Products</a>
                            <a href="#">Our Works</a>
                            <a href="#">Contact</a>
                        </div>

                        <div className="footer02">
                            <p className="footer_t">Our Services</p>
                            <a href="#">Plant Sales</a>
                            <a href="#">Gardening Tools & Supplies</a>
                            <a href="#">Landscape Design</a>
                            <a href="#">Plant Care & Maintenance</a>
                        </div>

                        <div className="footer03">
                            <p>Open time</p>
                            <p>8.00 am to 6.00 pm</p>
                            <p>Location</p>
                            <p>No 23/52, Sliit campus, Kandy road, Malabe</p>
                        </div>
                    </div>
                    <div className="copydiv">
                        <p className="copyright">All rights reserved / [KTAPH Creations]</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
