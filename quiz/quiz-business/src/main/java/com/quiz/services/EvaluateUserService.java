package com.quiz.services;

import com.quiz.entities.Article;
import com.quiz.entities.Preferences;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;

public class EvaluateUserService {

    private ArticleCrudService articleCrudService;

    private List<Article> articles;


    //cache on articles for game duration
    //to learn how to optimize DB communication
    public int evaluateUser(Map<Long,String> answers){

        return answers.keySet().stream().filter(id->articleCrudService.retrieveArticleById(id).equals(answers.get(id))).
                mapToInt(id->articleCrudService.retrieveArticleById(id).get().getWeight())
                .sum();

    }

    //bad implementation must use criteria api
    private List<Article> generateQuestions(Preferences preferences){
        Predicate<Article> articlePredicate= article -> preferences.getModes().contains(article.getMode()) && preferences.getCategories().contains(article.getCategory());
        return articleCrudService.findAllArticlesByPreferences(
                article -> preferences.getModes().contains(article.getMode()) && preferences.getCategories().contains(article.getCategory()));
    }
}


/*
{
        "data" :
        {
        "field1" : "value1",
        "field2" : "value2"
        }
}*/