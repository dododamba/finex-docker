package com.technomegapartners.finex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import com.technomegapartners.finex.config.FileStorageConfig;

import javax.annotation.PostConstruct;
import java.util.TimeZone;
 
/**
 * The main class 
 * 
 * @author DOMINIQUE DAMBA 
 * @version 1.0.0 
 * @since 2019 {@link http://bit.ly/dominic-linked-in }
 *
 */

@SpringBootApplication
@EntityScan(basePackageClasses = { FINEXApplication.class, Jsr310JpaConverters.class })
@EnableConfigurationProperties({ FileStorageConfig.class })
public class FINEXApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}

	public static void main(String[] args) {
		SpringApplication.run(FINEXApplication.class, args);
	}
}
