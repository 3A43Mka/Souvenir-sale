import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const ProductDetail = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <div className="container" style={{ paddingTop: '6rem' }}>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/products">Магазин</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.product.title}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="card">

                <div className="row">
                    <ProductSlider images={props.product.images} />
                    <ProductDetailComponent product={props.product} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetail);
