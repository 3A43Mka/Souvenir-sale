import React from 'react';
import './SlideDots.scss';

const SlideDots = (
    {
        len,
        activeItem,
        changeItem
    }
) => {
    const dots = [];
    for (let i = 0; i < len; i++) {
        let dotClass = 'owl-dots__dot';

        if (activeItem === i) {
            dotClass += '--active';
        }

        dots.push(<button
            key={i}
            onClick={() => { changeItem(i) }}
            className={dotClass}></button>)
    }
    return (
        <div className="owl-dots">
            {dots}
        </div>
    );
};

export default SlideDots;