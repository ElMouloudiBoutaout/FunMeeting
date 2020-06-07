package com.quiz.exceptions;

import com.quiz.entities.Article;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ArticleNotFoundException extends RuntimeException {

    Logger logger = LoggerFactory.getLogger(ArticleNotFoundException.class);

    public ArticleNotFoundException(String errorMessage){
        super(errorMessage);
    }

}
