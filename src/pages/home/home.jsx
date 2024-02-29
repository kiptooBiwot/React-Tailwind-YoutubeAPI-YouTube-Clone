import { useState } from 'react'
import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0)
  return (
    <>
      <div>
        <div>
          <Sidebar
            sidebar={sidebar}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div
          className={`${
            sidebar ? 'px-[5%] md:pl-[17%]' : 'pl-10%'
          } bg-gray-50 px-[5%] md:pr-[2%] py-5`}
        >
          <Feed category={category} />
        </div>
      </div>
    </>
  )
}
export default Home
