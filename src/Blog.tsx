
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className="text-xl">
        <div className="font-bold">ML</div>
                <div className="indent-8"><Link to="/posts/AnArticle.tsx">AnArticle.tsx</Link></div>
        <div className="indent-8"><Link to="/posts/AnotherArticle.tsx">AnotherArticle.tsx</Link></div>
      </div> 
    </div>
  )
}

export default Blog
