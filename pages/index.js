import React from 'react'
import Head from 'next/head'
import Card from '../components/card.js'

let tasks = ['Task1', 'Task2', 'Task3'];
let listTasks = tasks.map(task => <Card taskName={task} />);

const Home = () => (
  <div>
    <Head>
      <title>DoNext</title>
    </Head>
  
    <div className='main'>
      <h1 className='headline'>Do<span>Next</span></h1>
      <input type="text"/>
      <button>ADD</button>

      <div className="card-wrapper">
        {listTasks}   
      </div>
    </div>

    <style jsx>{`
      .main{
        text-align: center;
      }
      .headline{
        text-align: center;
        font-size: 3rem;
      }
      .headline span{
        color: #27c7d9;
      }
      input[type="text"],
      button{
        background: transparent;
        border: none;
        border-bottom: 1px solid #333;
        transition: .25s;
        padding: 12px 20px;
        border-radius: 4px;
        font-size: 1rem;
      }
      input[type="text"]:focus{
        border-bottom: 1px solid #27c7d9;
      }
      button{
        border: 1px solid #27c7d9;
        color: #27c7d9;
        margin-left: 20px;
        cursor: pointer;
      }
      button:hover{
        background: #27c7d9;
        color: #f3f3f3;
      }
      .card-wrapper{
        text-align: center;
        padding: 4rem 0;
      }
    `}</style>
  </div>
)

export default Home
