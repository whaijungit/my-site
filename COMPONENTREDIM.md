# COMP文档

## 头像组件

结构实现：使用HTML结构中img元素来实现、

需求分析：

1. 图片资源没有信息动态数据、
2. 元素在页面的展示尺寸没有信息动态数据
   1. VueJS符合模块化开发、支持组件化开发、
   2. 使用Vue`compoents`属性来完成组件开发
   3. 使用Vue的响应式数据来完成不同组件需要的数据响应式

- 来个代码试试看
VueJS参考文档：[样式绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)、[局部组件注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)
、[数据校验](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)

```vue
<div>
<!-- 放置一个元素 -->
<img :src="url" :style="{
    width: size + 'px',
    height: size + 'px'
}">
</div>
<!-- 约束一下使用者需要注意那些细节 -->
<script >
export default {
    props: { // 组件描述 类型为数组、对象
        url: { // 自定义属性
            type: String, // 自定义属性 描述这个数据是什么类型
            required: true, // 描述这个数据必须传递给使用组件的模块，不然会有警告 miss required url
        },
        size: { // 由于是头像所以宽高可以统一
            type: Number,
            required: true,
        },  
    },
};
</script>
<!--  -->

```

## 分页组件

结构实现：div + a元素

需求分析：

1. 规定组件属性基本信息
   1. current当前页码
   2. total总数据
   3. 每页显示多少条
   4. 可见多少数据页码

技术实现：vue指令 v-if根据ajax请求返回数据进行对比以后看总数据是否大于1大于则渲染这个Vnode节点、数据为零没必要渲染，提升页面性能

为什么使用v-if指令呢，是这样的v-if它会删除dom节点、数据变化波动比较大的时候使用不太符合v-if使用、这里数据请求回来一般是不会变动的、所以可以增加性能优化

v-show：使用与分页组件中数据频繁变化的时候应当使用v-show这个方案、不对dom节点进行移出操作、不会导致页面重排



