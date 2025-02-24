

import AnimatedContainer from '@/components/AnimatedContainer'
import React from 'react'

const Home = () => {

  const delay = Math.floor(Math.random() * 500);
  return (
    <div className='m-4 p-4'>
      <div id="topDiv" className='p-4 mb-8 shadow-xl rounded-2xl outline outline-black/5' >
      <h1 className="font-bold text-black text-2xl text-center p-2">Joseph Powder</h1>
      <p className='text-center'>4135 N. 17th St</p>
      <p className='text-center pb-1'>Phoenix, AZ 85016</p>
      
      <h5 className="font-bold text-black text-center">Title:</h5>
      <h2 className="font-bold text-black text-xl text-center">Software Engineer</h2>
      </div>
      
      {/* <AnimatedContainer delay={delay} visibleClass="slide-in-from-top-0 zoom-in-75"> */}
      <div id="profSum" className='p-4 shadow-xl rounded-2xl outline outline-black/5 mt-4'>
      <h5 className="font-bold text-black text-3xl ">Professional Summary:</h5>
      <p>Results-driven Frontend Software Developer with 3+ years of experience designing, 
        developing, and deploying scalable web applications using ReactJS and NextJS. 
        Adept at building high-performance UI/UX experiences, integrating backend services with Firebase and MySQL, 
        and optimizing applications for speed and efficiency. Strong problem-solver passionate about clean, maintainable code and continuous learning. 
        Proven ability to enhance internal systems and contribute to business growth through technology-driven solutions.</p>
      </div>
      {/* </AnimatedContainer> */}
      {/* <AnimatedContainer delay={delay}> */}
      <div id="profExp" className='p-4 mt-4 mb-4 shadow-xl rounded-2xl outline outline-black/5'>
        <h2 className="font-bold text-black text-2xl">Professional Experience:</h2>
        <h3 className='text-xl ml-4'>Frontend Web Developer/Software Customer Service Manager | JJ Safety LLC | August 2021 - Present</h3>
        <ul className="list-disc m-4 mr-6 ml-8">
          <li>Designed and deployed high-performance ReactJS and NextJS applications, improving site performance and scalability.</li>
          <li>Integrated Firebase and MySQL databases to support real-time data interactions and authentication.</li>
          <li>Maintained and enhanced WordPress websites, ensuring responsiveness, SEO, and user accessibility.</li>
          <li>Developed custom scripts and automation workflows for Zoho CRM, streamlining business processes.</li>
          <li>Created marketing design assets using Adobe Creative Suite, enhancing company branding and outreach.</li>
          <li>Self-taught Swift and Xcode to expand mobile development capabilities, exploring iOS app development.</li>

        </ul>
        <hr/>
        <h3 className='text-xl ml-4 mt-4'>Assistant Customer Service Manager | JJ Safety LLC | March 2017 - August 2021</h3>
        <ul className="list-disc m-4 mr-6 ml-8">
          <li>Designed and deployed high-performance ReactJS and NextJS applications, improving site performance and scalability.</li>
          <li>Integrated Firebase and MySQL databases to support real-time data interactions and authentication.</li>
          <li>Maintained and enhanced WordPress websites, ensuring responsiveness, SEO, and user accessibility.</li>
          <li>Developed custom scripts and automation workflows for Zoho CRM, streamlining business processes.</li>
          <li>Created marketing design assets using Adobe Creative Suite, enhancing company branding and outreach.</li>
          <li>Self-taught Swift and Xcode to expand mobile development capabilities, exploring iOS app development.</li>

        </ul>
        <hr/>
        <h3 className='text-xl ml-4 mt-4'>Quality Assurance | Convergys(Now Concentrix)| September 2014 - December 2016</h3>
        <ul className="list-disc m-4 mr-6 ml-8">
          <li>Designed and deployed high-performance ReactJS and NextJS applications, improving site performance and scalability.</li>
          <li>Integrated Firebase and MySQL databases to support real-time data interactions and authentication.</li>
          <li>Maintained and enhanced WordPress websites, ensuring responsiveness, SEO, and user accessibility.</li>
          <li>Developed custom scripts and automation workflows for Zoho CRM, streamlining business processes.</li>
          <li>Created marketing design assets using Adobe Creative Suite, enhancing company branding and outreach.</li>
          <li>Self-taught Swift and Xcode to expand mobile development capabilities, exploring iOS app development.</li>

        </ul>
      </div>
      {/* </AnimatedContainer> */}

      <div className='p-4'>
        <h5 className="font-bold text-black">Technologies I've worked with</h5>
        <div className='p-4'>
          <h5 className="font-bold">Frontend</h5>
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
        <AnimatedContainer delay={700} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-yellow-300'>JavaScript</p></AnimatedContainer>
        </div>
        </div>
        <hr/>
        <div className='p-4' >
          <h5 className="font-bold">Backend</h5>
          <div id="backend" className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-1'>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-emerald-400'>Node.js</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-gray-300'>Express.js</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-indigo-400'>PHP</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-500'>MySQL</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-orange-500'>Firebase</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-green-500'>MongoDB</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-red-500'>Swift</p></AnimatedContainer>
        </div>

        </div>

        <hr/>
        <div className='p-4'>
          <h5 className="font-bold">CMS Tools</h5>
          <div id="cms" className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-1'>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-blue-500'>Wordpress</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-orange-500'>Wix</p></AnimatedContainer>
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75"><p className='bg-green-500'>Square</p></AnimatedContainer>

          </div>
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