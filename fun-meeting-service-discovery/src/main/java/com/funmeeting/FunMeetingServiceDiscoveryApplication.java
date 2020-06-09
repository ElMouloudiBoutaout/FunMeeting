package com.funmeeting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class FunMeetingServiceDiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FunMeetingServiceDiscoveryApplication.class, args);
	}

}
