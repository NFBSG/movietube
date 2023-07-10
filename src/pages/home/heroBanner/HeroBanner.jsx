import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';//custom hook

import Img from "../../../component/lazyLoadImage/img";

import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';




const HeroBanner = () => {
  const [background,setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const {url}=useSelector((state)=>state.home);
  const {data,loading} =useFetch("/movie/upcoming");
 useEffect(()=>{
  const bg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
 setBackground(bg); 
},[data])
  const searchQueryHandler=(event)=>{
  if(event.key==="Enter" && query.length>0){
navigate(`/search/${query}`)
  }
  }
  return (
    <div className="heroBanner">
      {/* Condition On Images */}
     { !loading&&<div className="backdrop-img">
      <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="heroBannerContent">
          <span className='title'>Welcom Here</span>
          <span>
            Discover Millions of movies,TV shows, and much more
          </span>
          <div className='searchInput'>
           <input
           type="text"
           placeholder='Search any movie or tv shows...'
           onChange={(e)=>setQuery(e.target.value)}
           onKeyUp={searchQueryHandler}/>
           <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
     
    </div>
  )
}

export default HeroBanner