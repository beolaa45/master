import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Banner.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
function Banner({url, title, page}) {
    return (
        <div className="Banners" style={{backgroundImage: `url(${url})`}}>
            <h1 className="Banners__title">{title}</h1>
            <div className="Banners__box">
                <NavLink to="/" className="Banners__box__link">Home</NavLink>
                <div className="Banners__box__icons">
                    <FontAwesomeIcon icon={faChevronRight} className="Banners__box__icon"/>
                </div>
                <NavLink to={`/${page}`} className="Banners__box__link Banners__box__link--active" >{page}</NavLink>
            </div>
        </div>
    )
}

export default Banner

