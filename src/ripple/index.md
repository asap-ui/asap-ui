# Ripple 水波

### 介绍

使元素点击时生成一个水波扩散的效果。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数       | 说明         | 类型      | 默认值         |
| ---------- | ------------ | --------- | -------------- |
| `color`    | 水波纹的颜色 | _string_  | `currentColor` |
| `disabled` | 禁用状态     | _boolean_ | `false`        |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制.

| 变量名                  | 默认值                                |
| ----------------------- | ------------------------------------- |
| `--ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` |
| `--ripple-color`        | `currentColor`                        |
