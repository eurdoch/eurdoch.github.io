import Markdown from 'markdown-to-jsx';
import './App.css'

const s = '# Foom prep\n\nprepare for the end!';

function App() {
  return (
    <div>
      <Markdown>
        {s}
      </Markdown>
    </div>
  )
}

export default App
