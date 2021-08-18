import React from 'react'
import NavigationBar from './NavigationBar';

function AboutUs() {
  return (
    <div>
      <NavigationBar />
      <br />
      
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">About us</h2>
          <h3 class="section-subheading text-muted">
            “We don't see things as they are, We see them as we are.”</h3>
            
      </div>
      <br></br>
      <a href=""><h5>THE CYBERNETICS</h5></a>
            <p>Established in 202O, The Cybernetics is India’s most trusted giving platform for donors. 
                Our community of 1.5M+ donors and 150+ corporate partners have supported 2,000+ nonprofits, impacting 10M+ lives across India.</p>
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i class="fas fa-heartbeat"></i></div>
              <h5 class="title"><a href="">Donated Oxygen Cylinder</a></h5>
              <p class="description"> Distributed oxygen cylinders that can support a patient for 5-7 days. Like wise we arranged over 500 oxygen
                  cylinders accross India with the held of our volenteers. </p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-1"><i class="fas fa-tshirt"></i></div>
              <h5 class="title-1"><a href="">Volenteers</a></h5>
              <p class="description">We have the volenteers who worked 24/7 throuhout to help the covid pateints and their family.</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-2"><i class="fas fa-search-dollar"></i></div>
              <h5 class="title-2"><a href="">Fund Raising</a></h5>
              <p class="description">Many people forward and joined hands with us and donated for the people who really needed the money .
                  All the funds are used in helping the needy and arrenging supplies. </p>
            </div>

          
      </div>

      
          <section class="team-section mt-5"  id="team">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Founder</h2>
            <h3 class="section-subheading text-muted">---------------------------------------------------</h3>
            <div class="img-box">
                    <img src="./image/team1.jpeg" alt=""/>
                  </div>
            <h4 class="text-dark">Barsha Bhattacharya</h4>
                    <p class="text-muted">Final Year IT Engineer at Asansol Engineering College</p>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="team-member box">
                
                  <div class="content">
                   
                     </div>
                      </div>
            </div>
            
       </div>
    </div>
</section>

   
      
    </div>
  )
}

export default AboutUs
