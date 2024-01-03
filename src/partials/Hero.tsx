/* eslint-disable tailwindcss/no-custom-classname */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'animate.css';

import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Angga Widiarta</GradientText> 👋
        </>
      }
      description={
        <>
          Smiling from behind the screen! I'm{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="/"
          >
            Angga Widiarta
          </a>{' '}, a tech enthusiast and writer on this blog page. Discover my journey, thoughts, and knowledge about the digital world. Together, let's explore the inspiration and insights I share. Welcome to my world!"
        </>
      }
      avatar={
        <img
          className="animate__animated animate__fadeInRight w-64"
          src="src/hero-img.svg"
          alt="Avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
