import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/Todos/AddTodo'
import VisibleTodoList from '../../containers/Todos/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App