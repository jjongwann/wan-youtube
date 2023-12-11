import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'
import { carolText } from '../data/carol'
import { dreamCodingText } from '../data/dreamCoding'
import { lofiText } from '../data/lofi'
import { inflearnText } from '../data/inflearn'
import { codingappleText } from '../data/codingapple'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title = "완 유튜브"
            description="완 유튜버 사이트에 오신 것을 환영합니다.">
            <Today videos={todayText} id='today'/>
            <Developer videos={developerText} title='😪 추천 개발자를 소개합니다.' id='developer'/>
            <VideoSlider videos={carolText} title='☃️크라스마스 케롤송!🎄🎅' id='carol' />
            <VideoSlider videos={dreamCodingText} title='자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요 📒' id='dreamCoding' />
            <VideoSlider videos={lofiText} title='🤓 코딩할때 듣기 좋은 노래 • 3 hours playlist • lofi type beat • beats to relax • study music' id='lofi' />
            <VideoSlider videos={inflearnText} title='🌱 inflaylist' id='inflearn' />
            <VideoSlider videos={codingappleText} title='🤗 텐서플로우 딥러닝 기초' id='codingapple' />
        </Main>
    )
}

export default Home