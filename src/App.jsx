import React, { useState } from 'react';
import './App.css';
import { DiRedhat, DiCreativecommonsBadge } from "react-icons/di";
import hero from './assets/cardy.jpg';
import secure from './assets/secure.jpg';
import secure2 from './assets/secure2.jpg';
import stars from './assets/stars-1.svg';
import star from './assets/stars-5-1.svg';
import Feature from './assets/Feature.jpg';
import Feature1 from './assets/security.jpg';
import card2 from './assets/card2.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <body class="min-h-screen flex flex-col scroll-smooth">
    <main class="flex-grow">
      <nav class="flex justify-between items-center bg-blue-300 p-2 sticky top-0 z-10 text-gray-900 shadow-md w-full" aria-label="Main navigation">
        <div class="flex font-bold">
        <DiRedhat size={50} color="white" />
          <a href="#" class="text-4xl">Click Me</a>
          </div>
        <button
            class="flex flex-col justify-center items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span class="block w-6 h-0.5 bg-gray-900 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-900 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-900"></span>

          </button>
          
          <div class={`flex-col md:flex-row md:flex items-center space-x-4 ${menuOpen ? 'flex' : 'hidden'} md:space-x-4 md:static absolute top-20 left-0 w-full md:w-auto bg-blue-300 md:bg-transparent z-40`} style={{ transition: 'all 0.3s ease-in-out', top: '100%' }}>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#feature" onClick={() => setMenuOpen(false)}>Feature</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
      </nav>
      <div class="relative text-gray-900 h-screen overflow-hidden">
        <div class="absolute inset-0">
          <img src={hero} alt="hero image" loading="lazy" class="object-cover object-center w-full h-full opacity-90" />
          <div class="absolute"></div>
        </div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <h1 class="text-6xl font-bold mt-2 mb-6 max-w-full">Advanced Cards <span class="text-blue-400">and</span> Features.</h1>
          <p class="text-gray-900 font-bold text-4xl mb-8 max-w-2xl leading-relaxed tracking-wide">Features and services that allow you to create scalable cards.</p>
          <div class="flex flex-col sm:flex-row gap-4">
                    <a href="get-started#" class="bg-blue-300 text-gray-900 py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-400 shadow-lg">
                        Sign-up for privacy
                    </a>
                </div>
        </div>
      </div>
      <section id="about" class="py-18 px-2 bg-gray-200">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">About <span class="text-blue-400">Secure Cards </span> Features</h2>
                    <p class="text-gray-900 max-w-2xl mx-auto leading-relaxed">Discover our innovative features designed to elevate your card solutions to the next level.</p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div class="bg-blue-300 rounded-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Advanced Security</h3>
                        <p class="text-gray-900 mb-4">Military-grade encryption and real-time fraud monitoring to keep your transactions secure.</p>
                        <a href="#" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Instant Processing</h3>
                        <p class="text-gray-900 mb-4">Real-time transaction processing with 99.9% uptime for seamless user experiences.</p>
                        <a href="#" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Smart Sync</h3>
                        <p class="text-gray-900 mb-4">Automatically sync card data across all your devices and platforms in real-time.</p>
                        <a href="#" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
      </a>
     </div>
       <div class="bg-blue-300 rounded-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
                        <p class="text-gray-900 mb-4">Detailed insights and spending analytics to help you make smarter financial decisions.</p>
                        <a href="#" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center mb-14">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4 mt-8">Secure Cards Features</h2>
                    <p class="text-gray-900 max-w-2xl mx-auto leading-relaxed">Discover our innovative features designed to elevate your card solutions to the next level.</p>
                </div>
  <div class="w-full h-full flex flex-col items-center py-10">
    <div
      class="w-full mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center mt-4">
      <img class="w-full px-2 py-4 rounded-lg" src={Feature} alt="feature" />

      <div class="w-full  rounded-lg">
        <h2 class="text-3xl font-semibold text-gray-900 items-center md:text-4xl">Advanced cards solutions.</h2>
        <p class="text-md text-center items-center ml-0 mt-4 mb-8 px-4 py-6 text-gray-900 max-w-md">Build for websites with maximal impact to elevate your networking with smart business cards that blend physical elegance with digital intelligence. Our feature rich cards offer seamless contact sharing, real-time analytics, and dynamic content updates,ensuring your first impression evolves long after the exchange.</p>
          <button class="bg-blue-300 text-center text-gray-900 px-4 py-2 rounded-xl hover:bg-blue-400">Take Control with Spend Limits
  </button>
      </div>

    </div>
    <div
      class="w-full mx-auto flex md:flex-row flex-col-reverse gap-2 justify-center mt-6">
      <div class="w-full p-2 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 items-center md:text-4xl">Bank-level security.</h2>
        <p class="text-md text-center items-center ml-0 mt-4 mb-8 px-4 py-6 text-gray-900 max-w-md">Build for websites with maximal impact to elevate your networking with smart business cards that blend physical elegance with digital intelligence. Our feature rich cards offer seamless contact sharing, real-time analytics, and dynamic content updates,ensuring your first impression evolves long after the exchange.</p>
        <button class="bg-blue-300 text-gray-900 px-4 py-2 rounded-lg  hover:bg-blue-400">Take Control with Spend Limits</button>
      </div>
      <img class="w-full px-2 py-4 rounded-xl" src={Feature1} alt="feature1" />
    </div>
  </div>
  <div class="px-4 mx-auto max-w-7xl">
    <div class="text-center">
      <h3 class="text-blue-400 font-bold text-3xl">How card machines can help you take <span class="text-gray-900">safer </span> payments.</h3>
    </div>
    </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mb-16">
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure2} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-50 rounded-2xl" />
    <h2 class="text-2xl text-gray-900 font-bold z-10">Advanced Cards Solutions</h2>
    <p class="z-10 text-gray-900">Real-time transaction processing with 99.99% uptime guarantee.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400">See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-50 rounded-2xl" />
    <h2 class="text-2xl text-gray-900 font-bold z-10">Bank-Level Security</h2>
    <p class="z-10 text-gray-100">Military-grade encryption and fraud detection to protect every transaction.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400">See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-50 rounded-2xl" />
    <h2 class="text-2xl text-gray-900 font-bold z-10">Smart Synchronization</h2>
    <p class="z-10 text-gray-100">Automatically sync card data across all your devices and platforms.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400">See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure2} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-50 rounded-2xl" />
    <h2 class="text-2xl text-gray-900 font-bold z-10">Create. Manage. Scale.</h2>
    <p class="z-10 text-gray-900">Automatically sync card data across all your devices and platforms.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400">See more</button>
  </div>
