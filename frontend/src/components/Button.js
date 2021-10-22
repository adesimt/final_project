const Button = ({ cName, name }) => {
    const btnStyle = {
        width: 'fit-content',
        height: '40px',
        padding: '11px 32px',
        borderRadius: '8px',
        margin: '15px 25px 0 0',
        cursor: 'pointer'
    }


    return ( 
        <div className={cName} style={btnStyle}>{name}</div>
     );
}
 
export default Button;