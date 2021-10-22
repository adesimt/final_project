const Header = () => {


    const styles = {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '8.31vh',
        background: 'transparent linear-gradient(90deg, #1DAE8C 0%, #1A272A 100%) 0% 0% no-repeat padding-box',
        opacity: '1',
        position: 'fixed',
        zIndex: '4',
        
    };

    const logoutStyles = {
        color: '#ffffff',
        fontFamily: 'Aviano',
        textAlign: 'right',
        padding: '20px 70px 10px 0',
        cursor: 'pointer'
    }
    
    return ( 

        <div className="header" style={styles}>
            <div className="logout" style={logoutStyles}>logout</div>        
        </div>
     );
}
 
export default Header;