# Java Best Practices

## Basic Object

### hashCode() and equals()
All domain class should implement hashCode() and equals(). There are two types of classes in a business domain: entity class and value class. Entity class is mutable and has an id. Value class is immutable and doesn't has an id. 

The hashCode() and equals() use all fields. The equals() comparison should be a deep comparison that calls equals() method of each member (make sure member class implement it correctly).  


## Resources

[Awesome Java][awesome-java] is a curated list of awesome Java frameworks, libraries and software. 

[awesome-java]: https://github.com/akullpp/awesome-java
