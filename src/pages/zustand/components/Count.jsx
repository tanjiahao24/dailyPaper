import useStore from "../store";
function Count () {
  const [count, deC, inC] = useStore(state => [state.count, state.decCount, state.incCount])
  return (
      <>
        <div>{count}</div>
        <div>
          <button onClick={deC} style={{padding: '0 3px', marginRight: '10px'}}>-</button>
          <button onClick={inC} style={{padding: '0 3px'}}>+</button>
        </div>
      </>

  )
}

export default Count