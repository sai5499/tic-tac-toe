function Square(props) {
    return(
        <button className='eachbutton' onClick={() => props.handleclick(props.index)}>{props.value}</button>
    )
}
export default Square