package com.project.project_backend.config;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.servlet.mvc.method.RequestMappingInfoHandlerMapping;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.spring.web.plugins.WebFluxRequestHandlerProvider;
import springfox.documentation.spring.web.plugins.WebMvcRequestHandlerProvider;

import java.lang.reflect.Field;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Configuration
public class SwaggerConfig {

    @Bean
    public Docket api() {
        // 自动生成文档：http://localhost:8080/v3/api-docs

        // API接口文档界面：http://localhost:8080/swagger-ui/index.html
        return new Docket(DocumentationType.SWAGGER_2)

                .apiInfo(apiInfo())

                .select()

                .apis(RequestHandlerSelectors.basePackage("com.project.project_backend.controller"))

                .paths(PathSelectors.regex("/article/*.*|/api/v1/*.*|/*.*"))

                .build();

    }



    private ApiInfo apiInfo() {

        return new ApiInfo(

                "AMS系统API",

                "后台管理系统相关的接口",

                "v1",

                "协议地址",

                new Contact("cy", "https://github.com/", "@163.com"),

                "MIT License", "http://opensource.org/licenses/MIT",

                Collections.emptyList());

    }

    /**
     * 解决swagger在springboot2.7以后的空指针异常
     */

    @Bean

    public static BeanPostProcessor springfoxHandlerProviderBeanPostProcessor() {

        return new BeanPostProcessor() {

            @Override

            public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {

                if (bean instanceof WebMvcRequestHandlerProvider || bean instanceof WebFluxRequestHandlerProvider) {

                    customizeSpringfoxHandlerMappings(getHandlerMappings(bean));

                }

                return bean;

            }



            private <T extends RequestMappingInfoHandlerMapping> void customizeSpringfoxHandlerMappings(List<T> mappings) {

                List<T> copy = mappings.stream()

                        .filter(mapping -> mapping.getPatternParser() == null)

                        .collect(Collectors.toList());

                mappings.clear();

                mappings.addAll(copy);

            }



            @SuppressWarnings("unchecked")

            private List<RequestMappingInfoHandlerMapping> getHandlerMappings(Object bean) {

                try {

                    Field field = ReflectionUtils.findField(bean.getClass(), "handlerMappings");

                    field.setAccessible(true);

                    return (List<RequestMappingInfoHandlerMapping>) field.get(bean);

                } catch (IllegalArgumentException | IllegalAccessException e) {

                    throw new IllegalStateException(e);

                }

            }

        };

    }

}