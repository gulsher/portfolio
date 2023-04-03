import { useState, useEffect } from 'react';
import logo from './img/IMG-2524.jpg';
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
import searchlogo from './img/search.png'
import avatar from './img/ezgif.com-optimize.gif'
import contact from './img/contact.png'

import contactEmail from './img/contact-email-min.jpg'
import emailjs, { init } from "@emailjs/browser";
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { SiMongodb,SiMysql } from "react-icons/si";
import { DiNodejs ,DiHtml5 ,DiCss3 ,DiJavascript ,DiReact,DiGit} from "react-icons/di";
import { GoLocation } from "react-icons/go";


function App() {

  const [email,setEmail] = useState("xyz@youremail.com");
  const [body,setBody] = useState("Your Message");
  const [jokes,setJokes] = useState([])
  const url = `https://official-joke-api.appspot.com/jokes/programming/random`
  const getJokes = async () => {
    fetch(url).then(resp=>resp.json()).then(data=>{
      console.log(data)
      setJokes(data)
    }).catch(e=>{
      console.log(e)
      setJokes([])
    })
  }

  useEffect(() => {
    AOS.init();
    getJokes();
  }, [])
  
const sendEmail = async e =>{
  e.preventDefault();
  await emailjs.send('service_c6p7czr', 'template_66cejes', {from_name:email,message:body}, '8kaYbFc1MmwwzErv3')
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
     Swal.fire({
      icon: 'success',
      title: 'Thanks for your email!!! I will reach you as soon as possible',
      showConfirmButton: true,
    }).then((result) => {
      
      if (result.isConfirmed) {
        window.location.reload()
        
      } else if (result.isDenied) {
        window.location.reload()
      }
    })
    
 }, function(error) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: error
  })
 });
}

const validMail =(mail) =>{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}

const handleCancel = e =>{
  e.preventDefault();
  setEmail("");
  setBody("");
}

  let skills = [{img:<DiHtml5/>,txt:'html5'},{img:<DiCss3/>,txt:'css3'},{img:<DiJavascript/>,txt:'javascript'},{img:<DiReact/>,txt:'reactjs'},{img:<DiNodejs/>,txt:'nodejs'},{img:<SiMongodb/>,txt:'mongodb'},{img:<SiMysql/>,txt:'mysql'},{img:<DiGit/>,txt:'git'}];

  return (
    <div className='page'>
    <div className='container fullview'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  
    <a className="navbar-brand" href="#"><img src={logo} width="150" height="100" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" smooth to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="#exp">Experience</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="#skills">Skills</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="#contact">Contact</Link>

        </li>
      </ul>
      
    </div>
  
</nav>
<div className='row'>
  <div className='col-lg-6 col-md-12 '>
    <div  className='img-text w-100' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <h1 className='hello'>I have</h1>
      <h1>Full Stack Development</h1>
      <h1>experience</h1>
      <p className='banner-pgph '> Hi ! I'm a Full stack (react-node js) developer - creating a complete web from the scratch. </p>
      <button className='button-send' data-bs-toggle="modal" data-bs-target="#exampleModal"> Let's Talk <span><i className="fa-sharp fa-regular fa-paper-plane"></i> </span> </button>
    </div>
  </div>
  <div className='col-lg-6 col-md-12'>
    <div data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='img-container w-100'>
    <img className='img-fluid' src={avatar} />
    </div>
  </div>

</div>
    </div>
    <section id="exp" className='bg-yellow padd-100-top fullview' >
      <div className='container '>
        <div className='row'>
        <div className='col-lg-6 col-md-12'>
        <div data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='img-text w-100'>
      <h1 className='hello-exp'>Experience</h1>
      <h1>Total I have</h1>
      <p className='banner-pgph'>I've started my journey from startup and currently I'm working in a MNC with 5+ years of total experience. </p>
      
    </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='exp-list w-100'>
          <ul>
            <li>Mahindra Comviva</li>
          </ul>
          <p>-Technical Lead Engineer</p>
          <p className='pb-50'>-Oct-19 - Present (3 years +) </p>
          <ul>
            <li>Big App Company</li>
          </ul>
          <p >-Frontend Developer</p>
          <p className='pb-50'>-June-17 - Sept-19 (2 years)</p>
          </div>
        </div>
        </div>
      </div>
    </section >
    <section id="skills" className=' padd-100-top fullview' >
      <div className='container'>
        <div className='row'>
      <div className='col-lg-6 col-md-12'>
        <div className='img-text w-100' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <h1 className='skills'>Skills</h1>
      <p className='banner-pgph '>An expert in Full stack web Development by designing , developing, debugging and solving complex problems through my skills and experience .</p>
      <p className='banner-pgph'>Below are my primary skills, apart from that i've good knowledge of Docker, AWS ,Redux ,Jest(Testing library),Redis ,JIRA, Team mangement ,supervising juniors, good hands on Linux machine and Windows.</p>
    </div>
    <ul className='skill-list w-100' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      {skills.length && skills.map((list,key)=>{
        return <li key={key}>
          <span>{list.img} </span>
          <p className='text-muted'>{list.txt}</p>
        </li>
      })}
    </ul>
        </div>
      <div className='col-lg-6 col-md-12'>
        <ul className='skill-bar w-100' data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <li>
            <p>html5</p>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "91%"}}>91%</div>
