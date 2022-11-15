import React, { useEffect, useState } from 'react'
import "./category.css";
import { category } from '../../../assets/data/data'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import axios from 'axios'
import { getCategories } from '../../../utils/ApiRoutes';
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}


const Category = ({article}) => {

  console.log('from category',article);

   const [cat, setCat]=useState([])

   useEffect(()=>{
    
        const getCats = async ()=>{

          const response = await axios.get(getCategories)
           setCat(response.data)          

        }
        getCats()

   },[])



   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }
  
    return (
      <>
        <section className='carosal_category'>
          <div className='carosal_content'>
            <Slider {...settings}>
              {article.map((item) => (
                <div className='boxs'>
                      <Link to={`/article_home/?cat=${item.category}`} >
                  <div className='box' key={item.id}>
                    <img src={item.url} alt='cover' />
                  
                    <div className='overlay'>
                      <h4 style={{fontSize:'20px',fontWeight:'700'}}>{item.category}</h4>
                      {/* <p>{item.title}</p> */}
                    </div>
                  </div>
                      </Link>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    )
}

export default Category