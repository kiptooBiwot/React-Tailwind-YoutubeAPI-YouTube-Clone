import { useEffect, useState } from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import { YOUTUBE_API_KEY, valueConverter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([])

  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=KE&videoCategoryId=${categoryId}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(relatedVideoUrl)
    const data = await response.json()

    setApiData(data.items)
  }

  useEffect(() => {
    fetchData()
  }, [categoryId])

  console.log('RECOMMENDED VIDEOS', apiData)

  // const recommendedVideos = [
  //   {
  //     image: thumbnail1,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail2,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail3,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail4,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail5,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail6,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail7,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  //   {
  //     image: thumbnail8,
  //     title: 'A Channel that will teach you web development',
  //     channelName: 'NeoDev',
  //     views: '5,467',
  //   },
  // ]

  return (
    <div className="hidden md:block md:basis-[30%]">
      <div>
        {apiData?.map((video) => {
          return (
            // <div key={index}>

            <Link
              to={`/video/${video?.snippet?.categoryId}/${video?.id}`}
              key={video?.id}
              className="flex justify-between my-2"
            >
              {/* <div>VIDEO: {video}</div> */}

              <img
                src={video?.snippet?.thumbnails?.medium.url}
                alt=""
                className="basis-[49%] w-[50%] rounded-md"
              />
              <div className="basis-[49%]">
                <h4 className="text-[13px] mb-[5px]">
                  {video?.snippet?.title}
                </h4>
                <p className="text-sm">{video?.snippet?.channelTitle}</p>
                <p className="text-sm">
                  {valueConverter(video?.statistics?.viewCount)} Views
                </p>
              </div>
            </Link>
            // </div>
          )
        })}
      </div>
    </div>
  )
}
export default Recommended
