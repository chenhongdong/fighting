import React from "react";
import { render } from 'react-dom'
// import VirtualList from 'react-tiny-virtual-list'
import VirtualList from "./VirtualList";

const data = Array(30).fill(1)

render(
    <VirtualList
        width="50%"
        height={500}
        itemCount={data.length}
        itemSize={50}
        renderItem={
            (data) => {
                console.log(data)
                let { index, style } = data

                return (
                    <div key={index} style={{...style, backgroundColor: index % 2 ? 'green' : 'orange'}}>
                        {index + 1}
                    </div>
                )
            }
        }
    />,
    document.getElementById('root')
)