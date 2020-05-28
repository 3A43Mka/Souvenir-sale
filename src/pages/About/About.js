import React from 'react';
import { Card } from 'react-bootstrap';
import LocationMap from '../../components/LocationMap/LocationMap'
const About = () => {
    return (
        <>
            <div className="container" style={{ paddingTop: '6rem' }}>
                <div className="row ">
                    <div className="col-12">
                        <h3>Про нас</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Только лучшее</h2>
                        <p>Начиная с 2009 года мы лучшие в сфере торговли сувенирами. Наш магазин имеет около 200 тысяч товаров на продажу на любой вкус. От морских штурвалов времен Острова Сокровищ, до изумрудных свинок для настоящих коллекционеров - наш магазин угодит даже самым требовательным и изысканым покупателям.</p>
                        <p>Наша уютная лавка находится у берега на южной стороне города.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card>
                            <Card.Header className="bg-light text-dark">Факты о нас</Card.Header>
                            <Card.Body>
                                <dl className="row p-1">
                                    <dt className="col-6">Основание</dt>
                                    <dd className="col-6">2009</dd>
                                    <dt className="col-6">Кол-во товаров</dt>
                                    <dd className="col-6">Около 200 тыс.</dd>
                                    <dt className="col-6">В прошлом году продаж</dt>
                                    <dd className="col-6">197 тыс.</dd>
                                </dl>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2>Мы на карте</h2>
                    </div>
                    <div className="col-12">
                        <LocationMap></LocationMap>
                    </div>
                </div>
            </div>
        </>
    );
};


export default About;