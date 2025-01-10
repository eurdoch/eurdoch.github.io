import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Article {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`https://blog.directto.link/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    };
    fetchArticle();
  }, [id]);

  return (
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default Article;

