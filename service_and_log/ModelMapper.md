##1. 使用
使用Maven引入ModelMapper
```xml
<dependency>
  <groupId>org.modelmapper</groupId>
  <artifactId>modelmapper</artifactId>
  <version>0.7.6</version>
</dependency>
```
或者使用gradle引入
```groovy
compile 'org.modelmapper:modelmapper:0.7.6'
```
ModelMapper的使用非常简单，可以参照官网的[例子](http://modelmapper.org/getting-started/)
##2. 与gRPC结合
由于gRPC的message生成的代码都是使用Builder模式来设值的，所以在使用ModelMapper的来转换数据的时候，不能直接对message生成的类来转换，而是需要对Builder类，如下：

###Protobuf
```protobuf 
/**
 * message of product feature.
 */
message GrpcFeature {
  int64 id = 1;
  string name = 2;
  string description = 3;
  int32 displayOrder = 4;
}
```
###Java Source Code
```java
/**
 * Entity Class
 */
public class Feature {
  private long id;
  private String featureName;
  private String description;
  private int displayOrder;
  private Date createTime;
  private Date lastModifiedTime;
  
  /**
   * setter and getter
   */
｝
```
###Mapper
```java
Feature feature = new Feature();
feature.setId(1L);
feature.setFeatureName("name");
feature.setDescription("description");
feature.setDisplayOrder(1);
ModelMapper modelMapper = new ModelMapper();
GrpcFeature.Builder builder = modelMapper.map(feature, GrpcFeature.Builder.class);
GrpcFeature grpcFeature = builder.build();

assertEquals(grpcFeature.getId(), feature.getId()); //true
assertEquals(grpcFeature.getName, feature.getFeatureName()); //true
assertEquals(grpcFeature.getDisplayOrder, feature.getDisplayOrder); //true
assertEquals(grpcFeature.getDescription(), feature.getDescription()); //true
```

##3. 问题
###3.1 gRPC不支持设置空值
```java
Feature feature = new Feature();
feature.setId(1L);
//feature.setFeatureName("name");
feature.setDescription("description");
feature.setDisplayOrder(1);
ModelMapper modelMapper = new ModelMapper();
GrpcFeature.Builder builder = modelMapper.map(feature, GrpcFeature.Builder.class);
GrpcFeature grpcFeature = builder.build();
```
把其中一行设置name的代码注释掉，运行之后会抛出异常：
```java
Caused by: java.lang.NullPointerException
	at io.reactivesw.catelog.infrastructure.GrpcFeature$Builder.setName(GrpcFeature.java:548)
```
原因是gRPC生成的代码做了非空判断，如果是空就会抛出异常:
```java
public Builder setName(java.lang.String value) {
  if (value == null) {
    throw new NullPointerException();
  }
  
  name_ = value;
  onChanged();
  return this;
}
```
解决方法：
对于所有的field，都需要填充数据。

#欢迎补充