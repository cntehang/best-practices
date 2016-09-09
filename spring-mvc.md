# Spring MVC best practices

Keep business logic outside of Spring MVC `@Controller`. A controller is only used to create the HTTP views. Use `@Service` bean to collect all data for a view. 

Use `${(#mvc.url(...)).build()}` expression method to build links to annotated controllers directly from views. 
