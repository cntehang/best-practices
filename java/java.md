# Java Best Practices

## Basic Object

### hashCode() and equals()
All domain class should implement hashCode() and equals(). 

The hashCode() and equals() use all fields. The equals() comparison should be a deep comparison that calls equals() method of each member (make sure member class implement it correctly).  

### clone() and copy constructor
See "avoid clone" section in [Java Practices][practices]. Use copy constructor for mutable classes. No need to define copy constructor for immutable classes. 

## Time and Money
Java 8 brings new date and time funtions to the language. Datetime should use `java.time.Instant` , zoned datetime uses `ZonedDateTime`, local datetime use `LocalDate` and `LocalTime`. Datetime should be persistented using UTC timezone(always). [Guide to time and date in Java][datetime] has a good introduction. 

## Resources

[Awesome Java][awesome-java] is a curated list of awesome Java frameworks, libraries and software. 


## Exception Handling

### Catch Exception 
When use other lib/framework, only catch the exception that you can handle. For example, you may want to retry sending data for network error exception. For exceptions that you cannot handle, don't catch them -- let the UI or outer callers to handle them. 

### Throw Exception
When developing a library/framework, throw two types of exceptions: one for standard programming errors such as null parameter, wrong type etc. For this type, using the standard exception. Another type is business-related, for example, the password is too short or too simple, you throw a domain-specific exception such as InvalidPasswordException. 

For a typical microservice, you should define a base exception type that inherites `RuntimeException` class. We purposely use this as our parent exception class because it is a **unchecked** exceptio.  
For each domain-related exception, define a new type -- thinking an exception type as a new  error code. Don't use exception message to distinguish different domain exceptions. The UI application should depend on exception type, not the error message, to show an end user appropraite messages.  

### Document Exception
All public methods should document the domain-specific expection that they throw, including the exception types and their business semantics. 

Inter-service API should include detail documents about the errors/exception types and meanings. 

[awesome-java]: https://github.com/akullpp/awesome-java
[datetime]: http://www.nurkiewicz.com/2016/08/guide-to-time-and-date-in-java.html
[practices]: http://www.javapractices.com/home/HomeAction.do
