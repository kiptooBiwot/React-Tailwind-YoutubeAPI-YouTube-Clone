import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import user_profile from '../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY, valueConverter } from '../../data'
import moment from 'moment/moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {
  const { videoId } = useParams()
  console.log('VIDEO ID', videoId)

  const [videoData, setVideoData] = useState(null)
  const [channelData, setChannelData] = useState(null)
  const [comments, setComments] = useState([])

  const fetchVideoData = async (videoId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    setVideoData(data.items[0])
  }

  const fetchOtherData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    setChannelData(data.items[0])
  }

  const fetchComments = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    // console.log('cOMMENT DATA', data.items)
    setComments(data.items)
  }

  useEffect(() => {
    fetchVideoData(videoId)
  }, [videoId])

  useEffect(() => {
    fetchOtherData()
    fetchComments()
  }, [videoData])
  // console.log('CHANNEL Comments', comments)
  return (
    <div className="basis-[94%] mx-auto md:mx-0 md:basis-[69%]">
      {/* <video src={video1} controls autoPlay muted className="w-[100%]"></video> */}
      <iframe
        className="w-full h-[50vw] md:h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={videoData?.snippet?.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3 className="text-[22px] font-semibold mt-[10px]">
        {videoData?.snippet?.title}
      </h3>
      <div className="flex justify-between items-center flex-wrap mt-[10px] text-sm text-[#5a5a5a]">
        <p>
          {valueConverter(videoData?.statistics.viewCount)} Views &bull;{' '}
          {moment(videoData?.snippet?.publishedAt).fromNow()}
        </p>
        <div className="flex gap-3">
          <span className="flex gap-2 items-center">
            <img src={like} alt="" className="w-5 h-5" />{' '}
            {valueConverter(videoData?.statistics?.likeCount)}
          </span>
          <span className="flex gap-2 items-center">
            <img src={dislike} alt="" className="w-5 h-5" />
          </span>
          <span className="flex gap-2 items-center">
            <img src={share} alt="" className="w-5 h-5" /> Share
          </span>
          <span className="flex gap-2 items-center">
            <img src={save} alt="" className="w-5 h-5" /> Save
          </span>
        </div>
      </div>
      <hr className="my-[10px]" />

      <div className="flex items-center mt-5">
        <img
          src={channelData?.snippet?.thumbnails?.default.url}
          alt=""
          className="w-[40px] mr-4 rounded-full"
        />
        <div className="flex-1 leading-[18px]">
          <p className="text-black font-bold text-lg">
            {videoData?.snippet?.channelTitle}
          </p>
          <span className="text-[13px]">
            {valueConverter(channelData?.statistics.subscriberCount)}{' '}
            Subscribers
          </span>
        </div>
        <button className="bg-red-700 text-white px-6 py-2 rounded-md">
          Subscribe
        </button>
      </div>
      <div className="ml-[55px] py-4">
        <div className="space-y-[5px] text-[#5a5a5a] text-sm">
          {videoData?.snippet?.description.slice(0, 250)}
        </div>

        <hr className="mt-4" />
        <h4 className="mt-4 text-[#5a5a5a] text-sm">
          {valueConverter(videoData?.statistics.commentCount)} Comments
        </h4>
        {/* Comments section */}
        {comments?.map((comment) => {
          return (
            <div className="flex my-5" key={comment.id}>
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
                className="w-[35px] h-[35px] mr-4 rounded-full"
              />
              <div>
                <h3 className="text-sm mb-[2px]">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="text-xs ml-2 text-[#5a5a5a] font-medium">
                    {moment(
                      comment.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="flex items-center my-2 gap-3 text-[#5a5a5a]">
                  <img src={like} alt="" className="rounded-none w-5 mr-1" />{' '}
                  <span className="mr-5">
                    {valueConverter(
                      comment.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" className="rounded-none w-5 mr-1" />{' '}
                  <span className="mr-5"></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PlayVideo
