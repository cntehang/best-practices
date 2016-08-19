# best_practices

We collect and maintain a list of best practices of different technology used in our project. Currently our technology stack is as the following: 

## 0. Server Programming Language: Java 8.0
Choosing Java for its eco system.

## 1. Cloud Platform: Kubernetes
We use Kubernetes(k8s) as our cloud platform. It provides service runtime, secuirty, environment variable, configuration and service discovery and high availablity.

It provides high availablilty by cluster DNS.  ConfigMap and Secrets that can be used to store environment variables.

## 2. Application Loggin: Spring Cloud Sleuth
Spring Cloud Sleuth implements a distributed tracing solution. The https://cloud.spring.io/spring-cloud-sleuth/ has more information.

## 3. Event System: Spring Cloud Stream with Kafka
Most inter-service communication and system integration can use an event middleware as their communication channel to build a loosely-couple distributed system. Spring Cloud Stream (https://cloud.spring.io/spring-cloud-stream/) can use Kafka as its underlying communication channel to provide the functions of an event middleware.

## 4. Fast Microservice Communication: gRPC
We use gRPC (http://www.grpc.io/) for its speed and proven history. In some cases, inter-service communication speed is a crucial factor for microservices.

## 5. Data Repository: Spring Data JPA
It is an easy choice to use Spring Data JPA (http://projects.spring.io/spring-data-jpa/) for its rich functions and proven history.

## 6. Security and Session Management:  Spring Security and Spring Session
Spring security is the choice for the web server authentication and authorization.
Spring Session supports both HttpSessiion and WebSocket. It works well with cloud by using Redis storage.

## 7. Build tool: Gradle 3.0

## 8. Testing tool: Spock (Groovy-based)
