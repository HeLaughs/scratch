import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import { DiRedhat } from "react-icons/di";
import { GiCardExchange } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from './assets/her1.jpg';
import secure from './assets/secure.jpg';
import secure2 from './assets/secure2.jpg';
import stars from './assets/stars-1.svg';
import star from './assets/stars-5-1.svg';
import Feature from './assets/Feature.jpg';
import Feature1 from './assets/security.jpg';
import card2 from './assets/card2.png';
import badge from './assets/badge.jpg';


function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [formData, setFormData] = useState({ email: '', card: '', message: '' });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  setTimeout(() => setLoading(false), 2500);
  AOS.init();
  const toggleFaq = (id) => {
    setFaqOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({ email: '', card: '', message: '' });
  };
  if (loading) {
    return (
      <div class="min-h-screen bg-gray-100 flex flex-col">
        <div class="bg-blue-200 h-16 w-full flex items-center px-8 animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="w-32 h-8 bg-gray-300 rounded"></div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center space-y-6 animate-pulse">
          <div class="w-80 h-75 bg-gray-300 rounded"></div>
          <div class="w-2/3 h-6 bg-gray-300 rounded"></div>
          <div class="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div class="w-1/4 h-6 bg-blue-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div class="min-h-screen flex flex-col scroll-smooth">
    <main class="flex-grow">
      <nav class="flex justify-between items-center bg-blue-300 p-2 fixed top-0 z-10 text-gray-900 shadow-md w-full" aria-label="Main navigation">
        <div class="flex font-bold">
        <DiRedhat size={50} color="white" />
          <a href="/" class="text-4xl">ClickSafe</a>
            </div>
        <button
            class="flex flex-col justify-center items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span class={`block w-6 h-0.5 bg-gray-900 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span class={`block w-6 h-0.5 bg-gray-900 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span class={`block w-6 h-0.5 bg-gray-900 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          
          <div class={`flex flex-col md:flex-row md:flex items-center space-x-4 ${menuOpen ? 'flex' : 'hidden'} md:flex md:space-x-4 md:static absolute top-full left-0 w-full md:w-auto bg-blue-300 md:bg-transparent z-40`} style={{ transition: 'all 2s ease-in-out', top: '100%' }}>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#feature" onClick={() => setMenuOpen(false)}>Feature</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
      </nav>
      <div id="home" class="relative text-gray-900 h-screen overflow-hidden animate__animated animate__fadeInDown">
        <div class="absolute inset-0">
          <img src={hero} alt="hero image" loading="lazy" class="object-cover object-center w-full h-full opacity-85" decoding="async" />
        </div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <h1 class="text-5xl md:text-7xl text-blue-300 font-bold mt-2 mb-6 max-w-full animate__animated animate__fadeInDown">Premium <span class="text-gray-100 italic">ClickSafe</span> Cards.</h1>
          <p class="text-gray-100 font-bold text-4xl mb-8 max-w-4xl leading-relaxed tracking-wide">Smart banking cards with cutting-edge security.</p>
          <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/order" class="bg-blue-300 text-gray-900 py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-400 shadow-lg transition-bg">
                        Secure your card
                    </a>
                </div>
        </div>
      </div>
      <section id="about" class="py-18 px-2 bg-gray-100 animate__animated animate__bounce">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">ClickSafe <span class="text-blue-400">Secure Cards </span> Features</h2>
                    <p class="text-gray-900 max-w-2xl mx-auto leading-relaxed">Discover our innovative features designed to elevate your card solutions to the next level.</p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div class="bg-blue-300 rounded-lg p-8">
                    <BsCreditCard class="text-4xl mb-3" />
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Platinum Credit Card</h3>
                        <p class="text-gray-900 mb-4">Premium benefits with travel rewards and concierge service.</p>
                        <a href="/cards/platinum" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <GiCardExchange className="text-4xl mb-3" />
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Business Expense Card</h3>
                        <p class="text-gray-900 mb-4">Real-time transaction with smart spending controls and expense reporting</p>
                        <a href="/cards/business" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <BsCreditCard class="text-4xl mb-3" />
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Virtual Debit Card</h3>
                        <p class="text-gray-900 mb-4">Automatic instant digital card for online purchases with enhanced security.</p>
                        <a href="/cards/virtual" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
      </a>
     </div>
       <div class="bg-blue-300 rounded-lg p-8">
                        <BiSolidCreditCardAlt class="text-4xl mb-3" />
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Rewards Mastercard</h3>
                        <p class="text-gray-900 mb-4">Earn cashback on every purchase with premium benefits.</p>
                        <a href="/cards/rewards" class="text-gray-100 text-xl flex items-center gap-1 hover:text-gray-900">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      <section id="feature" class="py-18 px-2 bg-gray-100">
            <div class="text-center mb-14">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">ClickSafe Security Features</h2>
                    <p class="text-gray-900 max-w-2xl mx-auto leading-relaxed">Advanced protection for your financial transactions.</p>
                </div>
  <div class="w-full h-full flex flex-col items-center py-10">
    <div
      class="w-full mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center mt-4">
      <img class="w-full px-2 py-4 rounded-lg" src={Feature} alt="Contactless payment technology" decoding="async" />
      <div class="w-full  rounded-lg Dumbledore">
        <h2 class="text-2xl font-semibold text-gray-900 items-center md:text-4xl">Advanced contactless technology.</h2>
        <p class="block items-center ml-0 mt-4 mb-8 px-4 py-6 text-gray-900 max-w-md">Our cards feature next-generation contactless payment technology for faster, more secure transactions. Tap to pay with enhanced encryption and transaction limits to protect your funds.</p>
          <button class="bg-blue-300 text-center text-gray-900 px-4 py-2 rounded-xl hover:bg-blue-400" onClick={() => window.location.href = '/contactless'}>Explore ClickSafe
  </button>
      </div>
    </div>
    <div
      class="w-full mx-auto flex md:flex-row flex-col-reverse gap-2 justify-center mt-6">
      <div class="w-full p-2 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 items-center md:text-4xl">Bank-level security.</h2>
        <p class="block items-center ml-0 mt-4 mb-8 px-4 py-6 text-gray-900 max-w-md">All our cards come with military-grade encryption, real-time fraud monitoring, and instant transaction blocking. Your financial security is our top priority with 24/7 monitoring.</p>
        <button class="bg-blue-300 text-gray-900 px-4 py-2 rounded-lg  hover:bg-blue-400"onClick={() => window.location.href = '/security'}>Security Features</button>
      </div>
      <img class="w-full px-2 py-4 rounded-xl" src={Feature1} alt="feature1" decoding="async" />
    </div>
  </div>
  <div class="px-4 mx-auto max-w-7xl">
    <div class="text-center">
      <h3 class="text-blue-400 font-bold text-3xl">ClickSafe Cards for a <span class="text-gray-900">secure </span> payments.</h3>
    </div>
    </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mb-16">
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure2} alt="Global card acceptance" class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl image high-quality" decoding="async" />
    <h2 class="text-xl text-gray-900 font-bold z-10">Global Acceptance</h2>
    <p class="z-10 text-gray-900">Accepted at millions of locations worldwide with real-time currency conversion.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400" onClick={() => window.location.href = '/global'}>See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl" decoding="async" />
    <h2 class="text-xl text-gray-900 font-bold z-10">Instant Alerts</h2>
    <p class="z-10 text-gray-900">Add your card to Apple Pay, Google Pay, and Samsung Pay.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400" onClick={() => window.location.href = '/alerts'}>See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl" decoding="async" />
    <h2 class="text-xl text-gray-900 font-bold z-10">Digital Wallet Integration</h2>
    <p class="z-10 text-gray-900">Real-time notifications for every transaction on your card.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400" onClick={() => window.location.href = '/wallet'}>See more</button>
  </div>
  <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden h-full min-h-[300px]">
    <img src={secure2} alt="card image" class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl" decoding="async" />
    <h2 class="text-xl text-gray-900 font-bold z-10">Card Controls</h2>
    <p class="z-10 text-gray-900">Freeze/unfreeze, set spending limits, and manage locations.</p>
    <button class="bg-blue-300 p-4 text-gray-900 px-4 py-2 w-fit rounded-lg z-10 hover:bg-blue-400" onClick={() => window.location.href = '/controls'}>See more</button>
  </div>
</div>
</section>
<section id="features" class="flex flex-col items-center justify-center gap-10 p-10 bg-gray-100 w-full text-center">
  <h2 class="text-3xl font-extrabold text-gray-900">Why <span class='text-blue-400'>choose</span> ClickSafe?</h2>
  
  <div class="flex flex-row flex-wrap justify-center gap-10 w-full max-w-6xl">
    <div class="flex flex-col items-center p-6 w-80">
  <img src={badge} alt="Zero fraud liability badge" class="rounded-2xl" decoding="async" />
      <h3 class="text-xl font-bold text-gray-900 mb-2">Zero Fraud Liability</h3>
      <p class="text-gray-900 text-sm leading-relaxed">You're not responsible for unauthorized transactions with our advanced security measures.</p>
    </div>
    <div class="flex flex-col items-center p-6 w-80">
  <img src={badge} alt="card" class="rounded-2xl" decoding="async" />
      <h3 class="text-xl font-bold text-gray-900 mb-2">No Annual Fees</h3>
      <p class="text-gray-900 text-sm leading-relaxed">Premium card benefits without the premium price tag.</p>
    </div>

    <div class="flex flex-col items-center p-6 w-80">
  <img src={badge} alt="card" class="rounded-2xl" decoding="async" />
      <h3 class="text-xl font-bold text-gray-900 mb-2">Spending Analytics</h3>
      <p class="text-gray-900 text-sm leading-relaxed">Detailed spending reports and budgeting tools right in our app.</p>
    </div>
  </div>
  <div class="bg-gray-100 w-full flex items-center p-4">
  <div class="mx-auto px-4 pb-6">
    <div class="grid grid-cols-5 gap-8 text-gray-900">
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center ">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="h-18 text-gray-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
    </div>
  </div>
</div>
<div class="text-blue-400 bg-gray-100">
  <div class="container mx-auto px-5 py-24">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
          <div class="mb-3 w-12 h-12 items-center mx-auto">
            <img src={card2} alt="Virtual cards issued" /></div>
          <h2 class="text-3xl text-blue-400">7M+</h2>
          <p class="text-gray-700">Virtual-Cards Issued</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
          <GiCardExchange class="w-12 h-12 mb-3 inline-block" />
          <h2 class="text-3xl text-blue-400">380K</h2>
          <p class="text-gray-900">Daily Transactions</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">100%</h2>
          <p class="text-gray-900">Fraud Protections</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <div class="mb-3 w-12 h-12 items-center mx-auto">
        <img src={card2} alt="Virtual cards issued" /></div>
          <h2 class="text-3xl text-blue-400">$5B</h2>
          <p class="text-gray-700">Annual Transactions</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex items-center justify-center text-gray-900 bg-gray-100 p-10 m-5">
  <div class="w-full px-4 ">
    <div class="grid grid-cols-1 gap-8">
      <div class="flex flex-col items-center">
        <h2 class="text-4xl font-extrabold">Smart <span class="text-blue-400">Banking </span>Cards</h2>
        <p class="block mt-2 font-medium text-gray-900 items-center">Experience the future of payments with our advanced card technology that seamlessly integrates cutting-edge security features with an effortless payment experience. Our cards offer contactless payments for quick transactions, digital wallet integration for convenience, and real-time spending controls that empower you to manage your finances with ease. Say goodbye to traditional barriers and hello to a new era of financial freedom where innovation meets simplicity in every swipe.</p>
        <div class="mt-6 flex flex-wrap gap-6 w-fit"> 
          <a href="get-cards#" class="p-3 rounded-lg grow border border-gray-300 w-fit text-gray-900 font-bold text-center hover:bg-blue-400">Order Cards</a>
          <a href="more-cards#" class="p-3 rounded-lg grow w-fit text center text-gray-100 bg-blue-300 hover:bg-blue-400">Compare Cards</a>
        </div>
      </div>
      <div class="relative flex items-center">
        <div class="relative p-4 text-center grow rounded-xl">
          <h2 class="text-2xl font-bold text-blue-400 ">Cardholder <span class='text-gray-900'>Testimonial</span></h2>
          <blockquote class="mt-6 pl-6 text-2xl italic">
          &quot;The security features give me peace of mind, and the contactless payments are incredibly convenient.&quot;
    </blockquote>
        </div>
      </div>
      <div class="container mx-auto px-5 py-24">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">15K+</h2>
          <p class="text-gray-900">Retail Partners</p>
          <img src={star} alt="star" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">700+</h2>
          <p class="text-gray-900">Security Certified</p>
          <img src={stars} alt="stars" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">$4B</h2>
          <p class="text-gray-900">Annual Savings</p>
          <img src={star} alt="star" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">900</h2>
          <p class="text-gray-900">Global ATMs</p>
          <img src={stars} alt="stars" class="w-full"/>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
</section>
<section id="contact" class="p-8 mt-2 mx-auto max-w-5xl">
  <h2 class="text-gray-900 text-3xl font-semibold mb-4">ClickSafe Support</h2>
  <div class="flex flex-col md:flex-row gap-8">
    <form onSubmit={handleFormSubmit} class="w-full md:w-1/2 bg-gray-100 rounded-lg shadow p-4 mb-8">
      <div class="w-full p-2">
        <div class="relative">  
        <label htmlFor="email" class="block py-4 text-lg text-gray-900 placeholder-gray-400 focus:placeholder-blue-300">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} class="w-full bg-white rounded-lg border border-gray-500 text-base py-1 px-1 text-gray-900" required />
        </div>
        <div class="mb-4">
                <label htmlFor="card" class="block text-gray-900 font-medium mb-2">Card Type</label>
                <select
                  id="card"
                  name="card"
                  value={formData.card}
                  onChange={handleInputChange}
                  class="w-full p-3 font-semibold rounded-lg bg-blue-200 text-gray-900"
                  required
                >
                  <option value="">Select a card</option>
                  <option value="platinum">Platinum Credit Card</option>
                  <option value="business">Business Expense Card</option>
                  <option value="virtual">Virtual Debit Card</option>
                  <option value="rewards">Rewards Mastercard</option>
                </select>
              </div>
              <div class="mb-4">
                <label htmlFor="message" class="block text-gray-900 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  class="w-full p-3 rounded-lg bg-blue-200 text-gray-900"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="bg-blue-300 text-gray-900 py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-400">
                Send
              </button>
      </div>
      
    </form>
    <div class="w-full md:w-1/2">
      <section class="relative rounded-lg pt-4 mb-8 bg-white shadow">
        <div class="absolute px-2 top-0 left-0 rounded-tl-lg rounded-br-lg bg-blue-300 p-4">
          <h5 class="text-gray-900 px-2 font-semibold text-md">ClickSafe Support</h5>
        </div>
          <div class="pt-12 px-4">
          <p class="text-gray-900 mb-4">24/7 Customer Support:</p>
          <p class="text-blue-400 font-bold text-xl">+000 777 3930</p>
          <p class="text-gray-900 mt-6">For lost or stolen cards:</p>
          <p class="text-blue-400 font-bold text-xl">+000 777 3930</p>
          <div class="w-full flex justify-end my-3">
            <button class="px-4 py-2 text-gray-900 bg-blue-300 font-bold rounded-md hover:bg-blue-400">Chat Now</button>
          </div>
        </div>
      </section>  
    </div>
  </div>
