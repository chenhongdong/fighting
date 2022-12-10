import { ILessons, ILesson } from "@/typings"
import React, { PropsWithChildren, useEffect, useState } from "react"
import { Alert, Button, Card, Icon, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

type Props = PropsWithChildren<{
    getLessons: () => void
    lessons: ILessons
    container: any
}>


function LessonList(props: Props) {
    // 函数组件要想强行刷新
    const [_, forceUpdate] = useState(0)
    useEffect(() => {
        if (props.lessons.list.length === 0) {
            props.getLessons()
        }
        props.container.current.addEventListener('scroll', () => forceUpdate(x => x + 1))
    }, [])

    // 开始真正渲染的起始索引，从它开始向下渲染三条。除此之外的卡片都用空的div撑开
    let start = 0
    let rootFontSize = parseFloat(document.documentElement.style.fontSize)

    if (props.container.current) {    // 说明 homeContainerRef 已经有了
        // 获取父容器向上滚动的高度
        let scrollTop = props.container.current.scrollTop
        // 轮播图高度+全部课程h2的高度 = (4.2 + 1.33)
        // 卡片高度 8.66667
        start = Math.floor((scrollTop - (4.2 + 1.33) * rootFontSize) / (8.66667 * rootFontSize))
    }

    return (
        <section className="lesson-list">
            <h2><Icon type="menu" />全部课程</h2>
            <Skeleton loading={props.lessons.loading && props.lessons.list.length === 0} paragraph={{ rows: 8 }} active>
                {
                    props.lessons.list.map((item: ILesson, index: number) => (
                        index >= start && index <= start + 2 ? (
                            <Link to={{ pathname: `/detail/${item.id}`, state: item }} key={item.id}>
                                <Card
                                    key={item.id}
                                    hoverable={true}
                                    style={{ width: '100%' }}
                                    cover={<img src={item.poster} crossOrigin="anonymous" />}
                                >
                                    <Card.Meta title={item.title} description={`价格:${item.price}元`} />
                                </Card>
                            </Link>) : <div key={item.id} style={{ height: `${8.66667 * rootFontSize}px` }}></div>
                    ))
                }
            </Skeleton>
            {
                props.lessons.ismore ?
                    <Button
                        onClick={props.getLessons}
                        loading={props.lessons.loading}
                        type="primary"
                        block
                    >{props.lessons.loading ? '' : '加载更多'}</Button> : <Alert style={{ textAlign: 'center' }} type="warning" message="到底了" />
            }

        </section>
    )
}


export default LessonList