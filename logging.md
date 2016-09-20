# Logging Best Practices

## Logging Requirment
There are some well-known logging requirements:

1. No side effect, i.e., doesn't change the production code behavior. 
2. Simple to use. Not much more difficult thant `printf()`. 
3. No performance issues. Very little performance impact when disabled, a little impact when enabled. 

## Logging Levels
Understand logging levels is key to use it. Below are general guidelines for different levels:

`ERROR` means a fatal error that an application cannot continue, for example, a NULL parameter. It should be fixed ASAP.

`WARNING` means a serious bug though an application can continue. For example, a customer id is not in the database. It should be investigated and fixed in a short period.

`INFO` means a significant event. For example, a new customer registration, whether successful or failed for some reason.

`DEBUG` is used for debugging. It gives a full execution path and context.

`TRACE` is used for detail message such as a big data object or an array. It is not used often.

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



