package com.henrique.crudspring;

import com.henrique.crudspring.model.Course;
import com.henrique.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean // This annotation allows Spring to manage the entire lifetime of the component
	CommandLineRunner initDatabase(CourseRepository courseRepository){ //CommandLR -> will be called as soon as the application starts
		return args -> {
			courseRepository.deleteAll();
			var c = new Course();
			c.setName("Angular with Spring");
			c.setCategory("Front-end");
			courseRepository.save(c);
		};
	}
}
