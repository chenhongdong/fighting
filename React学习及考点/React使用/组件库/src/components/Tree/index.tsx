import React, { Component } from "react";
import { TreeData } from "../../typings";
import './index.less'
import TreeNode from './components/TreeNode'
import { getChildren } from '../../api'


interface Props {
    data: TreeData
}

interface State {   // 组件的状态，用来限定this.state
    data: TreeData
}


interface KeyNodeMap {
    // 属性名是随意的
    [key: string]: TreeData
}


// Component<Props>，泛型将props的变量规范挂载到组件上
class Tree extends Component<Props, State> {
    keyNodeMap: KeyNodeMap
    constructor(props: Props) {
        super(props)
        this.state = { data: props.data }   // 把属性传递给状态
    }

    componentDidMount() {
        this.buildKeyMap()    // 创建一个keyMap映射key值
    }

    buildKeyMap = () => {
        const data = this.state.data
        this.keyNodeMap = {}
        // key就是节点的key，值就是节点本身
        this.keyNodeMap[data.key] = data

        if (data.children && data.children.length) {
            this.walk(data.children, data)
        }
        this.setState({ data: this.state.data })
    }


    walk = (children: TreeData[], parent: TreeData) => {
        children.forEach((item: TreeData) => {
            item.parent = parent    // 在节点上增加一个parent属性，指向自己的父亲
            this.keyNodeMap[item.key] = item
            if (item.children && item.children.length) {
                this.walk(item.children, item)
            }
        })
    }

    toggle = async (key: string) => {
        const data = this.keyNodeMap[key]
        if (data) {
            const { children } = data
            if (children) {
                data.collapsed = !data.collapsed
                data.children = data.children || []    // 后面会改成懒加载
                this.setState({ data: this.state.data })
                
            } else {    // 如果没有children属性，则说明儿子未加载，需要加载

                // 先把loading展示出来
                data.loading = true
                // 调用setState更新视图
                this.setState({ data: this.state.data })

                // 模拟请求后台数据
                data.children = await getChildren(data)
                data.collapsed = false
                data.loading = false
                this.buildKeyMap()  // 重新编译一下加入新请求回来拿到的key
                this.setState({ data: this.state.data })
            }
        }
    }

    onCheck = (key: string) => {
        const data = this.keyNodeMap[key]
        if (data) {
            data.checked = !data.checked
            if (data.checked) {
                // 如果新的状态为true，就让所有儿子都选中
                this.checkChildrens(data.children, true)

                // 如果节点的儿子都选中了，父亲也被选中
                this.checkParent(data.parent)
            } else {
                // 让所有的下级节点取消选中
                this.checkChildrens(data.children, false)
                // 
                this.checkParent(data.parent)
            }
            this.setState({ data: this.state.data })
        }
    }
    // 选中所有的儿子
    checkChildrens = (children: TreeData[] = [], checked: boolean) => {
        children.forEach((item: TreeData) => {
            item.checked = checked
            this.checkChildrens(item.children, checked)
        })
    }

    checkParent = (parent: TreeData) => {
        while (parent) {
            parent.checked = parent.children.every((item: TreeData) => item.checked)
            parent = parent.parent
        }
    }

    render() {
        return (
            <div className="tree">
                <div className="tree-nodes">
                    <TreeNode
                        data={this.props.data}
                        toggle={this.toggle}
                        onCheck={this.onCheck}
                    />
                </div>
            </div>
        )
    }
}

export default Tree