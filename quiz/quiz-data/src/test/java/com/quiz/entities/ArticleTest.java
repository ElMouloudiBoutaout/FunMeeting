package com.quiz.entities;

import org.junit.BeforeClass;
import org.junit.Test;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;


public class ArticleTest {

    public static Validator validator;

    @BeforeClass
    public static void setUpValidator() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }


    @Test
    public void questionNotNull(){
        Article article = new Article();


    }



}