</div>
</li>
<li>
  <p>css3</p>
<div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "85%"}}>85%</div>
</div>
</li>
<li>
  <p>javascript</p>
<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "88%"}}>88%</div>
</div>
</li>
<li>
  <p>reactjs</p>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "81%"}}>81%</div>
</div>
</li>
<li>
  <p>nodejs</p>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "87%"}}>87%</div>
</div>
</li>
<li>
  <p>mysql</p>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "83%"}}>73%</div>
</div>
</li>
<li>
  <p>mongodb</p>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "80%"}}>80%</div>
</div>
</li>
<li>
  <p>git</p>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning" style={{width: "82%"}}>82%</div>
</div>
</li>
</ul>
</div>
</div>
      </div>
    </section>
    <section id="contact" className='bg-yellow padd-100-top fullview'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6 col-md-6'>
        <div className='img-text w-100' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <h1 className='contact'>Contact</h1>
      <h1>Let's connect</h1>
      
      
    </div>
          <div className='contact-list w-100' data-aos="fade-right" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <ul>
            <li> <MdOutlineMailOutline/> Email</li>
          </ul>
          <p className='text-dark' > ahmed.gulsher@gmail.com</p>
          
          <ul>
            <li><GoLocation/> Location</li>
          </ul>
          <p className='text-dark' >  Bangalore,INDIA</p>
      <button className='button-send mb-3' data-bs-toggle="modal" data-bs-target="#exampleModal"> Let's Talk <span><i className="fa-sharp fa-regular fa-paper-plane"></i> </span> </button>
          </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <img src={contact} className="contact-img w-100" data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" width="500" />
        </div>
        </div>
        <div className='jokes'>
          <h5>Joke of the day</h5>
          <p>{jokes.length? `${jokes[0].setup} ${jokes[0].punchline}`:`No Jokes available for today ! All developers are busy with the work`} <button className='button-send-sm    ms-3' onClick={getJokes} >One More Joke <i className="fa-solid fa-bolt"></i></button> </p>
          
        </div>
        <div className='footer'>
        <div className='row'>
          <div className='col-lg-4 col-md-4'>
           <p className='text-left-toggle'> &#169; {new Date().getFullYear() }  All Right Reserved </p>
          </div>
          <div className='col-lg-4 col-md-4'>
            <p className='text-center-toggle'>Design & Developed by Gulsher Ahmed</p>
          </div>
          <div className='col-lg-4 col-md-4'>
            <p className='text-right-toggle'>ahmed.gulsher@gmail.com</p>
          </div>

        </div>
        </div>
      </div>
    </section>

    <div className="modal modal-lg fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body custom-modal">
        <h3 className='text-uppercase text-center text-muted my-4'>Love to hear from you </h3>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img src={contactEmail} className="img-fluid" />
          </div>
          <div className='col-12 col-md-6'>

        <form>
          <div className="mb-3">
            
            <input  placeholder='Your Email' type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className={(email.length && validMail(email)) ? `form-control`: `form-control is-invalid`} id="recipient-name" />
            <div className='invalid-feedback inv-feed-custom'>
              Enter valid email
            </div>
          </div>
          <div className="mb-3">
            
            <textarea className={body.length < 1 ? `form-control is-invalid`:`form-control` } placeholder='Your Message' value={body} onChange={(e)=>setBody(e.target.value)} id="message-text"></textarea>
            <div className='invalid-feedback inv-feed-custom'>
              Message body cannot be empty
            </div>
          </div>
          <div className='mb-3'>
            <button className='button-send' disabled={(email.length && body.length && validMail(email))?false:true} onClick={sendEmail}> Send <span><i className="fa-regular fa-paper-plane"></i></span> </button>
            <button className='button-send ms-3 bg-warning' data-bs-dismiss="modal" onClick={handleCancel}>Cancel <span><i className="fa-solid fa-xmark"></i></span> </button>
          </div>
        </form>
        </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
