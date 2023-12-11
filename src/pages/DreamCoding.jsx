import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import {dreamCodingText} from '../data/dreamCoding'

const DreamCoding = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },300)
    },[])

    const dreamCodingClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "드림코딩 사이트"
            description="드림코딩 사이트입니다.">
            
            <section id='dreamCodingPage' className={dreamCodingClass}>
                <h2>자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요 📒</h2>
                <div className='video__inner'>
                    <VideoCard videos={dreamCodingText} />
                </div>
            </section>
        </Main>
    )
}

export default DreamCoding