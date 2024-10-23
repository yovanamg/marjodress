'use client'
import React from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "../page.module.css";

const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
};
export default function Products() {

  return (
    <AliceCarousel 
    disableDotsControls
    disableButtonsControls
    autoPlay={true}
    mouseTracking responsive={responsive}>
        <Link href="#" >
            <img src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cc0688_silvernude-uRSR0p1KoaTBpZrIGdxqXk2Tk5966H.jpg" />
        </Link>
        <Link href="#">
            <img  className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cc385_silvernude_2-AiO24SrJHEbLpVuWbLnjF4cyOzhOKw.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd0230_smokyblue-YmcjE7Bwqbgq3rGJPosLhBF7rHj5uL.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd0238_silvernude-RHj6l0yRRpe1XNt1LphQVxCRjLj7JK.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd868_greenary_1-csouPYbefv6tm3toE0yM7IFrBLcx4O.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd780_platinum-black_2-I9WopBwX93C8dAaDxkvUfn9LlazTD0.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd786_sage_front-UNbwVNTuf8617tJjv8JAKKr8OP50ML.jpg" />
        </Link>
        <Link href="#" >
            <img className={styles.marginRProduct} src="https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd0230_red-45aGaTwaxgNOlj2wPZfJnCpVh0j4zC.jpg" />
        </Link>
    </AliceCarousel>
  )
}
