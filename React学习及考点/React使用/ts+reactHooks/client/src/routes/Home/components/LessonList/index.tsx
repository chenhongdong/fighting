import { ILessons, ILesson } from "@/typings"
import React, { PropsWithChildren, useEffect } from "react"
import { Alert, Button, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

type Props = PropsWithChildren<{
    getLessons: () => void
    lessons: ILessons
}>

function LessonList(props: Props) {
    useEffect(() => {
        props.getLessons()
    }, [])
    return (
        <section className="lesson-list">
            <h2><Icon type="menu" />全部课程</h2>
            {
                props.lessons.list.map((item: ILesson, index: number) => (
                    <Link to={{ pathname: `/detail/${item.id}`, state: item }} key={item.id}>
                        <Card
                            key={item.id}
                            hoverable={true}
                            style={{ width: '100%' }}
                            cover={<img src={item.poster} crossOrigin="anonymous" />}
                        >
                            <Card.Meta title={item.title} description={`价格:${item.price}`} />
                        </Card>
                    </Link>
                ))
            }
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