# 纸片

### 介绍

纸片组件，用于显示一些条目，并且支持关闭条目。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数         | 说明                                                                   | 类型      | 默认值    |
| ------------ | ---------------------------------------------------------------------- | --------- | --------- |
| `type`       | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_  | `default` |
| `size`       | 尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_  | `normal`  |
| `plain`      | 是否为空心样式                                                         | _boolean_ | `false`   |
| `round`      | 是否为圆角样式                                                         | _boolean_ | `true`    |
| `block`      | 是否为块级样式                                                         | _boolean_ | `false`   |
| `closeable`  | 是否为可关闭纸片                                                       | _boolean_ | `false`   |
| `close-name` | 自定义可关闭纸片的图标，必须在 `closeable` 为 `true` 的条件下才能用    | _string_  | `-`       |
| `color`      | 纸片颜色                                                               | _string_  | `_`       |
| `text-color` | 文本颜色，优先级高于 `color` 属性                                      | _string_  | `-`       |

### 插槽

| 名称      | 说明                 | 参数 |
| --------- | -------------------- | ---- |
| `default` | 纸片内容             | `-`  |
| `left`    | 插入至纸片左侧的内容 | `-`  |
| `right`   | 插入至纸片右侧的内容 | `-`  |

### 事件

| 事件名  | 说明                                                 | 回调参数       |
| ------- | ---------------------------------------------------- | -------------- |
| `close` | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                      | 默认值                 |
| --------------------------- | ---------------------- |
| `--chip-default-color`      | `#e0e0e0`              |
| `--chip-primary-color`      | `var(--color-primary)` |
| `--chip-danger-color`       | `var(--color-danger)`  |
| `--chip-success-color`      | `var(--color-success)` |
| `--chip-warning-color`      | `var(--color-warning)` |
| `--chip-info-color`         | `var(--color-info)`    |
| `--chip-border-radius`      | `2px`                  |
| `--chip-mini-height`        | `16px`                 |
| `--chip-small-height`       | `24px`                 |
| `--chip-normal-height`      | `32px`                 |
| `--chip-large-height`       | `40px`                 |
| `--chip-round-radius`       | `100px`                |
| `--chip-mini-padding`       | `0 4px`                |
| `--chip-small-padding`      | `0 6px`                |
| `--chip-normal-padding`     | `0 10px`               |
| `--chip-large-padding`      | `0 17px`               |
| `--chip-text-large-margin`  | `0 5px`                |
| `--chip-text-normal-margin` | `0 5px`                |
| `--chip-text-small-margin`  | `0 3px`                |
| `--chip-text-mini-margin`   | `0 2px`                |
| `--chip-mini-font-size`     | `var(--font-size-xs)`  |
| `--chip-small-font-size`    | `var(--font-size-sm)`  |
| `--chip-normal-font-size`   | `var(--font-size-md)`  |
| `--chip-large-font-size`    | `var(--font-size-lg)`  |
