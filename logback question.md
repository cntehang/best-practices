# Logback question

In spring boot, it include logback jar.
So when you don't include logback-classic and slf4j in build.gradle file,
when you start spring boot, It appears Springboot autoconfigures itself to use Logback with Tomcat, but tomcat don't use logback, it use common-logging.
The error message below.

Exception in thread "main" java.lang.IllegalArgumentException: LoggerFactory is not a Logback LoggerContext but Logback is on the classpath. Either remove Logback or the competing implementation (class org.slf4j.impl.Log4jLoggerFactory loaded from file:/Users/hans/.gradle/caches/modules-2/files-2.1/org.slf4j/slf4j-log4j12/1.6.1/bd245d6746cdd4e6203e976e21d597a46f115802/slf4j-log4j12-1.6.1.jar). If you are using WebLogic you will need to add 'org.slf4j' to prefer-application-packages in WEB-INF/weblogic.xml Object of class [org.slf4j.impl.Log4jLoggerFactory] must be an instance of class ch.qos.logback.classic.LoggerContext
	at org.springframework.util.Assert.isInstanceOf(Assert.java:346)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.getLoggerContext(LogbackLoggingSystem.java:221)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.getLogger(LogbackLoggingSystem.java:213)
	at org.springframework.boot.logging.logback.LogbackLoggingSystem.beforeInitialize(LogbackLoggingSystem.java:98)
	at org.springframework.boot.logging.LoggingApplicationListener.onApplicationStartedEvent(LoggingApplicationListener.java:215)
	at org.springframework.boot.logging.LoggingApplicationListener.onApplicationEvent(LoggingApplicationListener.java:197)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:166)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:138)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:121)
	at org.springframework.boot.context.event.EventPublishingRunListener.publishEvent(EventPublishingRunListener.java:111)
	at org.springframework.boot.context.event.EventPublishingRunListener.started(EventPublishingRunListener.java:60)
	at org.springframework.boot.SpringApplicationRunListeners.started(SpringApplicationRunListeners.java:48)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:303)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1191)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1180)
	at io.reactivesw.integration.amazon.product.IntegraionStarter.main(IntegraionStarter.java:20)

# solve it
  include slf4j and logback in build.gradle:  
  compile("org.slf4j:slf4j-api:1.7.21")  
  compile("ch.qos.logback:logback-classic:1.1.7")
