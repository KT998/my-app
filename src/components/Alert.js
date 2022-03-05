import React from 'react'

function Alert(props) {
  const captialize=(word) =>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captialize(props.alert.type)} : {props.alert.msg}</strong> 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
    </div>
    
  )
}

export default Alert
