
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className="text-xl">
        <div className="font-bold">ML</div>
        <div className="indent-8"><Link to="/posts/an_article">An Article</Link></div>
<div className="indent-8"><Link to="/posts/another_article">Another Article</Link></div>
      </div> 
    </div>
  )
}

export default Blog