</section>
<section id="faq" class="bg-gray-100 py-18 px-2 mx-auto max-w-5xl">
  <div class="px-4 mx-auto max-w-7xl">
    <div class="text-center mx-auto max-w-2xl">
      <h2 class="text-gray-900 font-bold text-3xl mb-4">Frequently Asked Questions</h2>
      <p class="text-gray-900 max-w-2xl mx-auto leading-relaxed">Hints to common questions about ClickSafe cards.</p>
    </div>
    <div class="space-y-4">
              <div class="bg-blue-300 rounded-lg p-4">
                <button type="button" id="faq1"
                  class="w-full text-left text-xl font-bold text-gray-900"
                  onClick={() => toggleFaq(1)}
                >
                  What is ClickSafe?
                </button>
                {faqOpen[1] && (
                  <p class="mt-2 text-gray-900">ClickSafe offers smart banking cards with advanced security features for safe and convenient transactions.</p>
                )}
              </div>
              <div class="bg-blue-300 rounded-lg p-4">
                <button type="button" id="faq2"
                  class="w-full text-left text-xl font-bold text-gray-900"
                  onClick={() => toggleFaq(2)}
                >
                  How do I apply for a card?
                </button>
                {faqOpen[2] && (
                  <p class="mt-2 text-gray-900">Visit our order page to apply for a ClickSafe card. Choose your card type and fill out the application form.</p>
                )}
              </div>
              <div class="bg-blue-300 rounded-lg p-4">
                <button type="button" id="faq3"
                  class="w-full text-left text-xl font-bold text-gray-900"
                  onClick={() => toggleFaq(3)}
                >
                  <span class="flex justify-between text-lg font-semibold text-gray-900 overflow-hidden">What are the security features?</span>  <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {faqOpen[3] && (
                  <p class="mt-2 text-gray-900">Our cards include military-grade encryption, real-time fraud monitoring, instant alerts, and card controls.</p>
                )}
              </div>
            </div>
          </div>

    {/* <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400 overflow-hidden">How to get started with cards?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">What security features do your cards have?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">Can I use my card internationally?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div>
    <div class="mt-8 space-y-4 mx-auto w-full max-w-2xl">
      <div class="bg-white border border-gray-200 shadow-2xl">
        <button class="flex items-center justify-between w-full px-4 py-5" type="button" id="Qn1">
        <span class="flex text-lg font-semibold text-blue-400">How do contactless payments work?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
        </button>
        </div>
    </div> */}
  