</div>
</section>
<section class="flex flex-col items-center justify-center gap-10 p-10 bg-gray-100 w-full text-center">
  <h2 class="text-4xl font-extrabold text-gray-900">Why <span class='text-blue-400'>secure</span> your cards?</h2>
  
  <div class="flex flex-row flex-wrap justify-center gap-10 w-full max-w-6xl">
    <div class="flex flex-col items-center p-6 w-80">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke-width="1.5" stroke="currentColor" class="custom-icon">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg>
      <h3 class="text-xl font-bold text-gray-900 mb-2">Local service and repair</h3>
      <p class="text-gray-900 text-sm leading-relaxed">This is a simple card component. This is a simple card component. This is a simple card component.</p>
    </div>

    <div class="flex flex-col items-center p-6 w-80">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke-width="1.5" stroke="currentColor" class="custom-icon">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg>
      <h3 class="text-xl font-bold text-gray-900 mb-2">Local service and repair</h3>
      <p class="text-gray-900 text-sm leading-relaxed">This is a simple card component. This is a simple card component. This is a simple card component.</p>
    </div>

    <div class="flex flex-col items-center p-6 w-80">
      <DiCreativecommonsBadge />
    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke-width="1.5" stroke="currentColor" class="custom-icon">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg> */}
      <h3 class="text-xl font-bold text-gray-900 mb-2">Local service and repair</h3>
      <p class="text-gray-900 text-sm leading-relaxed">This is a simple card component. This is a simple card component. This is a simple card component.</p>
    </div>
  </div>
</section>

