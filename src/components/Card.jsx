import { useState } from 'react'
import { Link } from 'react-router-dom';



function Card(props) {

    const { id, name, title, subTitle, image, tags, category } = props;
  
    return (
        <div className='card'>
            <img className='card_image' src={image || './images/illustration-default.jpg'} alt={`${name} image`}/>
            <div className='card_category'><div className='card_category-row'><div className={`${category} card_category-circle`}></div><span className='card_category-text'>{category}</span></div></div>
            <div className='card_banner'>
                <h3 className='card_banner-title'>{title}</h3>
                <h4>{subTitle}</h4>
                <div className='card_tag-list'>
                    {tags.map((tag, index) => (                   
                        <span key={index} className='card_tag-item'>{tag}</span>
                    ))}
                </div>
                <Link to={`/project/${id}`}><button className='card_button'>Découvrir</button></Link>
            </div>
        </div>
    )
}

export default Card