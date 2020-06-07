package com.quiz.dtos;

import com.quiz.entities.Article;
import com.quiz.entities.Proposition;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import java.util.Arrays;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ArticleDtoTest {

    private static ModelMapper modelMapper;

    @BeforeAll
    private static void setUp(){
        modelMapper = new ModelMapper();
    }

    @Test
    public void convertDtoToArticle(){

        ArticleDto articleDto = ArticleDto.
                builder()
                .id(1l)
                .question("La capital de France")
                .answer("Paris")
                .propositions(Arrays.asList(new Proposition("Madrid"),new Proposition("London")))
                .build();

        Article article = convertDtoToArticle(articleDto);

        assertEquals(article.getPropositions(),articleDto.getPropositions());

    }

    private  Article convertDtoToArticle(ArticleDto articleDto){
        return modelMapper.map(articleDto,Article.class);
    }

    private  ArticleDto convertToArticleDto(Article article){
        return modelMapper.map(article,ArticleDto.class);
    }

}
