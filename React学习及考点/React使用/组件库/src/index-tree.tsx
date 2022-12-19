import React from "react";
import { render } from 'react-dom'
import Tree from './components/Tree'
import data from './data'   // 数据源


render(
    <Tree data={data} />
    , document.getElementById('root')
)