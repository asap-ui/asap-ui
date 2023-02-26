# 头像

### 介绍

头像组件

<code src="./demo/index.tsx"></code>

## API

### 属性

#### Avatar Props

| 参数           | 说明                                                            | 类型               | 默认值   |
| -------------- | --------------------------------------------------------------- | ------------------ | -------- |
| `round`        | 头像是否为圆形                                                  | _boolean_          | `true`   |
| `size`         | 头像的尺寸，可选值为 `mini small normal large`                  | _string \| number_ | `normal` |
| `color`        | 头像的背景颜色                                                  | _string_           | `-`      |
| `src`          | 头像的地址                                                      | _string_           | `-`      |
| `fit`          | 头像图片的填充模式，可选值 `fill contain cover none scale-down` | _string_           | `cover`  |
| `bordered`     | 头像是否带边框                                                  | _boolean_          | `false`  |
| `border-color` | 头像边框颜色                                                    | _string_           | `-`      |
| `loading`      | 当开启懒加载时, 加载中显示的图片                                | _string_           | `-`      |
| `error`        | 当开启懒加载时, 加载失败显示的图片                              | _string_           | `-`      |
| `lazy`         | 是否开启懒加载                                                  | _boolean_          | `false`  |

#### AvatarGroup Props

| 参数       | 说明                 | 类型               | 默认值  |
| ---------- | -------------------- | ------------------ | ------- |
| `offset`   | 头像组内的头像偏移量 | _number \| string_ | `-`     |
| `vertical` | 组内头像是否垂直排列 | _boolean_          | `false` |

### 事件

#### Avatar Events

| 事件名  | 说明                                                                                       | 参数           |
| ------- | ------------------------------------------------------------------------------------------ | -------------- |
| `click` | 点击头像时触发                                                                             | `event: Event` |
| `load`  | 头像图片成功加载时触发(懒加载模式下失败时会多次尝试加载头像图片，只会在成功加载时触发)     | `event: Event` |
| `error` | 头像图片失败加载时触发(懒加载模式下失败时会多次尝试加载头像图片，只会在尝试次数结束时触发) | `event: Event` |

### 插槽

#### Avatar Slots

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 头像内容 | `-`  |

#### AvatarGroup Slots

| 名称      | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | 头像组内容 | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Avatar Variables

| 变量名                      | 默认值           |
| --------------------------- | ---------------- |
| `--avatar-text-color`       | `#f5f5f5`        |
| `--avatar-border-radius`    | `4px`            |
| `--avatar-mini-size`        | `28px`           |
| `--avatar-small-size`       | `36px`           |
| `--avatar-normal-size`      | `48px`           |
| `--avatar-large-size`       | `64px`           |
| `--avatar-border`           | `2px solid #fff` |
| `--avatar-background-color` | `#bebebe`        |

#### AvatarGroup Variables

| 变量名                  | 默认值  |
| ----------------------- | ------- |
| `--avatar-group-offset` | `-10px` |
