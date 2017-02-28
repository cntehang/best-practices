# Spring JPA Best Practices

The `@Column(name="..")`
is completely ignored unless 
`spring.jpa.hibernate.naming_strategy=org.hibernate.cfg.EJB3NamingStrategy` is specified. 