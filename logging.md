# Logging Best Practices

## Logging Requirment
There are some well-known logging requirements:

1. No side effect, i.e., doesn't change the production code behavior. 
2. Simple to use. Not much more difficult thant `printf()`. 
3. No performance issues. Very little performance impact when disabled, a little impact when enabled. 

## AOP or not AOP
Using AOP conflicts with the first two items of our requirement. It decorates a method call and introduces the complexity of AOP syntax. Giving the importance of logging, the explict logging statement in code gives programmer fine control and clear intention. 


