import './App.css';
import React, { Component } from 'react';

const tasks = [
  {
    id: 1,
    title: "Watching Movie",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae dolor quas?",
    completed: false

  },
  {
    id: 2,
    title: "Buying Popcorn",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae dolor quas?",
    completed: false

  },
  {
    id: 3,
    title: "Playing Fifa 23",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae dolor quas?",
    completed: false

  },
  {
    id: 4,
    title: "Eating Lunch",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae dolor quas?",
    completed: false

  },
  {
    id: 5,
    title: "Going to Park",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae dolor quas?",
    completed: true

  }
]






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks
    };
  }


  displayCompleted = state => {
    if (this.state) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });

  }

  renderTabList = () => {
    return (
      <div className='my-5 tab-list'>
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? 'active' : ''}
        >Completed
        </span>

        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? '' : 'active'}
        >Incomplete
        </span>
      </div>
    )
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(item => item.completed === viewCompleted);

    return newItems.map(item => <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className={`todo-title mr-2 ${this.state.viewCompleted ? 'completed-todo' : ''}`} title={item.title}>
        {item.title}
      </span>

      <span>
        <button className="btn btn-outline-warning me-2">Edit</button>
        <button className="btn btn-outline-danger">Delete</button>
      </span>
    </li>)
  };



  render() {
    return <main className='context'>
      <h1 className='text-black text-uppercase text-center my-4'>Task Manager</h1>
      <div className='row'>
        <div className='col-md-6 col-sm-10 mx-auto p-0'>
          <div className='card p-3'>
            <div>
              <button className='btn btn-outline-dark'>Add Task</button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
    </main>
  }



}



export default App;
