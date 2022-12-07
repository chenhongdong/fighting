import React, { CSSProperties, useState } from "react";
import { Icon } from 'antd'
import { Transition } from 'react-transition-group'
import './index.less'
const logo = require('@/assets/images/kdy.jpeg')

import classnames from 'classnames'

// 动画持续时间
const duration = 300
// CSSProperties 行内样式的对象定义
const defaultStyle: CSSProperties = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
}


// 不同的阶段给不同的样式

interface ITransitionStyle {
    entering: CSSProperties
    entered: CSSProperties
    exiting: CSSProperties
    exited: CSSProperties
}

const transitionStyle: ITransitionStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
}


interface IHomeHeaderProps {
    currentCategory: string  // 当前选中的分类，此数据会放在redux仓库
    setCurrentCategory: (currentCategory: string) => any     // 改变仓库中的分类
    refreshLessons: Function
}

function HomeHeader(props: IHomeHeaderProps) {
    let [isMenuVisible, setMenuVisible] = useState(false)
    // 
    const setCurrentCategory = (e: React.MouseEvent<HTMLUListElement>) => {
        const target: HTMLUListElement = e.target as HTMLUListElement
        const category = target.dataset.category
        // 修改类型
        props.setCurrentCategory(category)
        // 关闭菜单
        setMenuVisible(false)
        // 刷新分类的数据
        props.refreshLessons()
    }

    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo} />
                <Icon type="bars" onClick={() => setMenuVisible(!isMenuVisible)} />
            </div>
            <Transition in={isMenuVisible} timeout={duration}>
                {
                    (state: keyof ITransitionStyle) => (
                        <ul
                            className="category"
                            onClick={setCurrentCategory}
                            style={{
                                ...defaultStyle,
                                ...transitionStyle[state]
                            }}
                        >
                            <li data-category="all" className={classnames({ active: props.currentCategory === 'all' })}>全部课程</li>
                            <li data-category="react" className={classnames({ active: props.currentCategory === 'react' })}>React课程</li>
                            <li data-category="vue" className={classnames({ active: props.currentCategory === 'vue' })}>Vue课程</li>
                        </ul>
                    )
                }
            </Transition>
        </header>
    )
}


export default HomeHeader


/* 
    动画是如何实现的
    Transition
    动态的给一个元素增加和删除类名，不同的类名对应不同样式
    另外再加一个transition效果就可
*/