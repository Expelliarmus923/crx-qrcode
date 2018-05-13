# 简介

一个Chrome插件，将当前页面URL生成二维码，方便移动端扫码打开。和市场上其他Chrome插件不同的是做了一个优化，把二维码插入DOM里面，这样切换页面就不会被切换掉了。

# 使用

由于Chrome应用商店$8的入会费（qiong）的限制以及照顾没梯子的小伙伴，所以只放出压缩包。点击[这里](https://github.com/lzlu/crx-qrcode/blob/master/qrcode.zip)下载

# 开发

安装依赖

```shell
npm install
```

打包

```shell
npm run publish
```

开发

```shell
npm run dev
```