import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import { Card } from 'react-bootstrap';

const MainPage = () => {
    return (
        <div className="container" style={{ paddingTop: '6rem' }} >
            <div class="row align-items-center my-5">
                <div class="col-lg-7">
                    <Slider />
                </div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">SouvaShop</h1>
                    <p>Если вы ищите Подарки и сувениры, то вы попали по адресу! И помните, что подарок –  это не формальность, а способ порадовать хорошего человека!</p>
                </div>
            </div>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <Card.Body>
                    <h3 class="text-white m-0 ">Лучше один раз купить брелок, чем семь раз пожалеть!</h3>
                </Card.Body>
            </Card>

            <div class="row">
                <Card className="h-100">
                    <Card.Body>
                        <Card.Title><h2>Все еще не убедили?</h2></Card.Title>
                        <Card.Text><p>Загляните в наш магазин и посмотрите сами! Сотни уникальных подарков, сразу поднимающих настроение, уже у нас в продаже! Загляните в наш магазин и посмотрите сами! Сотни уникальных подарков, сразу поднимающих настроение, уже у нас в продаже!</p></Card.Text>
                        <Card.Footer>
                            <Link class="btn btn-primary btn-sm" to="/products/">Посмотреть товары</Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};



export default MainPage;
