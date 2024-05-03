import { useNavigate } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Stayle.css'

import img1 from "./assets/register-company-online.png"

import img2 from "./assets/360_F_353995594_6AW7CYzgqkSTCMktfFSm2XyjvLDzauDX.jpg"

import img3 from "./assets/Employee-Experience-Consulting-1536x804.jpeg"

import img4 from "./assets/Screenshot 2024-04-09 112826 (1).png"
import img5 from "./assets/download.png"
import img6 from "./assets/download (1).png"
import img7 from "./assets/1676478891_time-7783494_1676478891.png"
import img8 from "./assets/Resource_Management-1800.jpg"
import img9 from "./assets/integration_still_2x.gif"
import img10 from "./assets/Leader-Team-pfxhstv0kzr6ghcb54a9esjlcdyxxuzyjt0g9ql1fs.png"


function LandingPage() {

  const navigate = useNavigate();

  return (
  <div>
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          >
          <SwiperSlide>
          <div className="swiper-slide slide" style={{background: `url(${img1}) no-repeat`}}>
              <div className="content">
                <span><h3>Our customers depend on us</h3></span>
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide slide" style={{background: `url(${img2}) no-repeat`}}>
              <div className="content">
                <span><h3>This service is worth a try</h3></span>
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide slide" style={{background: `url(${img3}) no-repeat`}}>
              <div className="content">
                <span><h3>Your satisfaction matters to us</h3></span>
              </div>
          </div>
          </SwiperSlide>
          ...
        </Swiper>
        </div>
        {/* <div className="swiper-button-next swiper-button-black"></div>
        <div className="swiper-button-prev swiper-button-black"></div> */}
    </div>
    </section>

    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <img src={img4} alt="VES-XP Logo" className="tent-1" />
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a style={{cursor: "pointer"}} onClick={() => navigate("/splash")}>LOGIN</a></li>
      </ul>
    </nav>

    <div className="containerL" id="about">
      <h1>About Us</h1> <br/>
      <div className="container__left">
        <h1>VES-XP</h1>
        <h3>inVESt in your time and effort</h3>
      </div>
      <div className="container__right">
        <div className="images">
          <img src={img5} alt="tent-1" className="tent-1" />
          <img src={img6} alt="tent-2" className="tent-2" />
        </div>
        <div className="content">
          <h5> At VES-XP, we empower developers with the tools, support, and structure to thrive in software development. </h5>
          <h2> We transform complex project ideas into successful outcomes through collaboration, innovation, and precision. </h2>
          <p>
            As trusted partners, we enable developer excellence
          </p>
        </div>
      </div>
    </div>

    <div className="containerL" id="services">
      <h1 className="services-heading">Our Services</h1> <br/>
      <div className="cont">
        <div className="box">
          <img src={img7}/><br/>
          <span><h4>Manage Your Time</h4></span>
        </div>
        <div className="box">
          <img src={img8}/><br/>
          <span><h4>Manage Your Resources</h4></span>
        </div> 
        <div className="box">
          <img src={img9}/><br/>
          <span><h4> Track Your Progress</h4></span>
        </div>
        <div className="box">
          <img src={img10}/><br/>
          <span><h4>Involve Your Customer</h4></span>
        </div>
      </div>
    </div>

    <footer className="footer"id="contact">
      <div className="contact-info" >
        <h3>Contact Us</h3>
        <p>Email: ves-xp@gmail.com</p>
      </div>
      <div className="rights-info">
        <p>All rights reserved &copy; 2024</p>
        <p>Made in Saudi</p>
      </div>
    </footer>
  </div>
  );
}

{/* // <div className="landing-page">
    //   <h1>Welcome to Your App</h1>
    //   <p>Get started by registering or logging in</p>
    //   <Link to="/register">
    //     <button>Register</button>
    //   </Link>
    //   <Link to="/login">
    //     <button>Login</button>
    //   </Link>
    // </div> */}

export default LandingPage;
