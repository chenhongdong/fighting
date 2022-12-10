/**
 * 实现加载更多功能，快拉到底部的时候就自动加载下一页
 * @param ele 
 * @param cb 
 */
export function loadMore(ele: HTMLDivElement, cb: Function) {
    function load() {
        const wrapperHeight = ele.clientHeight
        let scrollTop = ele.scrollTop
        let scrollHeight = ele.scrollHeight
        const GAP = 20

        if (wrapperHeight + scrollTop + GAP >= scrollHeight) {
            cb()
        }
        console.log('节流吧');
    }


    ele.addEventListener('scroll', debounce(load, 300))
}



export function downpullRefresh(ele: HTMLDivElement, cb: Function) {
    let startY: number      // 变量，记录按下时候的纵坐标
    let dis: number         // 本次下拉的距离
    let originTop = ele.offsetTop   // 最初元素距离顶部的高度
    let timer: any
    let currentTop: number      // 当前top值

    ele.addEventListener('touchstart', (e: TouchEvent) => {
        if (timer) {
            clearInterval(timer)
        }
        let touchMove = throttle(_touchMove, 60)

        // 只有处于原始位置的时候才能下拉，回弹的过程中则不能拉
        // 并且此元素向上滚动的高度为0
        if (ele.scrollTop === 0) {
            currentTop = ele.offsetTop      // 记录一下开始的top值
            startY = e.touches[0].pageY    // 记录当前触摸的纵坐标
            ele.addEventListener('touchmove', touchMove)
            ele.addEventListener('touchend', touchEnd)
        }
        function _touchMove(e: TouchEvent) {
            console.log('看效果');
            
            let pageY = e.touches[0].pageY    // 拿到最新的纵坐标
            if (pageY > startY) {   // 下拉
                dis = pageY - startY
                ele.style.top = currentTop + dis + 'px'
            } else {    // 上拉，取消事件
                console.log('上拉了？');
                
                ele.removeEventListener('touchmove', touchMove)
                ele.removeEventListener('touchend', touchEnd)
            }
        }

        function touchEnd(e: TouchEvent) {
            ele.removeEventListener('touchmove', touchMove)
            ele.removeEventListener('touchend', touchEnd)

            

            timer = setInterval(() => {
                const top = ele.offsetTop
                if (top - originTop > 1) {
                    ele.style.top = (top - 1) + 'px'
                } else {
                    ele.style.top = originTop + 'px'
                }
            }, 13)

            if (dis > 30) {
                cb()
            }
        }
    })
}

// 防抖是执行最后一次
export function debounce(fn: Function, delay: number) {
    let timer: number = null

    return function () {
        if (timer) clearTimeout(timer)

        timer = setTimeout(fn, delay)
    }
}
// 节流是间隔时间执行
export function throttle(fn: Function, delay: number) {
    let prev = Date.now()

    return function() {
        let self = this
        let args = arguments
        let now = Date.now()
        if (now - prev >= delay) {
            fn.apply(self, args)
            prev = now
        }
    }
}