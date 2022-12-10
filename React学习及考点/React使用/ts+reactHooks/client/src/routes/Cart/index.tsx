import React, { PropsWithChildren } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux'
import './index.less'
import { CartState, ICartItem, ILesson, RootState } from "@/typings";
import actions from '@/store/actions/cart'
import { Table, InputNumber, Popconfirm, Button, Row, Col, Badge } from 'antd'
import Nav from '@/components/Nav'


type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof actions>

function Cart(props: Props) {
    const columns = [
        {
            title: '商品',
            detaIndex: 'lesson',
            render: (val: ILesson, row: ICartItem) => {
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
                return (
                    <InputNumber
                        size="small"
                        min={1}
                        value={row.count}
                        onChange={(value) => props.changeCartItemCount(row.lesson.id, value)}
                    />
                )
            }
        },
        {
            title: '操作',
            detaIndex: 'lesson',
            render: (val: number, row: ICartItem) => {
                return (
                    <Popconfirm
                        title="是否要删除商品"
                        onConfirm={() => props.removeCartItem(row.lesson.id)}
                        okText="是"
                        cancelText="否"
                    >
                        <Button size="small" type="primary">删除</Button>
                    </Popconfirm>
                )
            }
        }
    ]


    const selectedRowKeys = props.cart.filter((item: ICartItem) => item.checked).map((item: ICartItem) => item.lesson.id)
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys: string[]) => {
            props.changeCheckedCartItems(selectedRowKeys)
        }
    }

    const totalCount = props.cart.filter((item: ICartItem) => item.checked).reduce((total: number, item: ICartItem) => total + item.count, 0)
    const totalPrice = props.cart.filter((item: ICartItem) => item.checked).reduce((total: number, item: ICartItem) => total + item.count * item.lesson.price, 0)

    return (
        <div className="cart">
            <Nav history={props.history}>购物车</Nav>
            <Table
                columns={columns}
                pagination={false}
                dataSource={props.cart}
                rowSelection={rowSelection}
                rowKey={row => row.lesson.id}
            />
            <Row style={{padding: '5px'}}>
                <Col span={4}><Button type="danger" size="small" onClick={props.clearCartItem}>清空</Button></Col>
                <Col span={8}>
                    已选择了{totalCount > 0 ? <Badge count={totalCount} /> : 0}件商品
                </Col>
                <Col span={7}>
                    一共{totalPrice}元
                </Col>
                <Col span={5}><Button type="primary" onClick={props.settle}>去结算</Button></Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state: RootState): { cart: CartState } => ({ cart: state.cart })

export default connect(
    mapStateToProps,
    actions
)(Cart)