</section>

<footer id="footer" aria-label="Footer" class="bg-blue-300">
  <div class="px-2 py-2 text-gray-900 mx-auto max-w-screen sm:px-6 sm:grid sm:grid-cols-4 space-x-2">
    <div class="p-5">
    <DiRedhat size={50} color="white" />
      <h3 class="font-bold text-2xl text-blue-500">ClickSafe</h3>
      <p class="text-gray-100 mb-6">Creating innovative ClickSafe solutions for modern businesses. Scalable, secure, and with user-friendly modern banking needs.
     </p>
    </div>
    <div class="p-5">
      <div class="text-2xl font-semibold text-gray-900">Products</div>
      <a class="my-2 block hover:text-gray-100" href="virtual#">Virtual Cards</a>
      <a class="my-2 block hover:text-gray-100" href="physical#">Prepaid Cards</a>
      <a class="my-2 block hover:text-gray-100" href="business#">Business Cards</a>
      <a class="my-2 block hover:text-gray-100" href="loyalty#">Loyalty cards</a>
    </div>
    <div class="p-5">
      <div class="text-2xl font-semibold text-gray-900">Resources</div>
      <a class="my-2 block hover:text-gray-100" href="services#">Card Security</a>
      <a class="my-2 block hover:text-gray-100" href="tutorials#">Card Management</a>
      <a class="my-2 block hover:text-gray-100" href="docs#">Fee Schedule</a>
      <a class="my-2 block hover:text-gray-100" href="help-site#">Support Center</a>
    </div>
    <div class="p-5">
      <div class="text-2xl font-semibold text-gray-900">Company</div>
      <a class="my-2 block hover:text-gray-100" href="t&c#">About Us</a>
      <a class="my-2 block hover:text-gray-100" href="cookies#">Careers</a>
      <a class="my-2 block hover:text-gray-100" href="sitemap#">Partners</a>
    </div>
    <div class="p-5">
      <div class="text-2xl font-semibold text-gray-900">Contact</div>
      <a class="my-2 block hover:text-gray-100" href="contact#">+000 777 3930, Universe.VA</a>
      <a class="my-2 block hover:text-gray-100" href="#">support@clicksafe.com</a>
      <a class="my-2 block hover:text-gray-100" href="info#">info.us</a> 
    </div>
    <div class="mt-6">
      <h4 class="text-gray-900 mb-3">ClickSafe Security Updates</h4>
      <form class="flex">
          <input id="email" type="email" placeholder="Enter email" aria-required="true" class="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full" />
        <button type="submit" class="bg-blue-400 hover:bg-blue-600 text-gray-100 font-bold px-4 py-2 rounded-lg">Subscribe
        </button>
      </form>
    </div>
  </div>
  <div class="bg-gray-200 pt-1">
      <div class="flex flex-col max-w-screen items-center px-2 pb-0 text-gray-900">
        <div class="my-5">® 2025 ClickSafe. All terms and conditions apply.</div>
    <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 bg-blue-300 text-gray-900 p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 ${
            showScrollButton 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
</footer>
</main>
    </div>
    </>
  )
};


export default App;


