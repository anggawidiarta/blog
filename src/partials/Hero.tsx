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
    {/* <!-- Section: Design Block --> */}
    <section className="-mb-4">


      {/* <!-- Navbar -->

      <!-- Jumbotron --> */}
      <div className="px-6 py-12 text-center  dark:bg-[#0f172a] md:px-12 lg:text-left">
        <div className="mx-auto w-100 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-2 mb-16 text-5xl font-bold text-[#1cc6ed] tracking-tight md:text-6xl xl:text-7xl">
                Welcome To <br /><span className="text-[#f3f4f6]">My Black Parade</span>
              </h1>
              <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get To Know</a>
              {/* <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a> */}
            </div>
            <div className="flex items-center justify-center mb-0 lg:mb-12">
              <img src="/assets/images/hero.png"
                className="w-[75%] lg:w-full shadow-black/20" alt="image hero" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
    {/* <!-- Section: Design Block --> */}
  </Section>
);

export { Hero };
