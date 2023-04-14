import useNestStore from "../store/nestStore";

function Nest() {
  const data = useNestStore(state => state['class'])
  const changeSale = useNestStore(state => state['changeSale'])
  return (
      <>
        {
          data.map(item => {
            return <div key={item.name} onClick={changeSale.bind(null, item.name)}>
              {item.name}--{ '' + item.isSale}
            </div>
          })
        }
      </>
  )
}

export default Nest
