const counter =(value)=>{
    return(dispatch)=>{
        dispatch({
            type:"COUNTER_PLUS",
            payload:value
        })
    }
}


const counterMinus =(value)=>{
    return(dispatch)=>{
        dispatch({
            type:"COUNTER_MINUS",
            payload:value
        })
    }
}
export {counter,counterMinus}