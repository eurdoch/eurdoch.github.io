import { Outlet, Link } from 'react-router-dom';
import './App.css'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

function App() {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-1/2 text-gray-600">
        <div className="h-20 text-2xl w-full p-8 flex gap-4 items-center justify-center">
          <div className="font-bold">
            <Link to="/" className="hover:text-black">eurdoch</Link>
          </div>

          <div className="ml-auto" />
          <SocialIcon icon={faXTwitter} href="https://x.com/eurdoch" size='sm' hoverColor='black' />
          <SocialIcon icon={faGithub} href="https://github.com/eurdoch" size='sm' hoverColor='black' />
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App

