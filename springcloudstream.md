# Spring Cloud Stream Best Practices

## Properties

### headerMode and contentType
Spring cloud stream set `headerMode=embeddedHeaders` as default.  
If it is necessary you can change it to `headerMode=raw`.  
`embeddedHeaders` is recommended. With this mode you can easily explain message with header.

Please set the contentType correctly. Or your polled messages will be garbled and you cannot explain it as you expected.
