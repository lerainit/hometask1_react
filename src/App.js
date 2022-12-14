
import './App.scss';
import React, {Component} from 'react';
import Modal from './components/modal/Modal';
import Button from './components/button/button.jsx';
import modalDeclarations from './modalDeclarations';
import buttons from './buttons';


class App extends Component{
state = {
 
 isOpenModal:false,
 buttonText:buttons,
closeButton:true,
backGroundColor:buttons[0].backGroundColor ,
text:modalDeclarations[0].text,
header:modalDeclarations[0].header,
backgroundColor:modalDeclarations[0].backgroundColor,
color:modalDeclarations[0].color,
closeClassName:'close_btn',
actions:<><button className='action_btn'>OK</button><button className='action_btn'>Cancel</button></>

}

handleClick =(index,className,closeBtn) =>{ this.setState((current)=>{ 
    const newState ={...current}
     newState.isOpenModal=true;
     newState.text=modalDeclarations[index].text
     newState.header=modalDeclarations[index].header
     newState.backgroundColor = modalDeclarations[index].backgroundColor
     newState.color= modalDeclarations[index].color
     newState.actions=<><button className={className}>OK</button><button className={className}>Cancel</button></>
     newState.closeClassName=closeBtn
    return newState
})}

render(){


const {isOpenModal,text,header,backgroundColor,color,actions,closeButton,closeClassName} = this.state

return(

<>

<div className='App'>




<Button backgroundColor= {buttons[0].backGroundColor} handleClick ={()=>{this.handleClick(0,'action_btn','close_btn')}} text = {buttons[0].text}></Button>
    
<Button backgroundColor= {buttons[1].backGroundColor}  handleClick ={() =>{ this.handleClick(1,'action_btn2','close_btn2')}} text = {buttons[1].text}></Button>
    
</div>
{ isOpenModal &&
<Modal color ={color} backgroundColor ={backgroundColor} actions = {actions} text={text} header={header} handleClick={()=>{this.setState({isOpenModal:false})}} closeButton={closeButton} closeClassName={closeClassName}>


</Modal>
}

</>








)





}

  
}



export default App;
