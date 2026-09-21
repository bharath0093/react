import './layout.css';
import {Outlet,Link} from "react-router-dom";
const Layout=()=>{ 
	return(
		<>
		<nav>
		<div>
		<center>
		<marquee direction="down">
		<img width="33%" src="/college.jpg"></img><img width="33%" height="5%" src="/college.jpg"></img><img width="33%" src="/college.jpg"></img>
		</marquee>
		<table   width="80%">
		<tr className="filllink">
		<td><Link className="disabled-link" to="/">Home</Link></td>
		<td><Link className="disabled-link" to="Program">Program</Link></td>
		<td><Link className="disabled-link" to="Contact">Contact</Link></td>
		<td><Link className="disabled-link" to="/About">About</Link></td>
		<td><Link className="disabled-link" to="/Course">Course</Link></td>
		</tr>
		</table>
		</center>
		</div>
		</nav>
		
		<Outlet />
		</>
	);
}
export default Layout;
