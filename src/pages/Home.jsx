import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Carol from '../components/contents/Carol'
import DreamCoding from '../components/contents/DreamCoding'
import Lofi from '../components/contents/Lofi'
import Inflearn from '../components/contents/Inflearn'
import Codingapple from '../components/contents/Codingapple'

const Home = () => {
    return (
        <Main 
            title = "완 유튜브"
            description="완 유튜버 사이트에 오신 것을 환영합니다.">
            <Today />
            <Developer />
            <Carol />
            <DreamCoding />
            <Lofi />
            <Inflearn />
            <Codingapple />
        </Main>
    )
}

export default Home