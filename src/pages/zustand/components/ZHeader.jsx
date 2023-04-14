import { memo } from 'react'
const ZHeader = (props) => {
  const { navigate } = props
  console.log('header render')
  return (
      <>
        <header style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '40px'
        }}>
          <div>学习 zustand</div>
          <div onClick={() => navigate({
            pathname: '/zustand/count'
          })}
          style={{
            background: 'green'
          }}
          >计数器案例</div>
          <div onClick={() => navigate({
            pathname: '/zustand/asyncCount'
          })}
               style={{
                 background: 'green'
               }}
          >异步计数器</div>
          <div onClick={() => navigate({
            pathname: '/zustand/nest'
          })}
               style={{
                 background: 'green'
               }}
          >嵌套处理(immer)</div>
        </header>
      </>

  )
}

export default memo(ZHeader)
