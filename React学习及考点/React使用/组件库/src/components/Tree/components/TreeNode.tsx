import React, { Component } from "react";
import { TreeData } from '../../../typings'
import fileIcon from '../../../assets/imgs/file-fill.png'
import closeFolderIcon from '../../../assets/imgs/folder-close.png'
import openFolderIcon from '../../../assets/imgs/folder-open.png'
import loadingIcon from '../../../assets/imgs/loading.png'

interface Props {
    data: TreeData
    toggle: any
    onCheck: any
}

class TreeNode extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        // {data:{name}} 是结构data里的name属性
        let { data: { name, children, key, collapsed, checked, loading }, toggle, onCheck } = this.props
        let caret = null    // 箭头符号，默认null
        let icon = null     // 图标

        // 如果有children属性
        if (children) {
            if (children.length > 0) {
                caret = (
                    <span className={`collapse ${collapsed ? 'caret-right' : 'caret-down'}`} onClick={() => toggle(key)}></span>
                )
                icon = collapsed ? closeFolderIcon : openFolderIcon
            } else {
                caret = null
                icon = fileIcon
            }
        } else {    // 没有children属性
            caret = (
                loading ? <img className="collapse" src={loadingIcon} style={{ width: 14, top: '50%', marginTop: -7 }} /> : <span className={`collapse caret-right`} onClick={() => toggle(key)}></span>
            )
            icon = closeFolderIcon  // 关闭文件夹
        }

        return (
            <div className="tree-node">
                <div className="inner">
                    {caret}
                    <span className="content">
                        <input type="checkbox" checked={checked} onChange={() => onCheck(key)} />
                        <img src={icon} style={{ width: '20px' }} />
                        {name}
                    </span>
                </div>
                {
                    (children && children.length > 0 && !collapsed) && (
                        <div className="children">
                            {
                                children.map((item: TreeData) => (
                                    <TreeNode data={item} key={item.key} toggle={toggle} onCheck={onCheck} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}


export default TreeNode