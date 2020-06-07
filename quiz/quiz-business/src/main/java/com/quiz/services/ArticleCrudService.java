package com.quiz.services;

import com.quiz.entities.Article;
import com.quiz.exceptions.ArticleNotFoundException;
import com.quiz.repositories.ArticleRepository;
import com.quiz.servicesInterfaces.ArticleCrudServiceInterface;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ArticleCrudService implements ArticleCrudServiceInterface {

    @Autowired
    private ArticleRepository articleRepository;

    private final static  String msg = "There is no article with the Id : ";

    @NonNull
    public Article createArticle(Article article){
        Objects.requireNonNull(article);
        return articleRepository.save(article);
    }

    @NonNull
    public Article updateArticle(Article article){
        Objects.requireNonNull(article);
        Optional<Article> articleTmp = articleRepository.findById(article.getId());
        if(!articleTmp.isPresent()){
            throw new ArticleNotFoundException(msg.concat(article.getId().toString()));
        }else
           return articleRepository.save(article);
    }

    @NonNull
    public void removeArticle(Article article){
        Objects.requireNonNull(article);
        Optional<Article> articleTmp = articleRepository.findById(article.getId());
        if(!articleTmp.isPresent()){
            throw new ArticleNotFoundException(msg.concat(article.getId().toString()));
        }else{
            articleRepository.delete(articleTmp.get());}
    }

    public void removeArticleById(Long id){

        Objects.requireNonNull(id);
        Optional<Article> articleTmp = articleRepository.findById(id);
        if(!articleTmp.isPresent()){
            throw new ArticleNotFoundException(msg.concat(id.toString()));
        }else{
            articleRepository.delete(articleTmp.get());}
    }

    public List<Article> findAllArticles(){
           return articleRepository.findAll();
    }

    @Override
    public Optional<Article> retrieveArticleById(Long id) {
        Objects.requireNonNull(id);
        return articleRepository.findById(id);
    }

}
