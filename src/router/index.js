import routes from './routes'
import React, {Suspense} from "react";
import { Routes} from "react-router-dom";
import RouterList from "./routerList";

export default function RouterView() {
  return (
      <Suspense fallback={<>加载中。。。</>}>
        <Routes>
          {
            RouterList({routes})
          }
        </Routes>
      </Suspense>
  )
}

