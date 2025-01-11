import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { API_URL } from "./main";

interface Article {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
}

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`${API_URL}/articles/${id}`);
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
          <h2>{article.subtitle}</h2>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default Article;

