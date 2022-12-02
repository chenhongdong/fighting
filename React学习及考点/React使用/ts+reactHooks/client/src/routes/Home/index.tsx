import React, { useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
import HomeHeader from './components/HomeHeader'
import HomeSliders from './components/HomeSliders'
import { RootState, IHomeState } from '@/typings'
import mapDispatchToProps from '@/store/actions/home'
import LessonList from './components/LessonList'

type IHomeProps = RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

function Home(props: IHomeProps) {
    const homeContainerRef = useRef<HTMLDivElement>(null)   // 普通对象，{current:null} => {current:HTMLDivElement}
    
    return (
        <>
            <HomeHeader
                currentCategory={props.currentCategory}
                setCurrentCategory={props.setCurrentCategory}
            />
            <div className="home-container" ref={homeContainerRef}>
                <HomeSliders
                    sliders={props.sliders}
                    getSliders={props.getSliders}
                />
                <LessonList getLessons={props.getLessons} />
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