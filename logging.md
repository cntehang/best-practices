# Logging Best Practices

## Logging Requirment
There are some well-known logging requirements:

1. No side effect, i.e., doesn't change the production code behavior. 
2. Simple to use. Not much more difficult thant `printf()`. 
3. No performance issues. Very little performance impact when disabled, a little impact when enabled. 

## AOP or not AOP
Using AOP conflicts with the first two items of our requirement. It decorates a method call and introduces the complexity of AOP syntax. Giving the importance of logging, the explict logging statement in code gives programmer fine control and clear intention. 

## logback
* In gradle configuration file, add:  
```xml
dependencies {
   compile("org.slf4j:slf4j-api:1.7.21")
   compile("ch.qos.logback:logback-classic:1.1.7")
}
```
In classpath add logback.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <Pattern>%d{HH:mm:ss.SSS} %-5level %logger{80} - %msg%n</Pattern>
    </encoder>
  </appender>
  <appender name="FILE"
  class="ch.qos.logback.core.rolling.RollingFileAppender">
          <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
               <FileNamePattern>logpath</FileNamePattern>
               <MaxHistory>30</MaxHistory>
          </rollingPolicy>
          <encoder>
               <pattern>%date [%thread] %-5level %logger{80} - %msg%n</pattern>
         </encoder>
       </appender>
  <root>
    <level value="INFO" />
    <!--  <appender-ref ref="FILE" />-->
    <appender-ref ref="STDOUT" /> 
  </root>
</configuration>
```
* For a web application you only need spring-boot-starter-web since it depends transitively on the logging starter。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <include resource="org/springframework/boot/logging/logback/base.xml"/>
    <logger name="org.springframework.web" level="DEBUG"/>
</configuration>
```



