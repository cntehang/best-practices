##一. Status Code
### 1. CANCELLED
调用者取消操作
### 2. UNKNOWN
未知地址，API
### 3. INVALID_ARGUMENT
无效的请求？
### 4. DEADLINE_EXCEEDED
超过最后期限？
### 5. NOT_FOUND
没有找到请求的资源
### 6. ALREADY_EXISTS
提交的资源已存在
### 7. PERMISSION_DENIED
没有权限进行操作
### 8. RESOURCE_EXHAUSTED
资源不足
### 9. FAILED_PRECONDITION
失败预警？
### 10. ABORTED
操作中止
### 11. OUT_OF_RANGE
超出范围
### 12. UNIMPLEMENTED
未实现
### 13. INTERNAL
内部错误
### 14. UNAVAILABLE
服务不可用
### 15. DATA_LOSS
数据丢失或损坏
### 16. UNAUTHENTICATED
调用者没有有效认证 

**ps:具体请参照io.grpc.Status的注释，英语渣难免错漏！！！**

-------------------

## 二. 可供复用的code
### 1. NOT_FOUND
复用场景：
* 请求的资源不存在，例如通过id查找某个资源，发现该id不存在，则可以使用该code

### 2. ALREADY_EXISTS
复用场景：
* 提交的资源已存在，例如要新建一个产品，与现有产品重复，则可以使用该ceod

### 3. OUT_OF_RANGE
复用场景：
* 分页偏移量超出可以使用该code(也可以返回空内容，毕竟超出了)

### 4. RESOURCE_EXHAUSTED
复用场景：
* 图片服务器存储空间不足

### 5. INTERNAL
复用场景：
* 服务器的未知错误

-------------------

## 三. 异常使用方式
gRPC提供了两种异常，分别是StatusException和StatusRuntimeException，主要区别在于StatusException继承自Exception，而StatusRuntimeException继承自RuntimeException。
**请使用StatusRuntimeException**
_ps：实际上我测试了StatusException，对编译的代码侵入很厉害，而且也没有成功。_
### 1. Server端抛出异常
```JAVA
//定义一个code为INVALID_ARGUMENT的Status，并且把description设置为test description
Status status = Status.INVALID_ARGUMENT.withDescription("test description");
//抛出该异常
throw new StatusRuntimeException(status);
```

### 2. Client端捕获异常
```JAVA
//1. 直接捕获StatusRuntimeException
catch (StatusRuntimeException e){
  Status status = e.getStatus();
}

//2. 捕获Exception
catch(Exception e){
  Status status = Status.fromThrowable(e);
}
```
# 欢迎补充