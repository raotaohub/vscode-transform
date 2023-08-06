# Transform Json

一款用于转换 `json` 数据到 `TypeScript interface` 的插件。

## 功能

### `1.json 转换 ts`

- 场景描述：复制请求响应中的 json，快速生成 `ts interface`。
- 使用人群: 任何需要写 ts interface 的人群可用。

### `2.json schema 转换 ts`

- 场景描述：使用 yapi、swagger、apipost 等 API 文档生成工具，复制其生成的`json schema`。
- 使用人群: 如果你所在的团队使用了自动生成 API 文档的工具，不用怀疑，它会生成`json schema`,一般会在文档上提供，或者从`F12 network` 中寻找一下。

### 什么是 json schema

> 什么是 json schema ? 它就是 json，只是用了更多的属性值来全面的描述接口。

#### 例如：

```json
/** jsons chema对象**/
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object", // 对象
  "properties": {
    // 对象中有一个属性 msg
    "msg": {
      "type": "string", // msg 的类型
      "description": "消息" // 注释或是描述
    }
  },
  "required": ["msg"] // 必需的
}

/** 普通 json**/
{
    "msg":""
}
```

## 如何使用

1. 复制需要转换的 `json` 数据到 vscode 中并选中。
2. 右键选择`Transform Json` 在 2 级菜单中选择需要转换的类型即可。

> ![Kapture](./assets/Snipaste.png)

## 演示

![Kapture](./assets/Kapture.gif)
