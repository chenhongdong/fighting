import React, { PropsWithChildren } from "react"
import { History } from 'history'
import { Icon } from 'antd'
import './index.less'


type INavProps = PropsWithChildren<{
    history: History
}>

function Nav(props: INavProps) {
    return (
        <nav className="nav-header">
            <Icon type="left" onClick={() => props.history.goBack()} />
            {props.children}
        </nav>
    )
}


export default Nav