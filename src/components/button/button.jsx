import React,{PureComponent} from 'react'
import './button.scss'

class Button extends PureComponent{


render(){

   const {children,handleClick,backgroundColor,text} = this.props
return(
 <>
<button  className = 'main_button' style = {{backgroundColor}} onClick ={handleClick}>{text}</button>



</>)
}
    
}
export default Button;