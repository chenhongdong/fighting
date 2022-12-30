import React from 'react'


class JsxBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '小白',
            flag: true,
            imgUrl: 'https://img2.baidu.com/it/u=3060622149,1821416466&fm=253&fmt=auto&app=138&f=JPEG?w=272&h=240'
        }
    }

    render() {
        // 1.获取变量
        // const img = <img src={this.state.imgUrl} width="300" height="300" />
        // return img

        // 2.表达式
        // const exprEle = <p>{this.state.flag ? 'Yes' : 'No'}</p>
        // return exprEle


        // 3.子元素
        // const ele = <div>
        //     <p>我的头像</p>
        //     <img src="https://img0.baidu.com/it/u=1231537999,2648329146&fm=253&fmt=auto&app=138&f=JPEG?w=347&h=500" width="250" height="250" />
        //     <img src={this.state.imgUrl} width="250" height="250" />
        // </div>
        // return ele


        // 4. class类名
        // const div = <div className='box'>设置class样式</div>
        // return div

        // 5. style样式
        // const styles = { fontSize: '30px', color: 'pink'}
        // const box = <div style={styles}>设置 style</div>
        // 内联写法
        const box = <div style={{ fontSize: '50px', color: 'blue' }}>设置 内联style</div>
        return box
        
        // 6. 原生HTML
        // const ele = '<span>富文本内容<i>斜体</i><b>粗体</b></span>'
        // const rawHtmlData = {
        //     __html: ele
        // }
        // const rawHtml = <div>
        //     <p dangerouslySetInnerHTML={rawHtmlData}></p>
        //     <p>{ele}</p>
        // </div>
        // return rawHtml
        
    }
}

export default JsxBase