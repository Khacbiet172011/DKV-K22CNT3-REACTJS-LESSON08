import React, { Component } from 'react'
import DkvListTasks from './component/DkvListTasks';
import DkvTaskAdd from './component/DkvTaskAdd';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        { Dkv_taskId:1,Dkv_taskName:"Học lập trình frontend", Dkv_level:"Small" },
        { Dkv_taskId:2, Dkv_taskName:"Học lập trình reactjs",Dkv_level:"Medium"},
        { Dkv_taskId:3, Dkv_taskName:"Lập trình với Frontend - Reactjs",Dkv_level:"High"},
        { Dkv_taskId:4, Dkv_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",Dkv_level:"Small"},
      
      ]
    }
  }
  DkvHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
     
      <div className='container border mt-5'>
      <h1>Dkv-2210900137</h1>
      <hr/>
      <DkvListTasks renderProducts={this.state.products}/>
      <hr/>
      <DkvTaskAdd onSummit={this.DkvHandldSumit}/>
     
      </div>
    )
  }
}
