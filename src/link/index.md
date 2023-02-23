# 链接

### 介绍

链接组件，用于页面跳转。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数         | 说明                                                                   | 类型               | 默认值    |
| ------------ | ---------------------------------------------------------------------- | ------------------ | --------- |
| `type`       | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_           | `default` |
| `underline`  | 下划线状态，可选值为 `always` `hover` `none`                           | _string_           | `always`  |
| `disabled`   | 禁用状态                                                               | _boolean_          | `false`   |
| `text-color` | 文字颜色                                                               | _string_           | `-`       |
| `text-size`  | 文字尺寸                                                               | _string \| number_ | `-`       |
| `href`       | 原生 `href` 属性，优先级高于 `to`                                      | _string_           | `-`       |
| `target`     | 原生 `target` 属性                                                     | _string_           | `-`       |
| `to`         | `router-link` `to` 属性，将会渲染为 `<router-link />`                  | _string \| object_ | `-`       |
| `replace`    | `router-link` `replace` 属性                                           | _boolean_          | `false`   |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击链接时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 链接内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                  | 默认值                       |
| ----------------------- | ---------------------------- |
| `--link-primary-color`  | `var(--color-primary)`       |
| `--link-danger-color`   | `var(--color-danger)`        |
| `--link-success-color`  | `var(--color-success)`       |
| `--link-warning-color`  | `var(--color-warning)`       |
| `--link-info-color`     | `var(--color-info)`          |
| `--link-disabled-color` | `var(--color-text-disabled)` |
| `--link-font-size`      | `var(--font-size-md)`        |
