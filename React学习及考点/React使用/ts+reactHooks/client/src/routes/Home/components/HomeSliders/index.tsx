import React, { PropsWithChildren, useEffect }from "react"
import './index.less'
import { Carousel } from 'antd'
import { ISlider } from "@/typings"

// PropsWithChildren是给props属性上加上children
type Props = PropsWithChildren<{
    sliders: ISlider[],
    getSliders: () => void
}>

function HomeSliders(props: Props) {
    useEffect(() => {
        if (!props.sliders.length) {
            props.getSliders()
        }
    }, [])
    

    return (
        <Carousel>
            {
                props.sliders.map((item: ISlider, index: number) => (
                    <div key={item.id}>
                        <img src={item.url} />
                    </div>
                ))
            }
        </Carousel>
    )
}


export default HomeSliders