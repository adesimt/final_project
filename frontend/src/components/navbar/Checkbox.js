const Checkbox = ({day, cName}) => {
    return ( 
        <>
            <div className="checkbox_container">
                <div className="checkbox_label">{day}</div>
                <input type="checkbox" name={day} className={cName} />
            </div>
        </>
     );
}
 
export default Checkbox;