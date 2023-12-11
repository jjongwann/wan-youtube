import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import {lofiText} from '../data/lofi'

const Lofi = () => {
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300)
    },[]);

    const lofiClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Lofi코딩"
            description="코딩할때 듣기 좋은 노래들">
            <section id='LofiPage' className={lofiClass}>
                <h2>코딩할때 듣기 좋은 노래✨</h2>
                <div className='video__inner'>
                    <VideoCard videos={lofiText} />
                </div>
            </section>
        </Main>
    )
}

export default Lofi