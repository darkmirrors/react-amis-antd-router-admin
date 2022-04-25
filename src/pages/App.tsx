import { useRoutes } from 'react-router-dom'

import { routes } from '@core/routes'

function App() {
  const elements = useRoutes(routes)
  // console.log(elements)
  return elements
}

export default App
