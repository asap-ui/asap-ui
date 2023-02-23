# 面包屑

### 介绍

按钮组件，用于触发操作。

<code src="./demo/index.tsx"></code>

## API

### 属性

#### Breadcrumbs Props

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| `separator` | 分隔符 | _string_ | `/`    |

#### Breadcrumb Props

| 参数        | 说明   | 类型     | 默认值 |
| ----------- | ------ | -------- | ------ |
| `separator` | 分隔符 | _string_ | `-`    |

### 事件

#### Breadcrumb Events

| 事件名  | 说明             | 参数           |
| ------- | ---------------- | -------------- |
| `click` | 点击面包屑时触发 | `event: Event` |

### 插槽

#### Breadcrumbs Slots

| 参数      | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 自定义默认内容 | `-`  |

#### Breadcrumb Slots

| 参数      | 说明           | 参数 |
| --------- | -------------- | ---- |
| `default` | 自定义默认内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Breadcrumb Variables

| 变量名                             | 默认值                 |
| ---------------------------------- | ---------------------- |
| `--breadcrumb-active-color`        | `var(--color-primary)` |
| `--breadcrumb-inactive-color`      | `#888`                 |
| `--breadcrumb-separator-margin`    | `0 10px`               |
| `--breadcrumb-separator-font-size` | `14px`                 |
