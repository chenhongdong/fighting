import React, { Component, createRef } from "react";


class VirtualList extends Component {
    state = { start: 0 }   // 起始索引start

    scrollRef = createRef()

    onScroll = () => {
        const { itemSize } = this.props
        const { scrollTop } = this.scrollRef.current
        const start = Math.floor(scrollTop / itemSize)
        this.setState({ start })
    }

    render() {
        // 容器的 宽度、  高度、  多少个条目、每个条目多高、
        const { width, height, itemCount, itemSize, renderItem } = this.props

        const { start } = this.state
        // Math.floor(height / itemSize)计算出每屏可以展示几条内容
        let end = start + Math.floor(height / itemSize) + 1
        // 如果结束索引超过最后一条，到结束为止即可
        end = end > itemCount ? itemCount : end

        const visibleList = Array(end - start).fill(0).map((item, index) => ({ index: start + index }))
        let itemStyle = {position: 'absolute', left: 0, width: '100%', height: itemSize}


        return (
            <div ref={this.scrollRef} style={{ overflow: 'auto', willChange: 'transform', width, height }} onScroll={this.onScroll}>
                <div style={{ position: 'relative', width: '100%', height: `${itemCount * itemSize}px` }}>
                    {
                        visibleList.map(({ index }) => renderItem({index, style: {...itemStyle, top: itemSize * index}}))
                    }
                </div>
            </div>
        )
    }
}

export default VirtualList