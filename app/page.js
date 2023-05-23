import Image from 'next/image'
import styles from './page.css'

export default function Home() {
  return (
    <div className='main'>
      <div className='header'>
        <Image src={'/logo-horizontal.svg'} alt='logo' width={250} height={79}></Image>
      </div>
      <div className='banner-section'>
        <Image 
          className='image'
          src={'/hero-image.jpeg'} alt='daniel-rubin.jpg' width={338} height={500}></Image>
        <div className='copy'>
          <h2>Litigating matters that matter with compassion, skill, and excellence.</h2>
          <div className='contact-button'>
            <button className='btn btn-primary'>Contact</button>
          </div>
        </div>
      </div>
      <div className='about-section'>
        <Image className='image' src={'/profile-pic.png'} alt='about-daniel' height={329} width={307}></Image>
        <div className='copy'>
          <h2>I&#39;m Danel Rubin. My insatiable quest for justice shines through my willingness to fight battles that matter.</h2>
          <div className='about-button'>
            <button className='btn btn-secondary'>About Daniel</button>
          </div>
        </div>
        {/* put in some blurb about Danny and a photo with link to /about page */}
      </div>
      <div className='practice-areas-section'>
        <div className='copy'>
          Rubin Law represents individuals in personal injury, wrongful death, and employment matters.
          Daniel Rubin tirelessly serves members of the community who have been wronged or injured and 
          takes the cases that make a meaningful difference in people’s lives. 
          He does not shy away from the tough cases because he maintains the experience, the energy, 
          and the grit to handle them effectively. Rubin Law litigates cases with purpose and passion. 
          The critical mission is always to obtain justice for those who have suffered from the wrongdoing of others.
        </div>

        <div className='grid'>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className='card'
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Pre-File Consulting <span>-&gt;</span></h2>
            <p>Learn more about Rubin Law&apos;s work in this area</p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className='card'
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Criminal Defense <span>-&gt;</span></h2>
            <p>Learn more about Rubin Law&apos;s work in this area</p>
          </a>

          

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className='card'
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Civil Rights Litigation <span>-&gt;</span></h2>
            <p>Learn more about Rubin Law&apos;s work in this area</p>
          </a>

          
        </div>
      </div>
      <div className='relevant-law-section'>
        <h3>Relevant Law</h3>
        {/* blurb about some relevant law */}
      </div>
      <div className='awards-certifications-section'>
        <h3>Awards & Certifications</h3>
        {/* mention and display awards and certifications */}
      </div>
      <div className='blog-section'>
        <h3>Blog</h3>
        {/* maybe a snippet of the latest blog post and link to the blog page */}
      </div>
      <div className='contact-us-form'>
        <h3>Contact us</h3>
      </div>
    </div>
  )
}
