# Micro-service best practice

## Two types of communication channles 
We have two types of ISC in our systems: event bus (EB) and RPC.  The general guideline is that EB is used for inter-service communication. RPC is used for UI-originated interactions. 

If event is used, the processing result is not immediately available but eventully the domain processing result is required. There are two methods to handle the results: one is by query the result, the other one only needs human intervention in abnormal cases because the event publisher doesn't know how to handle the errors. In both methods, the results are handled asychronously with a possibly long latency. 

## Domain transaction and message consistency
We have many services that perform a transaction and publish an event. To keep the domain transaction and event consistent, we need to put them in a single transaction. To achieve this, we define an event table in the same database and use out-of-band service to publish the event. After an event is published successfully, the corresponding event store item is deleted.

This implementation may put duplicated events into the EB, thus all subscribers should be able to handle redundant events. Ideally, all operations are idempotent. 

## Autonomous Service
A service should work independently as much as possible, i.e., in-band RPC should be avoid as much as possible. 

A consequence is that domain events should be self-contained for the subscriber to do its work. 

