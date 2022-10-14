import React, {useState} from "react";
import './App.css';
import TodoBoard from './component/TodoBoard';
import Todoitem from "./component/TodoItem";
//import style from "style-components";


//1. 인풋창이 있고 버튼 만든다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가 됌
//3. 변경과 삭제 가능
//4. 큰 여행 카테고리별로 나누면 좋다. (예를 들어  강원 , 제주 , 목포 )를 클릭시 
// 그 안으로 들어가서 또 그 안에서 리스트를 작성해서 보기 편하게

//5. "만약에 제주라면 그 제주 안에  카페, 맛집, 관광" 에 관한 카테고리 등록
//6. 지도도 표시하면 좋다.
//################################################ 
//리엑트에서 가장 중요한건 반복되는 것들을 컴포넌트로 만들어서 활용한다.  

function App() {

  const [todos, setTodos] = useState([])

  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = year + '-' + month  + '-' + day;

  console.log(dateString);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = {id : id , text : text, completed : false }
    let newTodos = [todo, ...todos]
    console.log(newTodos);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos);
  }
  
  //완료 시  지우는 역할 
  // const completeTodo = (id) => {
  //   let updatedTodos = todos.map((todo)  => {
      
  //     if(todo.id === id) {
  //       todo.completeTodo = !todo.completeTodo
  //     } 
  //     return todo
  //   })
  //   setTodos(updatedTodos)
  // }

  //딱 한번 마운팅 될때만 useEffect가 찍힌다 
  //useEffect(() => {
   // console.log('리스트 변화!!');
  //},[]);

  return (
    <div className="bucketList">
      <h1 className="title">BucketList </h1>

      <h2> 시간 넣기</h2>

      <h3>내가 죽기 전에 꼭해야 할 일 state 개</h3>
      <hr />
      <TodoBoard className = "add_TodoList" addTodo = {addTodo} />  {/**주석임 props를 나타냄   */}
      {todos.map((todo) => {
        return(
         
          <Todoitem  removeTodo = {removeTodo}  todo = {todo} key = {todo.id} />
          
        )
      })}
    </div>
  );
}


export default App;
