

import AnimatedContainer from '@/components/AnimatedContainer'
import React from 'react'

const Home = () => {
  return (
    <div className='m-4 p-4'>
      <div id="topDiv" className='p-4' >
      <h1 className="font-bold text-black text-2xl text-center p-2">Joseph Powder</h1>
      <p className='text-center'>4135 N. 17th St</p>
      <p className='text-center pb-1'>Phoenix, AZ 85016</p>
      
      <h5 className="font-bold text-black text-center">Title:</h5>
      <h2 className="font-bold text-black text-xl text-center">Software Engineer</h2>
      </div>
      <hr/>
      <div className='p-4'>
      <h5 className="font-bold text-black ">Professional Summary:</h5>
      <p>Results-driven Frontend Software Developer with 3+ years of experience designing, 
        developing, and deploying scalable web applications using ReactJS and NextJS. 
        Adept at building high-performance UI/UX experiences, integrating backend services with Firebase and MySQL, 
        and optimizing applications for speed and efficiency. Strong problem-solver passionate about clean, maintainable code and continuous learning. 
        Proven ability to enhance internal systems and contribute to business growth through technology-driven solutions.</p>
      </div>

      <div>
        <h5 className="font-bold text-black">Technologies I've worked with</h5>
        <div className='p-4'>
          <h5 className="font-bold">Frontend Technologies</h5>
        <div id="frontend" className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-1'>
        <AnimatedContainer delay={150} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-100' >React</p></AnimatedContainer>
        <AnimatedContainer delay={200} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-gray-200'>Next.js</p></AnimatedContainer>
        <AnimatedContainer delay={250} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-red-300'>Angular</p></AnimatedContainer>
        <AnimatedContainer delay={300} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-400'>Typescript</p></AnimatedContainer>
        <AnimatedContainer delay={350} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-500'>JQuery</p></AnimatedContainer>
        <AnimatedContainer delay={400} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-200'>Tailwind</p></AnimatedContainer>
        <AnimatedContainer delay={450} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-purple-500'>Bootstrap</p></AnimatedContainer>
        <AnimatedContainer delay={500} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-cyan-400'>Primereact</p></AnimatedContainer>
        <AnimatedContainer delay={550} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-orange-500'>HTML</p></AnimatedContainer>
        <AnimatedContainer delay={600} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-600'>CSS</p></AnimatedContainer>
        <AnimatedContainer delay={650} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-pink-500'>SASS</p></AnimatedContainer>
        <AnimatedContainer delay={700} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-yellow-300'>Vanilla JavaScript</p></AnimatedContainer>
        </div>
        </div>
        <hr/>
        <div className='p-4'>
          <h5 className="font-bold">Backend Technologies</h5>
        <p>Node.js</p>
        <p>Express</p>
        <p>PHP</p>
        <p>MySQL</p>
        <p>Firebase</p>
        <p>MongoDB</p>
        </div>

        <hr/>
        <div className='p-4'>
          <h5 className="font-bold">CMS Tools</h5>
        <p>WordPress</p> 
        <p>Wix</p>
        <p>Square</p>
        </div>

      </div>
      <hr/>
      <br/>
      <AnimatedContainer delay={200} visibleClass="!slide-in-from-top-0 zoom-in-75" className="shadow-lg outline outline-black/5">
        <div>
          <h1>This is my first animated container</h1>
        </div>


      </AnimatedContainer>
    </div>
  )
}

export default Home