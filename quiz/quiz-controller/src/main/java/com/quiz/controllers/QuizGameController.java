package com.quiz.controllers;

import com.quiz.dtos.ArticleDto;
import com.quiz.entities.Article;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@Controller
public class QuizGameController {

    @PostMapping
    public ResponseEntity startQuizGame(){
        return null;
    }


}
