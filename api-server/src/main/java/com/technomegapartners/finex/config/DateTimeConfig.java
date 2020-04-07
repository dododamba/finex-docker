/**
 * 
 */
package com.technomegapartners.finex.config;

import java.time.format.DateTimeFormatter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.format.support.FormattingConversionService;

/**
 * @author dominique
 *
 */
@Configuration

public class DateTimeConfig {
	 @Bean
	    public FormattingConversionService conversionService() {
	        DefaultFormattingConversionService conversionService = 
	          new DefaultFormattingConversionService(false);
	 
	        DateTimeFormatterRegistrar registrar = new DateTimeFormatterRegistrar();
	        registrar.setDateFormatter(DateTimeFormatter.ofPattern("dd.MM.yyyy"));
	        registrar.setDateTimeFormatter(DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss"));
	        registrar.registerFormatters(conversionService);
	 
	        // other desired formatters
	 
	        return conversionService;
	    }
}
