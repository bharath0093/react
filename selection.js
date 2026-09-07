import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mno, setmno] = useState('');
  const [email, setemail] = useState('');
  const [rno, setrno] = useState('');
  const [address, setaddress] = useState('');
  const [selected,setselected] = useState('');
  const [error, seterror] = useState('');
  const [submitted,setsubmitted] = useState('');

  const shoot=(dt)=>{
	
    if(name==="" || mno==="" || email==="" || rno==="" || address===""){
		setsubmitted(false);
		seterror(true);
	}
	else{
		setsubmitted(true);
		seterror(false);
	};
	
   
}; 
	
  const successsmessage=()=>{
	return(
		<div 
		className="success"
		style={{
			display: submitted ? '' :'none',
		}}>
		 <h2 id="bh"> successfully registeded</h2>
		 </div>
	);
  };
  
  const errormessage=()=>{
  	return(
  		<div
  		className="error"
  		style={{
  			display:error ? '' :'none',
  		}} >
  		 <h3 id="cr">correctly enter all fields</h3>
		 </div>
  	);
    };
  
  

  const checkName = (e) => {
    setName(e.target.value);
	setsubmitted(false);
  };
  const checkmno = (e) => {
      setmno(e.target.value);
	  setsubmitted(false);
  };
  const checkemail = (e) => {
	  setemail(e.target.value);
	  setsubmitted(false);
  };
  const checkrno = (e) => {
	  setrno(e.target.value);
	  setsubmitted(false);
  };
  const checkaddress = (e) => {
	  setaddress(e.target.value);
	  setsubmitted(false);
  };
  const checkselect = (e) => {
    setselected(e.target.value);
    setsubmitted(false);
   };
 
 return(
  <div>
  <center>
  <h1>Registration form</h1>
 
  
  <table border="6" cellspacing="2" cellpadding="2" text-align="center">
  
  <tr>	
  <td><label>Name : </label>
  <input type="text" onChange={checkName} value={name} /></td>
  <br />
  </tr>
  
  <tr>
  <td><label>Mobile no : </label>
  <input type="number" onChange={checkmno} value={mno} /></td>
  <br />
  </tr>
	
  <tr>
  <td><label>E-mail : </label>
  <input type="email" onChange={checkemail} value={email} /></td>
  <br />
  </tr>
	  
  <tr>
  <td><label>Reg no : </label>
  <input type="text" onChange={checkrno} value={rno} /></td>
  <br />
  </tr>
  <tr><td> <label>program</label>
  			 <select
    		        value={selected}
    		        onChange={checkselect}
    		      >
    		        <option value="">-- Select --</option>
    		        <option value="JavaScript">JavaScript</option>
    		        <option value="Python">Python</option>
    		        <option value="Java">Java</option>
    		        <option value="C++">C++</option>
    		      </select>

    		      
    		   
    			 </td></tr>s
  <tr>
  <td><label>Address : </label> 
  <input type="text" onChange={checkaddress} value={address} /></td>
  <br />
  </tr>
 
  <tr>
  <td colspan="2" align="center">
  <button  onClick={shoot}> SUBMIT </button>
  </td>
  </tr>

  <div className="messages">
  	{errormessage()}
  {successsmessage()}
  </div>
  </table>
  
  </center>
  
  </div>
  
  );
  
}



export default App;
