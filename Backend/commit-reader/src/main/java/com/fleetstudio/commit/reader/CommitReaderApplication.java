package com.fleetstudio.commit.reader;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@PropertySource(value = {"classpath:external_api.properties"})
public class CommitReaderApplication {

	public static void main(String[] args) {
		SpringApplication.run(CommitReaderApplication.class, args);
	}

}
