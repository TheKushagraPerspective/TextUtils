import React from 'react'

function Alert(props) {

    // to capitalize the first character of the type of letter
    // comment here
    const capitalizeFirstCharacter = (word) => {
        var str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);    // slice means add the string from 1 index
    }



  return (
        <>
            <div style={{height: "40px"}}>
                    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalizeFirstCharacter(props.alert.type)}</strong> : {props.alert.msg}
                    </div>}
            </div>
        </>
  )
}

export default Alert
