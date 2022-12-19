import { TreeData } from './typings'

const data: TreeData = {
    name: '滴滴',
    key: '1',
    type: 'folder',
    collapsed: false,
    children: [
        {
            name: '网约车',
            key: '1-1',
            type: 'folder',
            collapsed: false,
            children: [
                {
                    name: '顺风车',
                    key: '1-1-1',
                    type: 'folder',
                    collapsed: false,
                    children: [
                        {
                            name: '前端FE',
                            key: '1-1-1-1',
                            type: 'file',
                            collapsed: false,
                            children: []
                        }
                    ]
                },
                {
                    name: 'UT',
                    key: '1-1-2',
                    type: 'file',
                    collapsed: false,
                    children: []
                }
            ]
        },
        {
            name: '国际化',
            key: '1-2',
            type: 'folder',
            collapsed: false,
            children: [
                {
                    name: 'R-Lab',
                    key: '1-2-1',
                    type: 'folder',
                    collapsed: false,
                    children: [
                        {
                            name: '外卖',
                            key: '1-2-1-1',
                            type: 'file',
                            collapsed: false,
                            children: []
                        }
                    ]
                },
                {
                    name: '金融',
                    key: '1-2-2',
                    type: 'file',
                    collapsed: false,
                    children: []
                }
            ]
        },
        {
            name: '城运服',
            key: '1-3',
            type: 'folder',
            collapsed: false
        }
    ]
}


export default data