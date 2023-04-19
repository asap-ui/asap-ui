# Sapce 间距

### 介绍

设置元素之间的间距

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数        | 说明                                                                                    | 类型                                                       | 默认值       |
| ----------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------ |
| `direction` | 布局方向 可选值为 `row` `column`                                                        | _string_                                                   | `row`        |
| `justify`   | 主轴排列方式 可选值为 `flex-start` `flex-end` `center` `space-around` `space-between`   | _string_                                                   | `flex-start` |
| `align`     | 交叉轴排列方式 可选值为 `stretch` `center` `flex-start` `flex-end` `baseline`           | _string_                                                   | `-`          |
| `size`      | 间距，可选值为 `mini` `small` `normal` `large` 或 `[垂直间距, 水平间距]` (支持长度单位) | _string \| number \| [string \| number, string \| number]_ | `normal`     |
| `wrap`      | 是否超出换行                                                                            | _boolean_                                                  | `true`       |
| `inline`    | 是否为行内元素                                                                          | _boolean_                                                  | `false`      |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                  | 默认值 |
| ----------------------- | ------ |
| `--space-size-mini-y`   | `4px`  |
| `--space-size-mini-x`   | `4px`  |
| `--space-size-small-y`  | `6px`  |
| `--space-size-small-x`  | `6px`  |
| `--space-size-normal-y` | `8px`  |
| `--space-size-normal-x` | `12px` |
| `--space-size-large-y`  | `12px` |
| `--space-size-large-x`  | `20px` |
