import { useState } from "react";

const Test = () => {

    const [items, setItem] = useState({
        checkedObj:null,
        pizzas:[{name: 'Mozarella'},{name: 'BBQ chicken'},{name: 'Cheese Calzone'},{name: 'Thai pizza'},{name: 'Margherita pizza'},{name: 'Grilled pizza'}]
    });
    //const [isChecked, setIsChecked] = useState(false)

    const makeCheck = (index) => {
        setItem({ ...items, checkedObj: items.pizzas[index]});
        //setIsChecked(!isChecked)

    }

    const handleCheck = (index) =>{
        if(items.pizzas[index] === items.checkedObj){
            return console.log(items.pizzas[index].name);
        }else{
            return null;
        }
    }

    // const handleChange = (e) => {
    //     setIsChecked(!isChecked);

    //     if(!isChecked){
        
    //         return console.log(e.target.name)
    //     }else{
    //         return null;
    //     }
    // }

    return ( 
        <>
            <div className="test_app">
                Select your pizza topping:

                {items.pizzas.map((item, index) => (

                    <div className="topping" key={index}>
                    <input 
                        type="checkbox" 
                        id="topping" 
                        name={item.name} 
                        value="Paneer"
                        checked={handleCheck(index)}
                        onChange={() => makeCheck(index)}
                        
                         />
                        {item.name}
                    </div>
                ))}
                
            </div>
        </>
     );
}
 
export default Test;