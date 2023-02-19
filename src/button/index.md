# 按钮

### 介绍

按钮组件，用于触发操作。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数             | 说明                                                                   | 类型               | 默认值         |
| ---------------- | ---------------------------------------------------------------------- | ------------------ | -------------- |
| `type`           | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_           | `default`      |
| `native-type`    | 原生类型，可选值为 `button` `submit` `reset`                           | _string_           | `button`       |
| `size`           | 尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_           | `normal`       |
| `loading`        | 加载状态                                                               | _boolean_          | `false`        |
| `loading-radius` | loading 的半径，只作用于 `loading-type="circle"` 时                    | _string \| number_ | `-`            |
| `loading-type`   | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear`     | _string_           | `circle`       |
| `loading-size`   | loading 的尺寸，可选值为 `large` `normal` `small` `mini`               | _string_           | `normal`       |
| `loading-color`  | loading 的颜色                                                         | _string_           | `currentColor` |
| `auto-loading`   | 自动 loading 模式，方便处理异步任务                                    | _boolean_          | `false`        |
| `round`          | 是否是圆形按钮                                                         | _boolean_          | `false`        |
| `block`          | 是否是块级元素                                                         | _boolean_          | `false`        |
| `text`           | 是否是文字按钮                                                         | _boolean_          | `false`        |
| `outline`        | 是否使用外边框                                                         | _boolean_          | `false`        |
| `disabled`       | 禁用状态                                                               | _boolean_          | `false`        |
| `ripple`         | 是否使用水波纹                                                         | _boolean_          | `true`         |
| `text-color`     | 文字颜色                                                               | _string_           | `-`            |
| `color`          | 背景颜色                                                               | _string_           | `-`            |

### 事件

| 事件名       | 说明                                                                      | 参数           |
| ------------ | ------------------------------------------------------------------------- | -------------- |
| `click`      | 点击按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发         | `event: Event` |
| `touchstart` | 触摸手指压下按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                         | 默认值                       |
| ------------------------------ | ---------------------------- |
| `--button-default-color`       | `#f5f5f5`                    |
| `--button-primary-color`       | `var(--color-primary)`       |
| `--button-danger-color`        | `var(--color-danger)`        |
| `--button-success-color`       | `var(--color-success)`       |
| `--button-warning-color`       | `var(--color-warning)`       |
| `--button-info-color`          | `var(--color-info)`          |
| `--button-disabled-color`      | `var(--color-disabled)`      |
| `--button-disabled-text-color` | `var(--color-text-disabled)` |
| `--button-border-radius`       | `4px`                        |
| `--button-mini-padding`        | `0 9px`                      |
| `--button-small-padding`       | `0 11px`                     |
| `--button-normal-padding`      | `0 15px`                     |
| `--button-large-padding`       | `0 22px`                     |
| `--button-round-padding`       | `6px`                        |
| `--button-mini-height`         | `20px`                       |
| `--button-small-height`        | `28px`                       |
| `--button-normal-height`       | `36px`                       |
| `--button-large-height`        | `44px`                       |
| `--button-mini-font-size`      | `var(--font-size-xs)`        |
| `--button-small-font-size`     | `var(--font-size-sm)`        |
| `--button-normal-font-size`    | `var(--font-size-md)`        |
| `--button-large-font-size`     | `var(--font-size-lg)`        |
