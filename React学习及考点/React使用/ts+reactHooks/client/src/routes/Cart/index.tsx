import React, { PropsWithChildren } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux'
import './index.less'
import { CartState, ICartItem, ILesson, RootState } from "@/typings";
import actions from '@/store/actions/cart'
import { Table, InputNumber } from 'antd'
import Nav from '@/components/Nav'


type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps>>

function Cart(props: Props) {
    const columns = [
        {
            title: '商品',
            detaIndex: 'lesson',
            render: (val: ILesson, row: ICartItem) => {
                console.log('上哦', val)
                console.log('下哦', row)
                return (
                    <>
                        <p>{row.lesson.title}</p>
                        <p>单价：{row.lesson.price}</p>
                    </>
                )
            }
        },
        {
            title: '数量',
            detaIndex: 'count',
            render: (val: number, row: ICartItem) => {
                console.log('数量', val, row);
                
                return (
                   <InputNumber
                        size="small"
                        min={1}
                        value={row.count}
                        onChange={(value) => props.changeCartItemCount(row.lesson.id, value)}
                   />
                )
            }
        }
    ]
    return (
        <>
            <Nav history={props.history}>购物车</Nav>
            <Table
                columns={columns}
                key={Math.random()}
                pagination={false}
                dataSource={props.cart}
            />
        </>
    )
}

const mapStateToProps = (state: RootState): { cart: CartState } => ({ cart: state.cart })

export default connect(
    mapStateToProps,
    actions
)(Cart)