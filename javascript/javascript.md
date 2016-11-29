# JavaScript Best Practices
All tips and guidelines to write good JavaScript code. 

## 1. Basic Opertions

### 1.1. Check Empty/null/undefined String
just use `if (theString)` to test if it's empty, null or undefined.  

### 1.2. False Values 

Argument type | Result
------------- | ------
Undefined | false 
Null | false
Number | false for +0, -0, or NaN
String | false empty string (length is zero)
Object | alwasy true

### 1.3. Strong Equals Operator `===`

Type(x) | Values | Result
------- | ------ | ------
Type(x) different from Type(y) | | false
`undefined` or `null` | same values | true
Number | same values | true
String | identical characters | true
Object | same reference | true
otherwise | | false

`undefined` === `null` returns `false`. However, `undefined` == `null` returns `true`. 

 