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
        const coverCard: HTMLDivElement = document.querySelector('.ant-card-cover')
        const coverWidth = coverCard.offsetWidth
        const coverHeight = coverCard.offsetHeight
        const coverLeft = coverCard.getBoundingClientRect().left
        const coverTop = coverCard.getBoundingClientRect().top


        const cartIcon: HTMLAreaElement = document.querySelectorAll('.anticon-shopping-cart')[1] as HTMLAreaElement
        const cartWidth = cartIcon.offsetWidth
        const cartHeight = cartIcon.offsetHeight
        const cartRight = cartIcon.getBoundingClientRect().right
        const cartBottom = cartIcon.getBoundingClientRect().bottom
        console.log(cartIcon);
        

        const coverClone: HTMLDivElement = coverCard.cloneNode(true) as HTMLDivElement

        coverClone.style.cssText = `
            position: fixed;
            width: ${coverWidth}px;
            height: ${coverHeight}px;
            left: ${coverLeft}px;
            top: ${coverTop}px;
            z-index: 1000;
            opacity: 0.8;
            transition: all 2s ease-in-out;
        `
        document.body.appendChild(coverClone)

        setTimeout(() => {
            coverClone.style.width = '0'
            coverClone.style.height = '0'
            coverClone.style.left = `${cartRight - cartWidth / 2}px`
            coverClone.style.top = `${cartBottom - cartHeight / 2}px`
            coverClone.style.opacity = '0.5'
        }, 0)

        setTimeout(() => {
            document.body.removeChild(coverClone)
        }, 2000)

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
                            <p>{`价格：${lesson.price}元`}</p>
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