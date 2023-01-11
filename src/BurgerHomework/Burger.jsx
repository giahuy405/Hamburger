import React, { Component } from "react";
import { connect } from "react-redux";
class Burger extends Component {
    totalAmount = () => {
        let { menu, burger } = this.props;
        let total = 0;
        Object.entries(menu).map(([key, value], index) => {
            total += burger[key] * value
        })
        return total;
    }
    renderBreadMid = () => {
        let { burger } = this.props;
        console.log(burger)
        return Object.entries(burger).map(([propsBurger, val]) => {
            let breadMid = [];
            for (let i = 0; i < val; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }

            return breadMid
        })
    }
    renderMenu = () => {
        let { burger, menu, dispatch } = this.props;

        return Object.entries(menu).map(([key, value], index) => {
            return (
                <tr key={index}>
                    <td>{key.toLocaleUpperCase()}</td>
                    <td>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "DECREASE",
                                    payload: key
                                })
                            }}
                            className="btn btn-info mx-2">
                            -
                        </button>
                        {burger[key]}
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "INCREASE",
                                    payload: key
                                })
                            }}
                            className="btn btn-info mx-2">
                            +
                        </button>
                    </td>
                    <td>{value.toLocaleString() + 'đ'}</td>
                    <td>{(burger[key] * value).toLocaleString() + 'đ'}</td>
                </tr>
            )
        })
    }
    render() {

        return (
            <div>
                <h1 className='text-center text-white'>Chọn số lượng mà bạn muốn</h1>
                .<div className="row">
                    <div className='col'>
                        <div className='breadTop'></div>

                        {this.renderBreadMid()}

                        <div className='breadBottom'></div>
                    </div>
                    <div className='col'>
                        <h3 className="text-center text-white">Chọn thức ăn</h3>
                        <table className="table text-white text-center">
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderMenu()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}></td>
                                    <td>Tổng tiền :</td>
                                    <td>{this.totalAmount().toLocaleString() + 'đ'}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,

    }
}

export default connect(mapStateToProps)(Burger)