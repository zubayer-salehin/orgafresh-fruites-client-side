import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "./Testimonial.css";
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch("Testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [setTestimonial])

    return (
        <div>
            <h1 className='titleTopPadding text-center titleLine fw600'>Testimonial</h1>
            <Container>
                <Swiper className='testimonialPaddingBottom'
                    modules={[Pagination, A11y, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    pagination={{ clickable: true }}>
                    {testimonial.map(t => <SwiperSlide key={t.id} className="single-testimonial">
                        <img src={t.image} alt="" />
                        <h6>{t.name}</h6>
                        <p>{t.description.slice(0, 120) + "..."}</p>
                    </SwiperSlide>
                    )}
                    <div className='testimonial-paggination'>
                    </div>
                </Swiper>
            </Container>
        </div>
    );
};

export default Testimonial;