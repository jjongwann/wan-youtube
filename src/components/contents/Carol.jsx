import React from 'react'
import { carolText } from '../../data/carol'
import { Link } from 'react-router-dom'

const Carol = () => {
  return (
    <section id='carol'>
    <h2>☃️크라스마스 케롤송!🎄🎅</h2>
    <div className='video__inner'>
        {carolText.map((video, key) => (
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

export default Carol