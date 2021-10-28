const Header = () => {


    const styles = {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '8.31vh',
        background: 'transparent linear-gradient(90deg, #1DAE8C 0%, #1A272A 100%) 0% 0% no-repeat padding-box',
        opacity: '1',
        position: 'fixed',
        zIndex: '10',
        padding: '5px 80px 10px 0'
        
    };

    
    return ( 

        <div className="header" style={styles}>
            <div className="logout">logout</div>        
        </div>
     );
}
 
export default Header;