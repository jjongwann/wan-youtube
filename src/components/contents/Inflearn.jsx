import React from 'react'
import { inflearnText } from '../../data/inflearn'
import { Link } from 'react-router-dom'

const Inflearn = () => {
  return (
    <section id='inflearn'>
        <h2>🌱 inflaylist</h2>
        <div className='video__inner'>
            {inflearnText.map((video, key) => (
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

export default Inflearn

