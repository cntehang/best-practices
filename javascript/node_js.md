# Node.js Best Practices

## 1. Use `node-reinstall` to install Node.js
There are sooo many times that I have to install and uninstall Node.js for different reasons. It is really painful and error-prone to do it manually.  It is highly recommended to use https://github.com/YingLiu4203/node-reinstall.git (cloned from the excellent https://github.com/brock/node-reinstall/) to reinstall NVM and Node.js. The script will uninstall existing Node.js or NVM if necessary. 

To use it, first make sure that it's ok to remove the following folders/files in your system:
```sh
rm -rf ~/local
rm -rf ~/lib
rm -rf ~/include
rm -rf ~/node*
rm -rf ~/npm
rm -rf ~/.npm*
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/share/man/man1/node.1
sudo rm -rf /usr/local/lib/dtrace/node.d
```

Then there are only two simple steps to reinstall NVM: 
```sh
https://github.com/YingLiu4203/node-reinstall.git
bash node-reinstall/node-reinstall  
```




