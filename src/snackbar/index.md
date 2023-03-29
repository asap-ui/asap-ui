# Ripple 水波

### 介绍

使元素点击时生成一个水波扩散的效果。

<code src="./demo/index.tsx"></code>

## API

### 属性

| 参数               | 说明                                                      | 类型 | 默认值 |
|------------------|---------------------------------------------------------| -------- | ---------- |
| `v-model:show`   | 是否显示 `Snackbar`                                         | _boolean_ | `false` |
| `type`           | `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-` |
| `position`       | `Snackbar`  位置，可选值为 `top center bottom`                 | _string_ | `top` |
| `duration`       | 显示时长                                                    | _number_ | `3000` |
| `content`        | 自定义内容                                                   | _string_ | `-` |
| `content-class`  | 自定义内容的类名                                                | _string_ | `-` |
| `vertical`       | 是否启用竖直排列方式                                              | _boolean_ | `false` |
| `loading-type`   | Loading类型(见 `Loading` 组件)                               | _string_ | `circle`       |
| `loading-size`   | Loading大小(见 `Loading` 组件)                               | _string_ | `normal`       |
| `loading-color`  | loading颜色(见`_loading`组件)                                |_string_|`current_color`|
| `loading-radius` | Loading半径大小(见 `Loading` 组件)                             | _string \| number_  | `-` |
| `lock-scroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false` |
| `forbid-click`   | 是否禁止穿透点击                                                | _boolean_  | `false` |
| `teleport`       | 弹出层挂载的位置                                                | _TeleportProps['to']_  | `body` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `open` | 打开 `Snackbar` 时触发 | `-` |
| `opened` |  打开 `Snackbar` 动画结束时触发 | `-` |
| `close` | 关闭 `Snackbar` 时触发 | `-` |
| `closed` | 关闭 `Snackbar` 动画结束时触发 | `-` |

### 方法

实例上的 `clear` 方法可关闭当前实例，全局 `clear` 方法可关闭所有的消息条。

| 方法名 | 说明 | 参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| `Snackbar` | 显示消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.success` | 显示成功消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.info` | 显示普通消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.warning` | 显示警告消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.error` | 显示错误消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.loading` | 显示加载消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.clear` | 关闭消息条 | _-_ | `-` |
| `Snackbar.allowMultiple` | 是否允许多例模式 | _boolean_ | `-` |
| `Snackbar.setDefaultOptions` | 设置默认的选项配置 | _options_ | `-` |
| `Snackbar.resetDefaultOptions` | 重置默认的选项配置 | _-_ | `-` |

#### 函数式调用时传入的选项

| 参数              | 说明                                                      | 类型 | 默认值            |
|-----------------|---------------------------------------------------------| -------- |----------------|
| `type`          | `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-`            |
| `position`      | `Snackbar` 位置，可选值为 `top center bottom`                  | _string_ | `top`          |
| `duration`      | 显示时长(当 `type` 属性为 `loading` 时，需要手动关闭)                   | _number_ | `3000`         |
| `action `       | 右边动作区                                                   | _string \| ReactElement_ | `-`            |
| `content`       | 自定义内容                                                   | _ReactElement_ | `-`            |
| `contentClass`  | 自定义内容的类名                                                | _string_ | `-`            |
| `vertical`      | 是否启用竖直排列方式                                              | _boolean_ | `false`        |
| `loadingType`   | Loading类型(见 `Loading` 组件)                               | _string_ | `circle`       |
| `loadingSize`   | Loading大小(见 `Loading` 组件)                               | _string_ | `normal`       |
| `loadingColor`  | Loading颜色(见 `Loading` 组件)                               | _string_ | `currentColor` |
| `loadingRadius` | Loading半径大小(见 `Loading` 组件)                                 | _string \| number_  | `-` |
| `lockScroll`    | 是否禁止滚动穿透                                                | _boolean_  | `false`        |
| `forbidClick`   | 是否禁止穿透点击(当 `type` 属性为 `loading` 时，默认为 `true`)           | _boolean_  | `false`        |
| `onOpen`        | 打开 `Snackbar` 时触发                                       | _() => void_ | `-`            |
| `onOpened`      | 打开 `Snackbar` 动画结束时触发                                   | _() => void_ | `-`            |
| `onClose`       | 关闭 `Snackbar` 时触发                                       | _() => void_ | `-`            |
| `onClosed`      | 关闭 `Snackbar` 动画结束时触发                                   | _() => void_ | `-`            |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--snackbar-width` | `256px` |
| `--snackbar-color` | `rgba(255, 255, 255, .87)` |
| `--snackbar-border-radius` | `4px` |
| `--snackbar-background` | `#333` |
| `--snackbar-font-size` | `var(--font-size-md)` |
| `--snackbar-margin` | `6px 24px` |
| `--snackbar-border-color` | `currentColor` |
| `--snackbar-success-background` | `var(--color-success)` |
| `--snackbar-info-background` | `var(--color-info)` |
| `--snackbar-error-background` | `var(--color-danger)` |
| `--snackbar-warning-background` | `var(--color-warning)` |
| `--snackbar-content-padding` | `14px 16px` |
| `--snackbar-action-margin` | `0 16px 0 0` |