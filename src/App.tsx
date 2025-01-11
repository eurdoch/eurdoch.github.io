import { Outlet, Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="h-20 text-2xl w-screen bg-slate-100 p-8 flex gap-4 items-center">
        <div className="font-bold">
          <Link to="/">foomprep</Link>
        </div>
        <div className="ml-auto">
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/blog">blog</Link>
        </div>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default App
