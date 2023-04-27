import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' bg-black p-5 text-white font-bold text-[1.1em] sticky top-0  '>
        <ul className=' flex gap-8 items-center '>
            <li><Link href={"/"}>Breaking News</Link></li>
            <li><Link href={"/search"}>Search</Link></li>
           
        </ul>
                
 
      
                    {/* <select name="" id="">
                             <option value=""> <Link href={"/categoties/business"}>Business  </Link></option>
                         <option value="">     <Link href={"/categoties/entertainment"}>Entertainment  </Link></option>
                              <option value=""><Link href={"/categoties/general"}>General </Link></option> 
                            <option value="">  <Link href={"/categoties/sport"}>Sport</Link></option>  
                    </select> */}
              
     
    
      </nav>
    </div>
  )
}

export default Navbar
