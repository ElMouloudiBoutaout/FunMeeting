package com.quiz.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class Preferences {

    private List<Mode> modes;

    private List<Category> categories;

}
