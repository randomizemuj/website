import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import '../css/base.css'
import '../css/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Events = () => {
  return(
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
  );
}

export default Events;


