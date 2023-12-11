import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { codingappleText } from '../data/codingapple';
import { FaAppleAlt } from "react-icons/fa";

const Codingapple = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const dreamCodingPageClass = loading? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "코딩애플 사이트"
            description="코딩애플 사이트 강의입니다.">
            <section id='codingapplePage' className={dreamCodingPageClass}>
                <h2><FaAppleAlt /> 텐서플로우 딥러닝 기초</h2>
                <div className='video__inner'>
                    <VideoCard videos={codingappleText} />
                </div>
            </section>
        </Main>
    )
}

export default Codingapple