<section class="bg-gray-100 w-full flex items-center p-4">
  <div class="mx-auto px-4 pb-6">
    <div class="grid grid-cols-5 gap-8 text-gray-900">
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center ">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
    </div>
  </div>
</section>
<section id="feature" class="text-blue-400 bg-gray-100">
  <div class="container mx-auto px-5 py-24">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
          <div class="mb-3 w-12 h-12 items-center">
            <img src={card2} alt="security" /></div>
          <h2 class="text-3xl text-blue-400">7M+</h2>
          <p class="text-gray-700">Virtual cards secured</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">380K</h2>
          <p class="text-gray-900">Daily Users Per Click</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">100%</h2>
          <p class="text-gray-900">Clients satisfactory</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">$5B</h2>
          <p class="text-gray-700">Market Demand</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="flex items-center justify-center shadow-2xl text-gray-900 bg-gray-100 p-10 m-5 rounded-lg">
  <div class="w-full px-4 ">
    <div class="grid grid-cols-1 gap-8">
      <div class="flex flex-col">
        <h2 class="text-4xl font-extrabold">Cards <span class="text-blue-400">with </span>Features</h2>
        <p class="mt-4 font-medium text-gray-900 items-center">Build for websites with maximal impact to elevate your networking with smart business cards that blend physical elegance with digital intelligence. Our feature rich cards offer seamless contact sharing, real-time analytics, and dynamic content updates,ensuring your first impression evolves long after the exchange.</p>
        <div class="mt-6 flex flex-wrap gap-6 w-fit"> 
          <a href="get-cards#" class="p-3 rounded-lg grow border border-gray-300 w-fit text-gray-900 font-bold text-center hover:bg-blue-400">Get cards</a>
          <a href="more-cards#" class="p-3 rounded-lg grow border w-fit text center text-gray-100 bg-blue-300 hover:bg-blue-400">More cards</a>
        </div>
      </div>
      <div class="relative flex items-center">
        <div class="relative p-4 text-center grow rounded-xl">
          <h2 class="text-2xl font-bold text-blue-400 ">About <span class='text-gray-900'>Cards</span> Features</h2>
          <blockquote class="mt-6 pl-6 text-2xl italic">
      &quot;After all, security used to be an inconvenience, now it's essential.&quot;
    </blockquote>
        </div>
      </div>
      <div class="container mx-auto px-5 py-24">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">15K+</h2>
          <p class="text-gray-900">Global Presence</p>
          <img src={star} alt="star" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">700+</h2>
          <p class="text-gray-900">Security Standard</p>
          <img src={stars} alt="stars" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">$243M</h2>
          <p class="text-gray-900">Certified Products</p>
          <img src={star} alt="star" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">900</h2>
          <p class="text-gray-900">Data Clusters</p>
          <img src={stars} alt="stars" class="w-full"/>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</section>                                                                            <section id="faqs" class="bg-gray-100 py-10">
  <div class="px-4 mx-auto max-w-7xl">
    <div class="text-center mx-auto max-w-2xl">
      <h2 class="text-gray-900 font-bold text-3xl">Frequently Asked Questions</h2>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400 overflow-hidden">How to get started with cards?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">How to get started with cards?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">How to get started with cards?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">How to get started with cards?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
  </div>
</section>

