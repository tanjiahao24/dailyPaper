import ZHeader from "./components/ZHeader";
import useStore from "./store";
import { Outlet } from 'react-router-dom'
import {useMemo} from "react";

const Zustand = (props) => {
  const navigate = useMemo(() => props.navigate, [])
  return (
      <>
        <ZHeader navigate={navigate}></ZHeader>
        <div>
          <Outlet></Outlet>
        </div>
      </>

  )
}

export default Zustand