# Spring Framework Best Practices

## Spring MVC

Keep business logic outside of Spring MVC `@Controller`. A controller is only used to create the HTTP views. Use `@Service` bean to collect all data for a view. 
