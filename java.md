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


[awesome-java]: https://github.com/akullpp/awesome-java
[datetime]: http://www.nurkiewicz.com/2016/08/guide-to-time-and-date-in-java.html
[practices]: http://www.javapractices.com/home/HomeAction.do
