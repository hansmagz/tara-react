import React from 'react';
import Hero from '../components/hero'
import Why from '../components/why'
import Services from '../components/services'
import Area from '../components/area'
import Test from '../components/test'
import Leadership from '../components/leadership'
import News from '../components/news'
import Expand from '../components/expand'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Why></Why>
      {/* <Test></Test> */}
      <Services></Services>
      <Area></Area>
      <Leadership></Leadership>
      {/* <News></News> */}
      <Expand></Expand>
      {/* <Section></Section> */}
      {/* <Sponsors></Sponsors>
      <Ready></Ready>
      <Leader></Leader> */}
    </>
  );
}