import "./Header.css"
import find from "../../src/assets/find.png";
import account from "../../src/assets/account.png";
import { useState } from "react";
import logo from "../../src/assets/why.png"
function Header({Product_Info}){

    const [query, setQuery] = useState("");
    console.log(query)

    const [search, setSearch] = useState(Product_Info)
    const myObject = [...Product_Info]
    if (query === ""){
        search.forEach((info)=>{
            console.log(info.title)
        })
        
    }
    else{
    
        myObject.forEach(one => {
            // const characters = [];
            // for (let i = 0; i < 1; i++) {
            //   characters.push( one.title[i]);
            //   console.log(characters.includes(query))
            // }
           var check = one.name.toLowerCase().includes(query) 
           if (check === true){
            console.log(one)
            
            // var confirm = [one];
           }else{
            // console.log(one)
           }
        })
        
    }
    // setSearch(...confirm)
    
    const trys =(id)=>{
        
        setSearch(  Product_Info.filter((li)=> li.title === id))
        
    }
    return(
        <div className="head">
            {/* <h2><i>Seller Shop</i></h2> */}
            <img className="logo" src={logo}/>
            <div className="Searcher">
            <input  className="search" type="text" name="search" placeholder="Search for items" 
            value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <img src={find} alt="find" className="find" type="submit"/>
            </div>
            <div className="profile">
            <img src={account} alt="account"/>
            </div>
        </div>
    )
}

export default Header