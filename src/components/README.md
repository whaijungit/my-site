# 组件文档说明文件

> components下所有组件说明


## Aavatar

### 效果展示

![](C:\Users\whaij\Desktop\code\vue\site\src\components\README.assets\2021-4-5.png)


> 图像组件：宽高一致、因为展示图像是圆图 
> 详细说明：结构`HTML：IMG` 元素、`class：avatar-container`

### 属性

| 属性名 | 含义 | 类型 | 必填 | 默认值|
|------|------|------|------|------|
| url | 图像资源地址      | String | 必填 | 无 |
| size | 图像尺寸宽高相等  | Number | 可选 | 80 |



## Icon

### 效果展示

![](C:\Users\whaij\Desktop\code\vue\site\src\components\README.assets\2021-4-5-icon.png)

> 字体图表组件：颜色字体大小继承上一个元素 `HTML: i`、`class:iconfont-container`
>
> iconfont：[数据来源](https://www.iconfont.cn/)

### 属性

| 属性名 | 含义 | 类型 | 必填 | 默认值|
|------|------|------|------|------|
| type | 图标的类型 | String | yes | 无 |

## Pager

### 效果展示

![](C:\Users\whaij\Desktop\code\vue\site\src\components\README.assets\2021-4-5-pager.png)

> 分页组件组成：**Icon组件 + HTML a元素** 、`class：pager-container`

### 属性

| 属性名 | 含义 | 类型 | 必填 | 默认值|
|------|------|------|------|------|
| current | 当前显示页码 | Number | yes | 1 |
| limit | 每页展示多少条数据 | Number | yes | 10 |
| totla | 总数据量 | Number | yes | 0 |
| visibleNumber | 页码显示多少 | Number | yes | 10 |

### 事件

| 事件名 | 含义 | 事件参数 | 参数类型 |
|--------|--------|--------|--------|
| pageChange | 页码改变 | 新的页码 | number |

## Empty

> 没有数据展示组件

### 效果展示

![](C:\Users\whaij\Desktop\code\vue\site\src\components\README.assets\2021-4-5empty.png)


### 属性

| 属性名 | 含义 | 类型 | 必填 | 默认值|
|------|------|------|------|------|
| msg | 空数据组件 | String | yes | 无数据 |

## imageLoader



> 组件元素结构：`IMG`元素 两个一个占位图、一个原始图
>
> 渐进式图片加载

### 效果展示

![](C:\Users\whaij\Desktop\code\vue\site\src\components\README.assets\2021-4-5imageLoader.gif)

### 属性

| 属性名      | 含义                                           | 类型   | 必填 | 默认值 |
| ----------- | ---------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片地址                                   | string | yes  | 无     |
| palceholder | 原图加载可能要等一年很慢、占位图片先显示、展示位图很小 | string | yes  | 无     |
| duration    | 原图加载完成多久呈现出现、过度动画             | number | no   | 1000    |

### 事件

| 事件名 | 含义                                | 事件参数 | 参数类型 |
| ------ | ----------------------------------- | -------- | -------- |
| load   | imageloader组件尘埃落地了触发该事件 | 无       | 无       |

## SiteAside

### Contact

### Menu

