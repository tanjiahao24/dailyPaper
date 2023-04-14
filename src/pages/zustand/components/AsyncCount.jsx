import useStore from "../store";

function AsyncCount() {
  const [count, asyncInc, asyncDec] = useStore(state => [state.count, state.timeIncCount, state.timeDecCount])
  return (
      <>
        <div>{count}</div>
        <div>
          <button onClick={asyncDec}>-</button>
          <button onClick={asyncInc}>+</button>
        </div>
      </>
  )
}

export default AsyncCount