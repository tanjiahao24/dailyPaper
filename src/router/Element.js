import { useNavigate, useLocation, useParams, useSearchParams} from 'react-router-dom'

export default function Element (props) {
  let navigate = useNavigate(),
      location = useLocation(),
      params = useParams(),
      [usp] = useSearchParams(),
      { title='daily' } = props.meta,
      { component: Component } = props

  document.title = title

  return (
      <Component
        navigate={navigate}
        location={location}
        params={params}
        usp={usp}
      ></Component>
  )

}