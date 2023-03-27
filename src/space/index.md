# Sapce 间距

### 介绍

设置元素之间的间距

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数        | 说明                                                                             | 类型                                    | 默认值       |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| `direction` | 间距方向 `vertical` `horizontal`                                                 | `string`                                | `horizontal` |
| `size`      | 间距大小，如`10px` `1rem`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | `string` `number` `string[]` `number[]` | `8px`        |
| `align`     | 设置子元素的对齐方式                                                             | `start` `end` `center` `baseline`       | `center`     |
| `wrap`      | 是否自动换行，仅适用于水平方向排列                                               | `boolean`                               | `false`      |
| `fill`      | 是否让 Space 变为一个块级元素，填充整个父元素                                    | `boolean`                               | `false`      |

### 插槽

| 插槽名    | 说明         | 参数 |
| --------- | ------------ | ---- |
| `default` | 间距组件内容 | `-`  |
