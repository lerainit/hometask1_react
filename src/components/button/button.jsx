import React,{PureComponent} from 'react'

class Button extends PureComponent{


render(){

   const {children,handleClick,backgroundColor,text} = this.props
return(
 <>
<button style = {{backgroundColor}} onClick ={handleClick}>{text}</button>



</>)
}
    
}
export default Button;