# GraphQL vs. Rest
It is not an easy decision to choose between GraphQL and Rest API. Rest API is mature and simple-to-use. Additinally there are tons of resources for Rest API development. However, there are two major drawbacks: 

1. It is not flexible because different clients want different data.

2. There is no good solution to document Rest API. 

GraphQL comes to rescue. The above drawbacks are its strength. However, GraphQL has different issues. 
1. The query data is not cachable. 

2. The added data access layer is more complex in both server side and client side.

3. It is relatively new without many resources and uses cases. 

The pros and cons of GraphQL make it hard for a tradeoff analysis. Nonetheless, we think it can be a good candidate for an e-commerce administration API for the following reasons:

1. The administration has many always-changing data requirements that needs a flexible and  maintianble API.

2. The performance is not a big concern because all users are internal users. 

Therefore, we use GraphQL for the backend administration API. Once we understand the key factors of both the problem and the candidate solutions, the decision becomes easy.  
