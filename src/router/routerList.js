import { Route } from 'react-router-dom'
import Element from "./Element";
import React from "react";

// 可以递归创建路由
export default function RouterList({routes}) {
  return (
      <React.Fragment>
        {
          routes.map((item, index) => {
            let {path, name, children} = item
            return (
                <Route path={path} key={name} element={ <Element {...item}/> }>
                  {
                      Array.isArray(children) ? RouterList({routes: children}) : null
                  }
                </Route>
            )
          })
        }
      </React.Fragment>
  )
}