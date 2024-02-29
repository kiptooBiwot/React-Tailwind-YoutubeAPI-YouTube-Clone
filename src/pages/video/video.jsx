import PlayVideo from '../../components/PlayVideo'
import Recommended from '../../components/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const { videoId, categoryId } = useParams()
  return (
    <div className="bg-[#f9f9f9] px-[5%] md:px-[2%] py-5 flex justify-between flex-wrap">
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}
export default Video
