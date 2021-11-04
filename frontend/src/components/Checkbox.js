const Checkbox = ({day, cName, check}) => {

    
    return ( 
        <>
            <div className="checkbox_container">
                <div className="checkbox_label">{day}</div>
                <input type="checkbox" name={day} className={cName} onChange={check}/>
            </div>
        </>
     );
}
 
export default Checkbox;