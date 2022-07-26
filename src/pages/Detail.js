import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'
import { addItem } from './../store.js'
import { useDispatch } from "react-redux";


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
  let [tab, setTab] = useState(0)
  let [fade2, setFade2] = useState('')
  let dispatch = useDispatch()

  useEffect(() => {
    setFade2('end')
    return () => {
      setFade2('')
    }
  }, [])


  return (


    <div className={"container start " + fade2}>
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
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem( {id: 찾은상품.id, name: 찾은상품.title, count: 1} ))
          }}>주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>

    </div> 
  )
}

const TabContent = ({tab}) => {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => {setFade('end')}, 100)
    return () => {
      setFade('')
    }
  }, [tab])

  return ( 
              // {'start ' + fade}
  <div className={`start ${fade}`}> 
    { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
  </div>
  )
  // if (tab == 0) {
  //   return <div>내용0</div>
  // } else if (tab == 1) {
  //   return <div>내용1</div>
  // } else if (tab == 2) {
  //   return <div>내용2</div>
  // }
}
  

export default Detail;