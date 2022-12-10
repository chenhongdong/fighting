import React, { useEffect, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
import HomeHeader from './components/HomeHeader'
import HomeSliders from './components/HomeSliders'
import { RootState, IHomeState } from '@/typings'
import mapDispatchToProps from '@/store/actions/home'
import LessonList from './components/LessonList'
import { loadMore, downpullRefresh } from '@/utils'
import { Spin } from 'antd'

type IHomeProps = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

function Home(props: IHomeProps) {
    const homeContainerRef = useRef<HTMLDivElement>(null)   // 普通对象，{current:null} => {current:HTMLDivElement}

    useEffect(() => {
        loadMore(homeContainerRef.current, props.getLessons)
        downpullRefresh(homeContainerRef.current, props.refreshLessons)

        if (props.lessons.list.length > 0) {
            homeContainerRef.current.scrollTop = parseInt(localStorage.getItem('homeScrollTop'))
        }
        return () => {
            localStorage.setItem('homeScrollTop', homeContainerRef.current.scrollTop + '')
        }
    }, [])

    return (
        <>
            <HomeHeader
                currentCategory={props.currentCategory}
                setCurrentCategory={props.setCurrentCategory}
                refreshLessons={props.refreshLessons}
            />
            <div className="refresh-loading">
                <Spin size="large" />
            </div>
            <div className="home-container" ref={homeContainerRef}>
                <HomeSliders
                    sliders={props.sliders}
                    getSliders={props.getSliders}
                />
                <LessonList
                    container={homeContainerRef}
                    getLessons={props.getLessons}
                    lessons={props.lessons}
                />
            </div>
        </>
    )
}

/* 
    因为此组件是由路由渲染出来的
    所以属性对象会包括“路由属性”   RouteComponentProps + mapStateToProps + mapDispatchToProps
    另外此组件需要连接仓库  connect()
*/
const mapStateToProps = (state: RootState): IHomeState => state.home


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)