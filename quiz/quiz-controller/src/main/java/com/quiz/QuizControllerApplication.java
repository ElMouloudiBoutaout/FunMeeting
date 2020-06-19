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


import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

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

		Map<Integer, Object> mapA = Map.of(1,"a",2,"b",3,"c");

		Map<Integer, Object> mapB = Map.of(5,"a",6,"d",7,"c");

		mapA.keySet().stream().collect(Collectors.toMap((x->mapA.get(x)),x->x)).keySet().forEach(System.out::println);

	}
}
