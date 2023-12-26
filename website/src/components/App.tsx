import Root from 'routes/root'
import AllContextProvider from 'context'

function App() {
  return (
    <AllContextProvider>
      <Root />
    </AllContextProvider>
  )
}

export default App
