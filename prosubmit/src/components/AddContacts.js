import React, { Component } from 'react';

export default class AddContacts extends Component {

    state={
        name:"",
        id:"",
        language:"",
        framework:"",
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.id==="" || this.state.language==="" || this.state.framework===""){
            alert("all the field are mandatory");
            return;
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"",id:"",language:"",framework:""}); 
        console.log(this.state);
        // this.props.history.push("/");

    };

  render() {
    return (
    <div className='ui main'> 
        <h2> Add User</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className='field'>
                <span htmlFor="">Name</span>
                <input type="text"  name="name" autoComplete="on" placeholder='Name'  value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
            </div>
            <div className='field'>
                <span htmlFor="">Id:</span>
                <input type="text"   name="id" placeholder='Id'  value={this.state.id} onChange={(e)=> this.setState({id: e.target.value})} />
            </div>
            <div className='field'>
                <span htmlFor="">Language</span>
                <input type="text"   name="language" placeholder='Language'  value={this.state.language} onChange={(e)=> this.setState({language: e.target.value})}/>
            </div>
            <div className='field'>
                <span  htmlFor="">Framework</span>
                <input type="text"  name="framework" placeholder='Framework'  value={this.state.framework} onChange={(e)=> this.setState({framework: e.target.value})} />
            </div>
        
        <button className='ui button blue'>Add</button><br /><br />
        </form>
    </div>
    
    )
  }
}
