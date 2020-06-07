package com.quiz.exceptionHandler;

import com.quiz.exceptions.ArticleNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@RestControllerAdvice
public class CustomExceptionHandler  extends ResponseEntityExceptionHandler {

    Logger logger = LoggerFactory.getLogger(CustomExceptionHandler.class);

    @ExceptionHandler({ ArticleNotFoundException.class})
    public final ResponseEntity handleArticleNotFoundException(final ArticleNotFoundException ex) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        logger.error(ex.getMessage());
        return new ResponseEntity(ex.getMessage(),status);
    }
}