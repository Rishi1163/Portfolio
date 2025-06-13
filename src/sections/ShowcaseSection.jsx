import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, [])

    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <a href='https://movieorate.netlify.app/' target='_blank' className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/myProject.png" alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>Discover & Rate Movies with a Sleek, Real-Time Platform called <span className="text-yellow-400">Moiveo</span>.</h2>
                            <p className="text-white-50 md:text-xl">
                                A dynamic movie rating app built with the MERN stack, offering real-time search, ratings, and user-friendly interactions powered by RESTful APIs.
                            </p>
                        </div>
                    </a>
                    {/* Right */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <a href='https://socketly.netlify.app/' target='_blank' className="project" ref={project2Ref}>
                            <div className='image-wrapper bg-[#0C1721]'>
                                <img src="/images/myProject2.png" alt="" className='w-full' />
                            </div>
                            <h2>Socketly - A Chatting Platform</h2>
                        </a>

                        <a href='https://notecodee.netlify.app/' target='_blank' className="project" ref={project3Ref}>
                            <div className='image-wrapper bg-[#fdd7fe]'>
                                <img src="/images/myProject3.png" alt="" className='w-full' />
                            </div>
                            <h2>Notecode - A Code Sharing Platform</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
