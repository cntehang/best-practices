# Spring JPA Best Practices

## Entity Definition
The `@Column(name="column_name")`
is completely ignored unless 
`spring.jpa.hibernate.naming_strategy=org.hibernate.cfg.EJB3NamingStrategy` is specified. 

Don't add `@Column` if a field has no customization. It is persistented by default. 

## Database Initialization
The correct strategy for database initialization should be `create-only`: initialize tables if they don't exist. However, the Spring builtin version of Hibernate ORM doesn't support this feature. Perform the following steps to enable this feature: 

First, use the latest Hibernate.  in `build.gradle`, add the following dependencies: 

```groovy
// spring data jpa using hibernate 5.2
compile('org.springframework.boot:spring-boot-starter-data-jpa') {
  exclude module: 'org.hibernate.hibernate-entitymanager'
}
// use the latest release
// copied from https://github.com/spring-projects/spring-boot/blob/v1.5.1.RELEASE/spring-boot-dependencies/pom.xml
compile('org.hibernate:hibernate-core:5.2.8.Final') {
    exclude module: 'xml-apis:xml-apis'
    exclude module: 'javax.enterprise:cdi-api'
}
```

Second, set the application property `jap.hibernate.ddl-auto` to `create-only`. 