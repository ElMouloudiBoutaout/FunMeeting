package com.quiz.entities;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.Instant;
import java.util.List;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor(access=AccessLevel.PRIVATE)
@Data
@Builder
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
@Entity
public class Article implements Serializable {

    @CreatedDate
    private Instant createdDate;

    @LastModifiedDate
    private Instant lastModifiedDate;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @NotNull
    private String answer;

    @NotBlank
    @NotNull
    private String question;

    //@Embedded
    @ElementCollection
    private List<Proposition> propositions;

}
