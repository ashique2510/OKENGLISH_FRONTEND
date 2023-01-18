import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { getAllArticle } from '../../utils/ApiRoutes';
import { Cards, Category, ArticleNav } from '../../components';

const ArticleHome = () => {
  const [article, setArticle] = useState([]);
  const [like, setLike] = useState(false);

  const { search } = useLocation();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(`${getAllArticle}/${search}`);
      setArticle(response.data);
    };
    fetchArticle();
    console.log('like...', like);
  }, [search, like]);

  return (
    <div>
      <ArticleNav />
      {!search && <Category article={article} />}
      <Cards article={article} setLike={setLike} />
    </div>
  );
};

export default ArticleHome;
