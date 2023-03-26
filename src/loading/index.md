# Loading 加载

### 介绍

加载组件，用于数据加载时执行动画。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数          | 说明                                                               | 类型                     | 默认值   |
| ------------- | ------------------------------------------------------------------ | ------------------------ | -------- |
| `color`       | loading 的颜色                                                     | _string_                 | `-`      |
| `type`        | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_                 | `circle` |
| `size`        | loading 的大小，可选值为 `large` `normal` `small` `mini`           | _string_                 | `normal` |
| `description` | loading 的描述文字                                                 | _string \| ReactElement_ | `-`      |
| `content`     | loading 包裹的内容                                                 | _string \| ReactElement_ | `-`      |
| `loading`     | 存在内容时 loading 是否显示                                        | _boolean_                | `false`  |
| `radius`      | loading 的类型为 circle 时，可设置其半径大小                       | _string \| number_       | `-`      |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制.

| 变量名                  | 默认值    |
| ----------------------- | --------- |
| `--loading-opacity`     | `0.38`    |
| `--loading-desc-margin` | `8px 0 0` |
