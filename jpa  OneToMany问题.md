# @OneToMany问题

product and sku 是一对多关系，在product domain中会定义如下：
@OneToMany(targetEntity = Sku.class, mappedBy = "product", cascade = CascadeType.ALL)  
private List<Sku> skus = new ArrayList<Sku>();

这时候如果你在其它domain中（如同步表synchronize）也包含了product对象，如：  
@OneToOne(targetEntity = Product.class)  
@JoinColumn(name = "product_id")  
private Product product;

这时候当你去查询synchronize表中内容的时候，查询出来的product中对应的skus会提示：
com.sun.jdi.InvocationException occurred invoking method

原因如下：  
Hibernate documentation says:  
In the normal case the orders association would be lazy loaded by Hibernate


# solve it
在product domain，和sku的对应关系增加fetch = FetchType.EAGER，如下：
@OneToMany(targetEntity = Sku.class, mappedBy = "product", cascade = CascadeType.ALL,
      fetch = FetchType.EAGER)  
private List<Sku> skus = new ArrayList<Sku>();
