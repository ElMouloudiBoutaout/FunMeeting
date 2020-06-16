package com.quiz;

import com.quiz.entities.Article;
import com.quiz.entities.Category;
import com.quiz.entities.Mode;
import com.quiz.entities.Proposition;
import com.quiz.services.ArticleCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
//@ComponentScan("com.quiz")
//@EntityScan(basePackages = {"com.quiz"})
//@EnableEurekaClient
public class QuizControllerApplication implements CommandLineRunner{

	public static void main(String[] args) {

		SpringApplication.run(QuizControllerApplication.class, args);

	}


	@Autowired
	private ArticleCrudService articleCrudService;

	@Override
	public void run(String... args) throws Exception {

		Article article = Article.builder()
				.question("La capital de France est")
				.answer("Paris")
				.category(Category.CAPITALS)
				.mode(Mode.EASY)
				.propositions(Arrays.asList(new Proposition("Rabat"),new Proposition("Berlin"),new Proposition("Madrid")))
				.build();

		articleCrudService.createArticle(article);

	}
}
