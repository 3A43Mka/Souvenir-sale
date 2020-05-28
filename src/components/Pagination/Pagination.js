import React from 'react';
import { connect } from 'react-redux';
import { goPage, nextPage, prevPage } from "../../actions";

const Pagination = (props) => {

    const onPage = (n) => {
        props.dispatch(goPage(n));
        window.scrollTo(0, 0);
    }

    const onPrev = () => {
        props.dispatch(prevPage());
        window.scrollTo(0, 0);
    }

    const onNext = () => {
        props.dispatch(nextPage());
        window.scrollTo(0, 0);
    }

    const isOnLastPage = () => {
        return props.perPage * props.currentPage >= props.totalItemsCount;
    }

    const getPages = () => {
        const c = Math.ceil(props.totalItemsCount / props.perPage);
        const p = props.currentPage || 1;
        const pagesToShow = props.pagesToShow || 9;
        const pages = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    }
    /////////////////////////////////////////////////////// WTF is this mess?
    const pages = getPages().map((pageNum, i) => {

        let buttonClass = 'page-item';

        if (pageNum === props.currentPage) {
            buttonClass += ' active';
        }

        return (<li key={i} className={buttonClass} onClick={() => { onPage(pageNum) }}><button className="page-link" >{pageNum}</button></li>);
    });

    let prevButtonClass = 'page-item';

    if (props.currentPage === 1) {
        prevButtonClass += ' disabled';
    }

    const prevButton = (<li className={prevButtonClass}>
        <button
            className="page-link" onClick={onPrev} tabIndex="-1">&lt;</button>
    </li>);

    let nextButtonClass = 'page-item';

    if (isOnLastPage()) {
        nextButtonClass += ' disabled';
    }

    const nextButton = (
        <li className={nextButtonClass}>
            <button
                disabled={isOnLastPage()}
                className="page-link" onClick={onNext}>&gt;</button>
        </li>
    );


    return (
        <nav aria-label="...">
            <ul className="pagination">
                {prevButton}
                {pages}
                {nextButton}
            </ul>
        </nav>
    );
}

export default connect()(Pagination);;