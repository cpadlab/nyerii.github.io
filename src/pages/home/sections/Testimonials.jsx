import React from 'react'
import { TestimonialCard } from '../components/TestimonialCard'

export const Testimonials = ({ data }) => {

    return (
        <section className='pt-20 bg-black-100 px-4'>
            
            <div>
                <h1 className='text-3xl md:text-center font-inter text-black-950 font-bold'>The heartfelt testimonials of our community</h1>
                <h2 className='text-xl md:text-center font-inter text-black-600'>From life-enhancing gadgets to unparalleled customer support, and transformative learning opportunities.</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                {data.map((testimonial, index) => (
                    <TestimonialCard testimonial={testimonial} index={index} key={index} />
                ))}
            </div>

        </section>
    )
}
