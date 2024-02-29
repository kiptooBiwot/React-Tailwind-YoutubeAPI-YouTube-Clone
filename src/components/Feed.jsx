import { Link } from 'react-router-dom'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import { YOUTUBE_API_KEY, valueConverter } from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'

const Feed = ({ category }) => {
  const [videos, setVideos] = useState([])

  const fetchData = async (cat) => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=KE&videoCategoryId=${cat}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(videoListUrl)

    const data = await response.json()

    setVideos(data.items)
  }

  useEffect(() => {
    fetchData(category)
  })

  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {videos?.map((video, index) => {
        return (
          <Link
            to={`/video/${video.snippet.categoryId}/${video.id}`}
            key={index}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt=""
              className="w-full rounded-md"
            />
            <h2 className="text-[16px] leading-[1.375] font-semibold text-black my-[5px]">
              {video.snippet.title}
            </h2>
            <h3 className="text-[14px] text-[#555] my-[6xl]">
              {video.snippet.channelTitle}
            </h3>
            <p className="text-[14px]">
              {valueConverter(video.statistics.viewCount)} &bull;{' '}
              {moment(video.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
export default Feed
