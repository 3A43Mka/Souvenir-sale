import React, {useState} from 'react';
import {cumulativeOffSet} from "../../utilities/cumulativeOffset"
import './ProductSlider.scss';

const ProductSlider = (
    {
        images
    }
) => {
    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);

    const handleImageChange = (e) => {
        const currentX = e.clientX - cumulativeOffSet(imageRef.current).left;
        const part = imageRef.current.clientWidth / images.length;
        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }
        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
    };

    const changeImage = (i) => {
        setImg(images[i]);
    }


    return (
        <aside className="col-sm-5 ">
            <article className="gallery">
                <div className="gallery__main">
                    <div><img
                    className="gallery__image"
                    alt="product"
                        ref={imageRef}
                        onMouseMove={handleImageChange}
                        onMouseOut={handleMouseOut}
                        src={img}
                    /></div>
                </div>
                <div className="gallery__miniatures">
                    {images.map((img , i ) => (
                        <div key={i} className="gallery__miniature" onClick={() => {changeImage(i)}}> <img className="gallery__mini-image" alt={i} src={img}/></div>
                    ))}
                </div>
            </article>
        </aside>
    );
};

export default ProductSlider;