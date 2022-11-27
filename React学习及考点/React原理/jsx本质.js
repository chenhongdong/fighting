/* 
    React.createElement(tag | componentTag, {props | null}, child1, child2, child3)
    React.createElement(tag | componentTag, {props | null}, [child1, child2, child3])

    返回 vnode
    patch(ele, vnode)去渲染

    react中规定，组件名 首字母 必须 大写
*/


// https://www.babeljs.cn/   选择“试一试”
// JSX 基本用法
// const imgEle = <div id="box">
// 	<p class="txt">text</p>
//     <img src={imgUrl} />
// </div>


// JSX style
// const styles = { fontSize: '40px', color: 'red' }
// const ele = <p style={styles}>set style</p>


// JSX 加载组件
// const App = <div>
//     <Input submitTitle={onSubmitTitle} />
//     <List list={list} />
// </div>


// JSX 事件
// const eventList = <p onClick={this.clickHandler}>some text</p>


// JSX 渲染列表
const list = <ul>
    {this.state.list.map(item => {
        return <li key={item.id}>{item.title}</li> 
    })}      
</ul>