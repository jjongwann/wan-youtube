import React from 'react'

import { lofiText } from '../../data/lofi'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <section id='lofi'>
            <h2>🤓 코딩할때 듣기 좋은 노래 • 3 hours playlist • lofi type beat • beats to relax • study music</h2>
            <div className='video__inner'>
                {lofiText.map((video, key) => (
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

export default Gsap