# hexo-filter-rubys
Add some ruby character for your post body, just for fun

## install

``` shell
npm install hexo-filter-rubys
```

## usage

add config to your `<hexo-root>/_config.yml`

``` yaml
valkyr_auto_rubys:
  enable: true # switch to toggle this feature
  lexis:
    - 参数: Params
    - 版本: バージョン
    - 请求: リクエスト
    - 如果: もし
    - 安装: インストールする
    - 企业: Enterprise
    - 依赖: Dependency
    - 网络: Network
    - 端口: Duān kǒu
    - <target>: <ruby chars>
```
for example, `- 端口: Duān kǒu` will tell plugin to search occurances of word `端口` in all posts, and add ruby chars `Duān kǒu` above it, which looks like:

![d30b0a0b-91c0-b12d-0c98-cb547ef5a02c.png](http://images2.dzmtoast.top/blog-content/d30b0a0b-91c0-b12d-0c98-cb547ef5a02c.png)


Again, it just for fun, and have fun!