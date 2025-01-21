import { Outlet, Link } from 'react-router-dom';
import './App.css'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

function App() {
  return (
    <div className="h-screen w-screen text-gray-600">
      <div className="h-20 text-2xl w-screen bg-slate-100 p-8 flex gap-4 items-center justify-center">
        <div className="font-bold">
          <Link to="/" className="hover:text-black">foomprep</Link>
        </div>
        {/*<div className="ml-auto">*/}
        {/*  <Link to="/about" className="hover:text-black">about</Link>*/}
        {/*</div>*/}
        {/*<div>
          <Link to="/blog" className="hover:text-black">blog</Link>
        </div>*/}

        <div className="ml-auto" />
        <SocialIcon icon={faXTwitter} href="https://x.com/foomprep" size='sm' hoverColor='black' />
        <SocialIcon icon={faGithub} href="https://github.com/foomprep" size='sm' hoverColor='black' />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default App

