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
    <div className="mx-auto w-1/2">
      {article && (
        <div>
          <br />
          <div className="text-3xl font-bold">{article.title}</div>
          <div>{article.subtitle}</div>
          <br />
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Article;

