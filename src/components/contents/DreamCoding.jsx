import React from 'react'

import { dreamCodingText } from '../../data/dreamCoding'
import { Link } from 'react-router-dom'

const DreamCoding = () => {
    return (
        <section id='dreamCoding'>
            <h2>자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요 📒</h2>
            <div className='video__inner'>
                {dreamCodingText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DreamCoding