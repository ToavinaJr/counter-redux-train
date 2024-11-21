
import './App.css'
import Test from './components/Test'
import Counter from './features/count/Counter'

function App() {
  return (
    <div
      style={{display: 'flex', flexDirection: 'column', gap: "10px", }}
    >
      <Counter />
      <Test />
    </div>
  )
}

export default App
