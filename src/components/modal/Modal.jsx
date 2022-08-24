import React,{PureComponent} from 'react';
import './modal.scss';




class Modal extends PureComponent{
  
    render(){
  const {actions,text,header,handleClick,backgroundColor,color,closeButton}  = this.props 

return(
<>

<div className='modal' >
  <div className='modal_main_container' style={{backgroundColor,color}} text ={text} header={header} handleClick={handleClick} >
 
 <div className='header_container'><h2>{header}</h2>
 { closeButton && <button className='close_btn' onClick={handleClick}>X</button>}</div> 
<p>{text}</p>
 {actions}
</div>
</div>

</>
  ) 

}
}
export default Modal