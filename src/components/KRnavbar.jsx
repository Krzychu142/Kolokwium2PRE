import React, {Component} from "react";
import { Link } from "react-router-dom";

class KRnavbar extends Component {
    render() {
        return(
            <>  
            <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#"><Link to='/'>Posts</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/home'>Home</Link></a>
  </li>
</ul>
            </>
        );
    };
}

export default KRnavbar;