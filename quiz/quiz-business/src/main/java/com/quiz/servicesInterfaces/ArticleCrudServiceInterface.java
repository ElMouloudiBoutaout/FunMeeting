package com.quiz.servicesInterfaces;

import com.quiz.entities.Article;
import java.util.List;
import java.util.Optional;


public interface ArticleCrudServiceInterface {

    public Article createArticle(final Article article);

    public Article updateArticle(final Article article);

    public void removeArticle(final Article article);

    public List<Article> findAllArticles();

    public Optional<Article> retrieveArticleById(final Long id);

    public void removeArticleById(Long id);
}
