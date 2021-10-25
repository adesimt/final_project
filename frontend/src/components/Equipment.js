const Equipment = ({ name, cName, placeholder }) => {
    return ( 

        <>
            <input 
                type="text" 
                name={name} 
                className={cName}
                placeholder={placeholder} />
        </>
     );
}
 
export default Equipment;