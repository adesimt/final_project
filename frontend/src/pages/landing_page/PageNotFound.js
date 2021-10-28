import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return ( 

        <>
            <div className="content">
                    <Link to="/"><div className="logo">logo</div></Link>

                    <div className="not_found_container">

                        <h1 className="code_404">404</h1>
                        <h3 className="not_found">Sorry, we couldn't find that page.</h3>
                        <Link to="/"><div className="back_home">Back to Home page</div></Link>
                    </div>
                    


            </div>        
        </>
     );
}
 
export default PageNotFound;