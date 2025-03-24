import React from 'react';
import "../styles/Itemcontent.css";

export default function Itemcontent() {
    return (
        <div>
            <div className="first_part">
                <p className="first_topic">Bringing nature to your space—one plant at a time</p>
                <p className="first_para">Discover a vibrant selection of plants to brighten your home, office, or garden. From
                    low-maintenance greens to exotic beauties, our carefully curated inventory has something for every plant
                    lover. Bring nature closer—one plant at a time!
                </p>

                <div className="button01">
                    <button className="but01"> <span>Explore More</span></button>
                </div>
            </div>


            <div className="sections-container">
                <div className="about_container">
                    <div className="why-choose-us">
                        <div className="content">
                            <h2>Why Choose Our Ornamental Plants</h2>
                            <p>Enhance your space with beautiful, low-maintenance ornamental plants. Perfect for both indoors
                                and outdoors, they add color and elegance to any setting.</p>
                            <ul>
                                <li>Unique and colorful varieties</li>
                                <li>Perfect for indoor and outdoor decor</li>
                                <li>Easy to care for</li>
                            </ul>
                            <a href="" className="btn">Read More</a>
                        </div>
                        <div className="image01"></div>
                    </div>
                </div>

                <div className="about_container">
                    <div className="why-choose-us">
                        <div className="content">
                            <h2>Why Choose Our Herbal Plants</h2>
                            <p>Grow fresh, organic herbs for cooking and healing. Our herbal plants thrive in small spaces and
                                are simple to maintain.Simply Choose Herbel for you</p>
                            <ul>
                                <li>Fresh herbs for cooking and healing</li>
                                <li>Ideal for small spaces</li>
                                <li>Easy to grow and maintain</li>
                            </ul>

                            <a href="" className="btn">Read More</a>
                        </div>
                        <div className="image02"></div>
                    </div>
                </div>


                <div className="product_topic">
                    <p className='product_top'>Our Products</p>
                    <p className='product_para'>Bring nature home! 🌿 Choose from our beautiful, healthy plants to brighten your space today!</p>
                </div>



            </div>

        </div>
    )
}