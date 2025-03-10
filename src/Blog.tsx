import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from './main';

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
        const res = await fetch(`${API_URL}/articles`);
        const data = await res.json();
        setArticles(data.sort((a: ArticleEntry, b: ArticleEntry) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="p-4">
      <div className="text-xl">
        I am a software engineer currently studying and doing independent research on machine intellignce.
      </div>
      <div className="text-xl">
        {articles.map(article => (
          <div key={article._id}>
            <Link to={`/blog/${article._id}`}>
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

