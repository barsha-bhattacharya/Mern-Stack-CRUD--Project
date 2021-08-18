import React from 'react'
import NavigationBar from './NavigationBar';

function Home() {
  return (
    <div>
      <NavigationBar />
      <br />
      <div>
     <img src="./image/covid (2).jpg" alt="Example1" width="500" height="300"/>
     </div>
      
      
      
          
     
      <section class="mt-5 page-section" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase font-weight-bold">THE CYBERNETICS CAMPAIGN</h2>
                <h3 class="section-subheading text-muted">
                “You make a living by what you get. You make a life by what you give.”</h3>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-danger"></i>
                      <i class="fas fa-hand-holding-medical fa-stack-1x fa-inverse"></i>
                      
                    </span>
                    <h4 class="my-3">HELPING HAND</h4>
                    <p class="text-muted">“Alone we can do so little; together we can do so much.” .</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-warning"></i>
                      <i class="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                      </span>
                    <h4 class="my-3">GET INSPIRATION</h4>
  <p class="text-muted">"We are thr new generation of our country, if we won't come forward and take a step to help the needy who will. we cant wait for someone, we have to that someone for the society."</p> 
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fas fa-circle fa-stack-2x text-success"></i>
                      <i class="fas fa-tshirt fa-stack-1x fa-inverse"></i>
                    </span>
                   
                    <h4 class="my-3">BECOME VOLENTEER</h4>
                    <p class="text-muted">"The smallest act of kindness is worth more than the grandest intention."</p>
                </div>
            </div>
        </div>                         
    </section>
      
      
    </div>
  )
}

export default Home
