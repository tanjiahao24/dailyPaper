import React, {useState, useEffect} from "react";
import {useNavigate, useLocation, useParams, useSearchParams} from 'react-router-dom';
import {Mask, DotLoading, Toast} from 'antd-mobile';
import {useSelector, useDispatch} from 'react-redux'
import {queryUserInfo} from '../store/features/baseSlice'

/* 统一路由配置 */
const isCheckLogin = (path) => {
  let checkList = ['/personal', '/store', '/update'];
  return checkList.includes(path);
};
const Element = function Element(props) {
  const info = useSelector(state => state.base.info)
  const dispatch = useDispatch()
  let {component: Component, meta, path} = props;
  let isShow = !(!info && isCheckLogin(path));
  const [query, setQuery] = useState(false)


  // 修改页面的TITLE
  let {title = "Daily-WebApp"} = meta || {};
  document.title = title;

  // 获取路由信息,基于属性传递给组件
  const navigate = useNavigate(),
      location = useLocation(),
      params = useParams(),
      [usp] = useSearchParams();

  // 登录态校验
  useEffect(() => {
    if (isShow) return;
    if (!query) {
      dispatch(queryUserInfo());
      setQuery(true)
      return
    }

    if (!info) {
      // 如果获取后还是不存在:没有登录
      Toast.show({
        icon: 'fail',
        content: '请先登录'
      });
      // 跳转到登录页
      navigate({
        pathname: '/login',
        search: `?to=${path}`
      }, {replace: true});
    }
  });

  return <>
    {isShow ?
        <Component navigate={navigate}
                   location={location}
                   params={params}
                   usp={usp}/> :
        <Mask visible={true}>
          <DotLoading color="white"/>
        </Mask>
    }
  </>;
};

export default Element