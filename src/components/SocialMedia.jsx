import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
 
const SocialMedia = () => {
  return (
    <div className='app__social' >
       <a href="https://www.linkedin.com/in/yogesh-gautam-7b312796/" target='_blank' ><div><BsLinkedin/></div></a> 
        <a href="https://github.com/yogi2210" target='_blank' ><div><BsGithub/></div></a>
        {/* <div>
            <FaFacebookF/>
        </div> */}
    </div>
  )
}

export default SocialMedia