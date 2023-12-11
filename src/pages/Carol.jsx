import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { carolText } from '../data/carol'

const Carol = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const CarolPageClass = loading? 'isLaoding' : 'isLoaded';

    return (
        <Main 
            title = "하얀 눈 유튜브"
            description="크리스마스 캐롤 하얀 눈 유튜브 사이트입니다.">
            
            <section id='carolPage' className={CarolPageClass}>
                <h2> 크리스마스의 기적을 믿나요?🎄❄️ </h2>
                <div className='video__inner'>
                    <VideoCard videos={carolText}/>
                </div>
            </section>
        </Main>
    )
}

export default Carol