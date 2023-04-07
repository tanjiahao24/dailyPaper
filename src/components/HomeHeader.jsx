import { memo } from 'react'
import image from '@/assets/images/timg.jpg'

function HomeHeader(props) {

  let { today } = props
  let [,month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/),
      area = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];


  return (
      <header className="home-header-box">
        <div className="info">
          <div className="time">
            <span>{day}</span>
            <span>{area[+month] + '月'}</span>
          </div>
          <h1>Daily</h1>
        </div>
        <div className="avatar">
          <img src={image} alt={""}></img>
        </div>
      </header>
  )
}

export default memo(HomeHeader)
