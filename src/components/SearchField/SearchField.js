import React, { useRef, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Form, FormControl} from 'react-bootstrap'
import './SearchField.scss';
import { addSearch, removeSearch, goPage } from "../../actions";


const SearchField = (props) => {

    const firstUpdate = useRef(true);
    const [searchText, setSearchText] = useState('');

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            props.dispatch(goPage(1));
            props.dispatch(removeSearch());
            return;
        }
    });

    const onSearch = (search) => {
        setSearchText(search);
        props.dispatch(goPage(1));
        search.length ? props.dispatch(addSearch(search)) : props.dispatch(removeSearch());
    };


    return (
        <Form className="search-form">
            <FormControl  value={searchText} type="text" placeholder="Поиск..." onChange={e => onSearch(e.target.value)} className="" />
        </Form>
    );

};

export default connect()(SearchField);