import './index.less'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { IGetLessonData, ILesson, RootState } from '@/typings'
import Nav from '@/components/Nav'
import { Button, Card } from 'antd'
import { StaticContext } from 'react-router'
import { getLesson } from '@/api/home'
import actions from '@/store/actions/cart'

interface Params {
    id: string
}
type Props = PropsWithChildren<
RouteComponentProps<Params, StaticContext, ILesson> & typeof actions
>
// type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>

function Detail(props: Props) {
    let [lesson, setLesson] = useState<ILesson>({} as ILesson)

    console.log('详情页的', props);

    useEffect(() => {
        (async () => {
            let lesson = props.location.state
            
            // 直接刷新课程详情页的时候是没有带过来的lesson数据
            if (!lesson) {  // 如果没有传lesson过来，就需要亲自调接口取课程详情，参数是课程id
                const res = await getLesson<IGetLessonData>(props.match.params.id)
                if (res.success) {
                    lesson = res.data
                }
            }
            setLesson(lesson)
        })()
    }, [])


    const addCartItem = (lesson: ILesson) => {
        props.addCartItem(lesson)
    }

    return (
        <>
            <Nav history={props.history}>课程详情</Nav>
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img src={lesson.poster} />}
            >
                <Card.Meta
                    title={lesson.title}
                    description={
                        <>
                            <p>{`价格：${lesson.price}`}</p>
                            <p>
                                <Button
                                    className="add-cart"
                                    icon="shopping-cart"
                                    onClick={() => addCartItem(lesson)}
                                    type="primary"
                                >加入购物车</Button>
                            </p>
                        </>
                    }
                />
            </Card>
        </>
    )
}

// const mapStateToProps = (state: RootState) => state.detail


export default connect(
    (state: RootState): RootState => state,
    actions
)(Detail)