import React from 'react'
import Obj from '../assets/icons/GlTF_logo.svg.png'
import Glb from '../assets/icons/model.png'
import Animate from '../assets/icons/animate.png'

function Feature() {
  return (
    <div>
      <div class='col-12 mt-3 mb-1'>
        <h4 class='text-uppercase'>Minimal Steps</h4>
        <p>Supported Model Types - OBJ , GLTF</p>
      </div>

      <div class='col-12 mt-3 mb-1 mb-4'>
        <div class='row'>
          <div class='col'>
            <article class='features-card'>
              <div class='features-icon audio'>
                <img class='zmdi zmdi-audio' src={Obj} width='50'></img>
              </div>
              <div class='features-text'>
                <h2>Search it</h2>
                <p>Search and find your want 3D objects and download it</p>
              </div>
            </article>
          </div>
          <div class='col'>
            <article class='features-card'>
              <div class='features-icon audio'>
                <img class='zmdi zmdi-audio' src={Animate} width='50'></img>
              </div>
              <div class='features-text'>
                <h2>Download It</h2>
                <p>Download your model and import it to Lumoz</p>
              </div>
            </article>
          </div>
          <div class='col'>
            <article class='features-card'>
              <div class='features-icon audio'>
                <img class='zmdi zmdi-audio' src={Glb} width='50'></img>
              </div>
              <div class='features-text'>
                <h2>Import to Lumoz</h2>
                <p>Import Lumoz Studio and Placed object in your Live Stream</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
