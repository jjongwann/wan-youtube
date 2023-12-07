import React from 'react'
import { codingappleText } from '../../data/coddingapple'
import { Link } from 'react-router-dom'

const Codingapple = () => {
   return (
    <section id='codingapple'>
        <h2>🤗 텐서플로우 딥러닝 기초</h2>
        <div className='video__inner'>
            {codingappleText.map((video, key) => (
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

export default Codingapple