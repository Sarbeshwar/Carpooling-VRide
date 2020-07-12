import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import "./EmbeddedVideo.css";
class EmbeddedVideo extends Component {
  render() {
    return (
      <Container>
        <center>
          <h3 id="forColorOut">VRide Is A Simple Carpooling Application Developed Inorder To Take A
                Step Towards A Better Environment</h3>
        </center>
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center" >
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">The VRide Advantage</h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-base">We simplified car rentals, so you can focus on what's important to you.</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Fuel Cost Included</h2>
                  <p class="leading-relaxed text-base">Don't worry about fuel! All fuel costs are included.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">No Hidden Charges</h2>
                  <p class="leading-relaxed text-base">We dont believe in comission, serving you is our topmost priority.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Flexi Pricing Packages</h2>
                  <p class="leading-relaxed text-base">One size never fits all! Choose the right time and kilometers.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Go Anywhere</h2>
                  <p class="leading-relaxed text-base">Our cars have all-India permits.Just remember to pay state tolls and entry taxes.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">24X7 Roadside Assistance</h2>
                  <p class="leading-relaxed text-base">We have round-the-clock, pan India partners. Help is never far away from you.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg" id="forColor">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Damage Insurance</h2>
                  <p class="leading-relaxed text-base">All your bookings include damage insurance! Drive safe, but don’t worry!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <center><iframe width="600" height="515" src="https://www.youtube.com/embed/pGzIicX3NOQ"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe></center> */}
      </Container>
    );
  }
}

export default EmbeddedVideo;