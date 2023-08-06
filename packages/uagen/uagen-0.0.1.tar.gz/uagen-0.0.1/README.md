简单 UA 生成器
====

## 须知：  

<ul>  
    <li>    <h5>根据版本规则生成很多很多个不同的 ua （我也没数过，总之很多）</h5></li>  
    <li>    <h5>有 chrome 和 firefox 和 opera 的</h5></li>  
    <li>    <h5>有些可能没有用</h5></li>  
    <li>    <h5>可以在代码中 import，也可以在终端测试</h5></li>  
    <li>    <h5>UA用不了别怪我</h5></li>  
</ul>  

## 安装：  

```
# 注意是 uagen, 不是 uagent, 那是另外一个老兄的
$ pip3 install uagen
```

## 代码导入：

```
import uagen

random_user_agent = uagen.random_ua()       # 随机 ua
firefox_user_agent = uagen.firefox_ua()     # firefox ua
chrome_user_agent = uagen.chrome_ua()       # chrome ua
opera_user_agent = uagen.opera_ua()         # opera ua

```

## 终端：

```
# 生成一个 ua，在终端打印出来
$ uagen [-m --mode random/firefox/chrome/opera]
```