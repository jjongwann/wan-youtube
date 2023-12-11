import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import {inflearnText} from'../data/inflearn'

const Inflearn = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const inflearnPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "인프런 사이트"
            description="인프런 사이트 강의입니다.">
            <section id='inflearnPage' className={inflearnPageClass}>
                <h2>🌱 inflaylist</h2>
                <div className='video__inner'>
                    <VideoCard videos={inflearnText} />
                </div>
            </section>
        </Main>
    )
}

export default Inflearn