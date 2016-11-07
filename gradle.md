#Gradle Best Practices

Use gradlew to avoid gradle version issues. 

Use task blocks for task configuration. For example, all Java compiling configurations such as `classpath`, `destinationDir`, `options`, `source`, `excludes`, `includes`, `sourceCompatibility`, `targetCompatibility`, and `toolChain` should be configured in `compileJava` block.    
