import React from "react";
import PropTypes from "prop-types";
import { NavBar } from 'antd-mobile';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const TNavBar = (props) => {
  let { title } = props;
  const navigate = useNavigate(),
      location = useLocation(),
      [usp] = useSearchParams();

  const handleBack = () => {
    // 特殊:登录页 & to的值是/deatil/xxx
    let to = usp.get('to');
    if (location.pathname === '/login' && /^\/detail\/\d+$/.test(to)) {
      navigate(to, { replace: true });
      return;
    }
    navigate(-1);
  };

  return <NavBar className="navbar-again-box"
                 onBack={handleBack}>
    {title}
  </NavBar>
};
TNavBar.defaultProps = {
  title: '个人中心'
};
TNavBar.propTypes = {
  title: PropTypes.string
};

export default TNavBar;