import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Lista from '../Notas/components/Lista'
import Form from '../Notas/components/Form'

function App() {

  return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Lista</Link></li>
              <li><Link to="/form">Adicionar Nota</Link></li>
            </ul>
          </nav>
        </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/" element={<Lista />}/>
            <Route path="/form" element={<Form />}/>
          </Routes>
        </div>

      </BrowserRouter>
  )
}

export default App