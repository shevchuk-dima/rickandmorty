import {useEffect} from 'react';

function AboutUs(props){

    useEffect(()=>{
        props.setHeader("About us");
    }
    ,[]);
    
    return (<div>
        <p>About Us</p>
    </div>);
}

export default AboutUs;