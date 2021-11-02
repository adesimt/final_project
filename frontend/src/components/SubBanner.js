import './profileBanner/ProfileBanner.css';

const SubBanner = ({ name, subNumber1, subNumber2 }) => {



    return ( 

        <>
            <div className="sub_banner_info">
                <div className="sub_elements">
                    <div className="sub_element_name">{name}</div>
                    <div className="sub_element_number">{subNumber1}</div>
                </div>

                <div className="sub_elements">
                    <div className="sub_element_name">Classes</div>
                    <div className="sub_element_number">{subNumber2}</div>
                </div>
            </div>
        
        </>
     );
}
 
export default SubBanner;