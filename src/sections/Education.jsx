import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { education } from '../constants'
import GlowCard from '../components/GlowCard'

const Education = () => {
    return (
        <section id="education" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Education Journey"
                    sub="📘 Academic background and achievements"
                />


                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {education.map((item, index) => (
                        <GlowCard card={item} key={index} index={index}>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <p className="font-bold text-lg">{item.degree}</p>
                                    <p className="text-white-50">{item.institution}</p>
                                    <p className="text-white-50 text-sm">{item.duration}</p>
                                </div>
                                <p className="text-white-50">{item.details}</p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education