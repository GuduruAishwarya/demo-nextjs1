import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
// import Link from 'next/link'
// import SSG from './posts/details'
// import tt from '@/imgs/tata-neu.jpg'
import React from 'react'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
      <Link href="/posts">Posts</Link>
      <Link href="/posts/comments">Comments</Link>
      <Link href="/posts/details">SSG</Link>
      {/* <SSG />  */}
      
      {/* <Image src={tt} placeholder="blur" alt="Tata Neu " layout="fixed" /> */}
        <h1 className={styles.title}>
          Welcome To <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <img src="/images/girl.png" alt="Girl "/>
      <div>
      {/* <Image src="/images/one.jpg" loading="lazy" placeholder="blurDataURL" alt="one " height={500} width={500}  />
      <Image src="/images/two.jpg" loading="lazy" placeholder="blurDataURL" alt="Two " height={500} width={500}/>
      <Image src="/images/three.png"loading="lazy" placeholder="blurDataURL" alt="Three " height={500} width={500} />
      <Image src="/images/four.jpg" loading="lazy" placeholder="blurDataURL" alt="Four " height={500} width={500}  />
      <Image src="/images/five.jpg"  loading="lazy"placeholder="blurDataURL" alt="Five " height={500} width={500} /> */}
     
      </div>
     
     
    </div>
  )
}
