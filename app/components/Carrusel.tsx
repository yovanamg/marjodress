'use client'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Carrusel() {

  return (
    <Carousel autoPlay={true} showThumbs={false} showStatus={false}>
        <div>
            <img src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd_bbn_prom_2024_1-3Aj7FcBAFEeBKb0N0OTQh7JO5yT4JE.jpg" />
        </div>
        <div>
            <img src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd_bbn_wedding_2024-JfRCcmybdPIpe5XEfOu1gJO0zpmOcs.jpg" />
        </div>
        <div>
            <img src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/ld_bbn_bridesmaid_2024-4W9fX7MH4614jkSOkIHDwrulb9mcCN.jpg" />
        </div>
    </Carousel>
  )
}
