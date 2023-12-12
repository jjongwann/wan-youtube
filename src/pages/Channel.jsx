import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main'

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams(); //채널 주소값
    const [ channelDetail, setChannelDetail ] = useState(); //체널 페이지

    const [ channelVideo, setChannelVideo ] = useState([]); //채널 페이지 비디오들

    const [ loading, setLoading ] = useState(true); // 로딩효과

    const [ nextPageToken, setNextPageToken ] = useState(null); //더보기 

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);
                
                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                setChannelVideo(videosData?.items); //videosData가 있다면 items를 setChannelVideo에 저장
                setNextPageToken(videosData?.nextPageToken); //videosData가 있다면 nextPageToken을 setNextPageToken에 저장
            } catch(error){
                console.log('Eroor fetching data', error)
            } finally {
                setLoading(false);
            }
        } 
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if(nextPageToken){
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]); //기존 비디오들과 다음 비디오들을 합침(CONCAT 역할)
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            
            <section id='channel' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                        <div className="channel__video video__inner search">
                            <VideoSearch videos={channelVideo} />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}
            </section>
            
        </Main>
    )
}

export default Channel