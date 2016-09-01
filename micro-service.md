# Micro-service best practice

## Two types of inter-service communication (ISC) 
We have two types of ISC in our systems: one is domain event and the other is rpc. Most RPC are queries. For write operation, RPC is only used in highly-responsive scenarios such as user login. In those highly-responsive scenarios, the client needs a result ASAP. For most ISC, domain event is the prefered message. For example, order creation event is published by either a Web Server on behalf of a user or an integration service that retrieves data from a third-party channel. 

If event is used as an ISC method, the processing result is not immediately available but eventully the domain processing result is required. There are two methods to handle the results: one is by query the result, the other one only needs human intervention in abnormal cases because the event publisher doesn't know how to handle the errors. In both methods, the results are handled asychronously with a possibly long latency. 

## Domain transaction and message consistency
We have many services that perform a transaction and publish an event. To keep the domain transaction and event consistent, we need to put them in a single transaction. To achieve this, we define an event store table in the same database and use out-of-band service to publish the event. After an event is published successfully, the corresponding event store item is deleted.

## Autonomous Service
A service should work independently as much as possible, i.e., in-band RPC should be avoid as much as possible. 

A consequence is that domain events should be self-contained for the subscriber to do its work. 

