import React, { useMemo, useEffect } from "react";
import timg from '@/assets/images/timg.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { queryUserInfo } from '../store/features/baseSlice'
import useStore from "../zStore";
import {shallow} from "zustand/shallow";

const HomeHeader = (props) => {
  const navigate = useNavigate();
  // rtk
  // const userInfo = useSelector(state => state.base.info)
  // const dispatch = useDispatch()

  // zustand
  const [userInfo, queryUserInfo] = useStore(state => [state.base.info, state.queryUserInfo], shallow)
  /* 计算时间中的月和日 */
  let { today, info, queryUserInfoAsync } = props;
  let time = useMemo(() => {
    let [, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/),
        area = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    return {
      month: area[+month] + '月',
      day
    };
  }, [today]);

  // 第一次渲染完:如果info中没有信息,我们尝试派发一次,获取到登陆者信息
  useEffect(() => {
    if (!userInfo) {
      // dispatch(queryUserInfo());
      queryUserInfo()
    }
  }, [userInfo]);

  return <header className="home-head-box">
    <div className="info">
      <div className="time">
        <span>{time.day}</span>
        <span>{time.month}</span>
      </div>
      <h2 className="title">知乎日报</h2>
    </div>

    <div className="picture"
         onClick={() => {
           navigate('/personal');
         }}>
      <img src={userInfo ? userInfo.pic : timg} alt="" />
    </div>
  </header>;
};

export default HomeHeader