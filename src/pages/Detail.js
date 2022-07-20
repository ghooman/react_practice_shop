import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Detail = (props) => {

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((el) => el.id == id);
  // let [alert, setAlert] = useState(true); 
  // let [count, setCount] = useState(0);
  // let [num, setNum] = useState('');

  // useEffect(() => {
  //   if (isNaN(num)) {
  //     alert("숫자만 적으셈")
  //   }
  // }, [num])



  return (


    <div className="container">
      {/* <input onChange={(e) => {setNum(e.target.value)}}></input>
      {
        alert == true
        ? <div className="alert alert-warning">2초 이내 구매시 할인</div>
        : null
      }
      {count}
      <button onClick={() => {setCount(count + 1)}}>버튼</button> */}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="shoesImg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;