import {Table} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store.js";

const Cart = () => {

  let state = useSelector((state) => state)
  let dispatch = useDispatch()

  return (
    <div>

      {state.user}의 장바구니
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((el, i) =>
              <tr key={i}>
                <td>{i}</td>
                <td>{el.name}</td>
                <td>{el.count}</td>
                <td>
                  <button onClick={() => {
                    dispatch(changeName())
                  }}>+</button>
                </td>
              </tr>
              )
          }

        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;