<section id="contact" class="p-8 mt-8 mx-auto max-w-5xl">
  <h2 class="text-gray-900 text-3xl font-semibold mb-4">Contact Us</h2>
  <div class="flex flex-col md:flex-row gap-8">
    <form class="w-full md:w-1/2 bg-gray-100 rounded-lg shadow p-4 mb-8">
      <div class="w-full p-2">
        <div class="relative">
          
        <label for="email" class="py-4 text-lg text-gray-900 placeholder-gray-400 focus:placeholder-blue-300">Email</label>
        <input type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-500 text-base py-1 px-1 text-gray-900" />
        </div>
      </div>
      <div class="w-full p-2">
        <div class="relative">
        </div>
      </div>
      <div class="w-full p-2">
        <div class="relative">
          <label for="message" class="py-4 text-lg text-gray-900">Message</label>
          <input type="text" id="message" name="message" class="w-full bg-gray-100 rounded border border-gray-500 text-base py-1 px-1 text-gray-900" />
        </div>
      </div>
      <div class="p-2 w-full">
        <button type="submit" class="text-center text-gray-900 bg-blue-300 py-2 px-4 hover:bg-blue-400 font-bold rounded-lg">Send</button>
      </div>
    </form>
    <div class="w-full md:w-1/2">
      <section class="relative rounded-lg border pt-4 mb-8 bg-white shadow">
        <div class="absolute px-2 top-0 left-0 rounded-tl-lg rounded-br-lg bg-blue-300 p-4">
          <h5 class="text-gray-900 px-2 font-semibold text-md">Discussion</h5>
        </div>
        <form class="pt-12 px-4">
          <div class="w-full mb-2">
            <textarea class="bg-gray-100 rounded w-full h-28 p-3 font-medium placeholder-gray-400 focus:placeholder-blue-300" name="body" placeholder="Your comment" required></textarea>
          </div>
          <div class="w-full flex justify-end my-3">
            <button class="px-4 py-2 text-gray-900 bg-blue-300 font-bold rounded-md hover:bg-blue-400">Comment</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</section>

<footer id="footer" aria-label="Footer" class="bg-blue-300">
  <div class="px-2 py-4 text-gray-900 mx-auto max-w-screen sm:px-6 sm:grid sm:grid-cols-4 space-y-2">
    <div class="p-5">
    <DiRedhat size={50} color="white" />
      <h3 class="font-bold text-2xl text-blue-500">Click Me</h3>
      <p class="text-blue-500 mb-6">Creating innovative card solutions for modern businesses. Scalable, secure, and user-friendly card features.
     </p>
    </div>
    <div class="p-5">
      <div class="uppercase font-bold text-blue-500">Products</div>
      <a class="my-3 block hover:text-gray-100" href="virtual#">Virtual cards</a>
      <a class="my-3 block hover:text-gray-100" href="physical#">Physical cards</a>
      <a class="my-3 block hover:text-gray-100" href="business#">Business cards</a>
      <a class="my-3 block hover:text-gray-100" href="loyalty#">Loyalty cards</a>
    </div>
    <div class="p-5">
      <div class="uppercase font-bold text-blue-500">Resources</div>
      <a class="block my-3 hover:text-gray-100" href="services#">Services</a>
      <a class="my-3 block hover:text-gray-100" href="tutorials#">Tutorials</a>
      <a class="my-3 block hover:text-gray-100" href="docs#">Documentation</a>
      <a class="my-3 block hover:text-gray-100" href="help-site#">Help site</a>
    </div>
    <div class="p-5">
      <div class="uppercase font-bold text-blue-500">Terms and Policy</div>
      <a class="my-3 block hover:text-gray-100" href="t&c#">Terms of service</a>
      <a class="my-3 block hover:text-gray-100" href="cookies#">Cookies policy</a>
      <a class="my-3 block hover:text-gray-100" href="sitemap#">Sitemap</a>
    </div>
    <div class="p-5">
      <div class="uppercase text-blue-500 font-bold">Contact Us</div>
      <a class="my-3 block hover:text-gray-100" href="contact#">+000 777 3930, Universe.VA</a>
      <a class="my-3 block hover:text-gray-100" href="#">clickme@company.com</a>
      <a class="my-3 block hover:text-gray-100" href="info#">info.us</a> 
    </div>
    
    <div class="mt-6">
      <h4 class="text-gray-900 mb-3">Subscribe to our Newsletter</h4>
      <form class="flex">
          <input id="email" type="email" placeholder="Enter email" aria-required="true" class="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full" />
        <button type="submit" class="bg-blue-400 hover:bg-blue-600 text-gray-100 font-bold px-4 py-2 rounded-lg">Submit
        </button>
      </form>
    </div>
  </div>
  <div class="bg-gray-200 pt-2">
      <div class="flex flex-col max-w-screen items-center px-2 pb-1 text-gray-900">
        <div class="my-5">2025 Copyright Click Me. All Rights Reserved.</div>
      </div>
    </div>
</footer>
    </main>
    </body>
    </>
  )
};

export default App;
