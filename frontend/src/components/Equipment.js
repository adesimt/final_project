
const Equipment = ({cName, name, clear, placeholder, change}) => {
    return ( 

        <>
            <div className="input_equipment">
                <input 
                    type="text" 
                    name= {name}
                    className={cName}
                    value={name.value}
                    placeholder={placeholder}
                    onChange={change}

                    
                />
                <div className="clear_btn" onClick={clear}>clear</div>
            </div>
        </>
     );
}
 
export default Equipment;