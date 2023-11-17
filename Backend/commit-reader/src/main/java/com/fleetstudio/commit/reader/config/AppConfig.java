package com.fleetstudio.commit.reader.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
    @Bean("gitHubRestTemplate")
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
