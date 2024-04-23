package com.henrique.crudspring.controller;

import com.henrique.crudspring.model.Course;
import com.henrique.crudspring.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    //@Autowired -> if you used autoWired you cannot need to use a constructor
    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    //@GetMapping -> the same functionality of RequestMapping
    @RequestMapping(method = RequestMethod.GET)
    public List<Course> list() {
        return courseRepository.findAll();
    }
}
