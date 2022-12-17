
// 接口是用来 定义一个变量的类型，定义对象的属性名和属性值
export interface TreeData {
    name: string
    key: string
    type: string
    collapsed: boolean
    children?: TreeData[]   // ?:表示可选属性
    parent?: TreeData
    checked?: boolean       // 是否选中
    loading?: boolean
}