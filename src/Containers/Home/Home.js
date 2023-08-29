import React from 'react';
import './Home.css'
import Card from '../../Components/Cards/Card'
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getArticles} from "../../redux/articles/articles";
import {v4 as uuidv4} from 'uuid';
import {Link} from "react-router-dom";

function Home(props) {

    const {articles} = useSelector(state => ({
        ...state.articleReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }
    }, []);


    return (
        <>
            <h1 className="home-title">Tous les articles</h1>
            <div className="container-cards">
                {articles.map(item => {
                    return (
                        <Card key={uuidv4()}>
                            <h2>{item.title}</h2>
                            <Link
                                to={{pathname: `articles/${item.title}`}}
                                state={{
                                title: item.title,
                                body: item.body
                            }}
                            >Lire l'article</Link>
                        </Card>
                    )
                })}
            </div>
        </>
    );
}

export default Home;