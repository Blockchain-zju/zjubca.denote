import React from 'react';
import { BrowserRouter as Router, Route ,Redirect }from "react-router-dom";
export class Redirects extends React.Component {
    render() {
       return (
           <Redirect from='/' to='/home'/>
         );
     }
  }
  
  export default Redirects;