import React from 'react';
import './Profile.css';
let  SCR= (props)=>{ 
        let base=[];
        let text;
        let data;
        let i=0;
    let Opt=()=><div>
        {
            alert("Kj"),
                text = document.getElementById('value').value,
                data=text.split(''),
                //data=[1,2,3,4,5,5,6],
                data.map( p => <div className="padd">
                    
                        <div className="pad">
                            {document.getElementById("result").innerHTML =p}
                            <textarea name="" id="" cols="8" rows="5"><h2 id="result"></h2></textarea>
                        </div>
                        
                    
                </div>)
        }
       </div>
    
    return <div>
       {
        <div>
            <div><textarea name="" id="value" cols="30" rows="3"></textarea></div>
           <div><button onClick={Opt}>Enter</button></div>
            <div>
                
            </div>
           
       </div>
       

       }
       </div>
}
export default SCR;