
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ArticleEntry {
  _id: string;
  title: string;
  createdAt: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<ArticleEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://blog.directto.link/articles');
        const data = await res.json();
        setArticles(data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="text-xl">
        {articles.map(article => (
          <div key={article._id} className="indent-8">
            <Link to={`/posts/${article._id}`}>
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

