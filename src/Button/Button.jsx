

function Button({title,clickmy,backroundColor}){
    return(
        <div>
            <button onClick={clickmy} style={{backgroundColor:`${backroundColor}`}}>{title}</button>
          </div> 
    )
}
export default Button;