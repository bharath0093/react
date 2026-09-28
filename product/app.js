import './Application.css';
import { useState } from "react";

function Application(){
	const [list,setlist]=useState([]);
	const [value,setvalue]=useState("");
	const [error,setError]=useState(false);
	const addtoList=()=>{
		if (value.trim()===""){
				setError(true);
				}
				else{
		let tempArr=list;
		tempArr.push(value);
		setlist(tempArr);
		setvalue("");
		setError(false);
		}
}
		
		const deleteItem=(index)=>{
			let temp=list.filter((item,i)=>i!==index);
			setlist(temp)
		}
		
		const handlevalue=(e)=>{
			setvalue(e.target.value);
		
		};
		const handleError=()=>{
			if (error){
				return <h2 id="er">Enter the field</h2>;
			}
		}
			
	
	return(
		<center>
		<div className="App">
		<fieldset >
		<table  >
		<tr>
		<h1>
		product catalog
		</h1>
		{handleError()}
		<input type="text" value={value} onChange={handlevalue} /><br />
		<button className="color" onClick={addtoList}>click here</button><br />
		
		<ol>
		{list.map((item,i)=> <li onClick={()=>deleteItem(i)}>{item}</li>)}
		
		</ol>
	
		<h>click on product to delete</h>
	   </tr>
		</table>
		</fieldset>
		</div>
		</center>
	);
	
};
export default Application;
