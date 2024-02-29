import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
// import automobiles from '../assets/sports.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({ sidebar, category, setCategory }) => {
  const items = [
    { id: 0, icon: home, title: 'Home', url: '' },
    { id: 20, icon: game_icon, title: 'Gaming', url: '' },
    { id: 2, icon: automobiles, title: 'Automobiles', url: '' },
    { id: 17, icon: sports, title: 'Sports', url: '' },
    { id: 24, icon: entertainment, title: 'Entertainment', url: '' },
    { id: 28, icon: tech, title: 'Technology', url: '' },
    { id: 10, icon: music, title: 'Music', url: '' },
    { id: 22, icon: blogs, title: 'Blogs', url: '' },
    { id: 25, icon: news, title: 'News', url: '' },
    // { icon: home, title: 'Home', url: '' },
  ]

  const subscribed = [
    { image: jack, channelName: 'Jack & the Beanstalk' },
    { image: simon, channelName: 'Simon the Templar' },
    { image: tom, channelName: 'Tom & Jerry' },
    { image: megan, channelName: 'Megan Foxx' },
    { image: cameron, channelName: 'The PM Cameron' },
  ]
  return (
    <div
      className={`${
        sidebar ? '' : 'w-[5%]'
      } fixed left-0 h-screen w-[15%] bg-white pl-[2%] pt-[80px] top-0 border-r transform duration-500 ease-in-out overflow-y-scroll hidden md:block`}
    >
      {items.map((item) => {
        return (
          <div key={item.title} className="flex flex-col">
            <div
              onClick={() => setCategory(item.id)}
              className={` flex gap-2 mb-5 w-fit flex-wrap cursor-pointer hover:bg-red-100`}
            >
              <img
                src={item.icon}
                alt=""
                className={`${
                  category === item.id
                    ? 'pb-0.5 border-b-[3px] border-red-600'
                    : ''
                } w-5 h-5 shrink-0`}
              />
              <p className={`${sidebar ? 'block' : 'hidden'} font-normal`}>
                {item.title}
              </p>
            </div>
          </div>
        )
      })}
      <hr className="my-3" />
      <div>
        <h3
          className={`${
            sidebar ? 'block' : 'hidden'
          } m-5 text-[13px] text-[#5a5a5a]`}
        >
          Subscribed
        </h3>
        {subscribed.map((account) => {
          return (
            <div key={account.channelName} className="flex flex-col mb-2">
              <div className="flex gap-2 items-center">
                <img
                  src={account.image}
                  alt=""
                  className="w-[25px] rounded-full"
                />
                <p className={`${sidebar ? 'block' : 'hidden'} text-[14px]`}>
                  {account.channelName}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Sidebar
