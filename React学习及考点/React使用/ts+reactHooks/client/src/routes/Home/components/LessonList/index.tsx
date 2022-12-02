import React, { PropsWithChildren, useEffect }from "react"
import './index.less'

type Props = PropsWithChildren<{
    getLessons: () => void
}>

function LessonList(props: Props) {
    useEffect(() => {
        props.getLessons()
    }, [])
    return (
        <div>lesson</div>
    )
}


export default LessonList