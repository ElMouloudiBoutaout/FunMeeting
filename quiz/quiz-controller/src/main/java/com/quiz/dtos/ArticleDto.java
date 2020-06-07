package com.quiz.dtos;


import com.quiz.entities.Article;
import com.quiz.entities.Proposition;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import java.io.Serializable;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ArticleDto implements Serializable {

    private Long id;

    private String answer;

    private String question;

    private List<Proposition> propositions;

}
