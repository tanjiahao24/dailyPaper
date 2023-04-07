import {useState} from "react";
import HomeHeader from "../components/HomeHeader";
import _ from '../assets/js/utils'

const Home = () => {
  let [today, setToday] = useState(_.formatTime(null, "{0}{1}{2}"))
  return (
      <div className="home-box">
        <HomeHeader today={today} />
      </div>
  )
}

export default Home
