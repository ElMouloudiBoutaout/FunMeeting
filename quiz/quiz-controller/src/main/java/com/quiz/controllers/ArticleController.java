package com.quiz.controllers;

import com.quiz.dtos.ArticleDto;
import com.quiz.entities.Article;
import com.quiz.services.ArticleCrudService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/articles")
public class ArticleController {

    Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ArticleCrudService articleCrudService;

   @GetMapping
    public List<ArticleDto> retrieveAllArticles(){

       return articleCrudService.findAllArticles()
              .stream().map(article -> this.convertToArticleDto(article)).collect(Collectors.toList());
    }


    @PostMapping
    public ResponseEntity addArticle(@Valid @RequestBody ArticleDto articleDto){
       Article article = this.convertDtoToArticle(articleDto);
       articleCrudService.createArticle(article);
       return new ResponseEntity<ArticleDto>(convertToArticleDto(article),HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity retrieveArticleById(@PathVariable Long id){
        logger.debug("retrieve Article with the Id");
        Optional<Article> article = articleCrudService.retrieveArticleById(id);
        if(!article.isPresent())
            return new ResponseEntity("There is no article with the Id : ".concat(id.toString()),(HttpStatus.NO_CONTENT));
        logger.info("retrieve Article with the Id : {0} ",id.toString());
        return new ResponseEntity(this.convertToArticleDto(article.get()),HttpStatus.OK);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable(value = "id") Long id) {
        articleCrudService.removeArticleById(id);
        return ResponseEntity.ok().build();
    }


    @PutMapping
    public ResponseEntity updateArticle(@Valid @RequestBody ArticleDto articleDto) {
       articleCrudService.updateArticle(convertDtoToArticle(articleDto));
       return new ResponseEntity(articleDto,HttpStatus.OK);
    }


 private  Article convertDtoToArticle(ArticleDto articleDto){
      return modelMapper.map(articleDto,Article.class);
 }

 private  ArticleDto convertToArticleDto(Article article){
        return modelMapper.map(article,ArticleDto.class);
 }

}


