import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import { DiRedhat } from "react-icons/di";
import { GiCardExchange } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
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
  function handleExploreClickSafe() {
    window.location.href = '/contactless'
  };
  function handleSecurityFeatures() {
    window.location.href = '/security'
  };
  const goToGlobal = () => window.location.href = '/global';
  const goToAlerts = () => window.location.href = '/alerts';
  const goToWallet = () => window.location.href = '/wallet';
  const goToControls = () => window.location.href = '/controls';

  

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
      <nav class="flex justify-between items-center bg-blue-300 p-2 fixed top-0 z-10 text-blue-900 shadow-md w-full" aria-label="Main navigation">
        <div class="flex font-bold">
        <DiRedhat size={50} color="white" />
          <a href="/" class="text-2xl text-blue-900">ClickSafe</a>
            </div>
        <button
            class="flex flex-col justify-center items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span class={`block w-6 h-0.5 bg-blue-900 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span class={`block w-6 h-0.5 bg-blue-900 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span class={`block w-6 h-0.5 bg-blue-900 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          
          <div class={`flex flex-col md:flex-row md:flex items-center space-x-4 ${menuOpen ? 'flex' : 'hidden'} md:flex md:space-x-4 md:static absolute top-full left-0 w-full md:w-auto bg-blue-300 md:bg-transparent z-40`} style={{ transition: 'all 2s ease-in-out', top: '100%' }}>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#feature" onClick={() => setMenuOpen(false)}>Feature</a>
            <a class="rounded-lg font-medium hover:text-gray-100 px-4 py-2" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
      </nav>
      <div id="home" class="relative text-blue-900 h-screen overflow-hidden animate__animated animate__fadeInDown">
        <div class="absolute inset-0">
          <img src={hero} alt="hero image" loading="lazy" class="object-cover object-center w-full h-full opacity-85" decoding="async" />
          {/* <img src="http://www.zaccohn.com/images/gifs/lookatthat.gif" class="night-vision-effect h-full w-full"></img> */}
        </div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <h1 class="text-5xl md:text-7xl text-gray-100 font-bold mt-2 mb-6 max-w-full animate__animated animate__fadeInDown">Premium ClickSafe Cards.</h1>
          <p class="text-blue-900 bg-gray-100 rounded-lg font-bold text-center text-4xl mb-8 max-w-4xl leading-relaxed tracking-wide">Smart banking cards with cutting-edge security.</p>
          <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/order" class="bg-gray-100 py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-400 shadow-lg transition-bg">
                        Secure your card
                    </a>
                </div>
        </div>
      </div>
      <section id="about" class="section py-4 px-2 bg-gray-100 animate__animated animate__bounce">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-2">
                    <h1 class="font-medium text-blue-900 mb-4">ClickSafe Secure Cards</h1>
                    <p class="text-blue-900 max-w-2xl mx-auto leading-relaxed">Discover our innovative features designed to elevate your card solutions to the next level.</p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div class="bg-blue-300 rounded-lg p-8">
                    <BsCreditCard class="text-4xl w-fit h-18 mb-2" />
                        <h2 class="text-xl font-bold text-blue-900 mb-3">Platinum Credit Card</h2>
                        <p class="text-blue-900 mb-4">Premium benefits with travel rewards and concierge service.</p>
                        <a href="/cards/platinum" target="_blank" rel="noopener noreferrer" class="group text-blue-900 text-xl flex items-center gap-1 justify-end transition-all duration-200 hover:text-gray-100">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <GiCardExchange className="text-4xl w-fit h-18 mb-3" />
                        <h2 class="text-xl font-bold text-blue-900 mb-3">Business Expense Card</h2>
                        <p class="text-blue-900 mb-4">Real-time transaction with smart spending controls and expense reporting</p>
                        <a href="/cards/business" target="_blank" rel="noopener noreferrer" class="group text-blue-900 text-xl flex items-center gap-1 justify-end transition-all duration-200 hover:text-gray-100">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                    <div class="bg-blue-300 rounded-lg p-8">
                        <BsCreditCard class="text-4xl w-fit h-18 mb-3" />
                        <h2 class="text-xl font-bold text-blue-900 mb-3">Virtual Debit Card</h2>
                        <p class="text-blue-900 mb-4">Automatic instant digital card for online purchases with enhanced security.</p>
                        <a href="/cards/virtual" target="_blank" rel="noopener noreferrer" class="group text-blue-900 text-xl flex items-center gap-1 justify-end transition-all duration-200 hover:text-gray-100">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
      </a>
     </div>
       <div class="bg-blue-300 rounded-lg p-8">
                        <BiSolidCreditCardAlt class="text-4xl w-fit h-18 mb-3" />
                        <h2 class="text-xl font-bold text-blue-900 mb-3">Rewards Mastercard</h2>
                        <p class="text-blue-900 mb-4">Earn cashback on every purchase with premium benefits.</p>
                        <a href="/cards/rewards" target="_blank" rel="noopener noreferrer" class="group text-blue-900 text-xl flex items-center gap-1 justify-end transition-all duration-200 hover:text-gray-100">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
            <div class="text-center">
                    <h1 class="font-medium text-blue-900 mt-2">ClickSafe Security Features</h1>
                    <p class="text-blue-900 max-w-2xl mx-auto leading-relaxed">Advanced protection for your financial transactions.</p>
                </div>

  <div class="w-full h-full flex flex-col items-center py-10">
      <div class="w-full mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center mt-4">
        <img
          class="w-full md:w-1/2 px-2 py-4 rounded-md hover:scale-105 transition-transform duration-300 shadow"
          src={Feature}
          alt="Contactless payment technology"
          decoding="async"
        />
        <div class="w-full md:w-1/2 rounded-lg p-4">
          <h2 class="text-3xl font-semibold text-blue-900 md:text-4xl">Advanced contactless technology.</h2>
          <p class="mt-4 mb-6 px-2 py-4 text-blue-900 max-w-md">
            Our cards feature next-generation contactless payment technology for faster, more secure transactions. Tap to pay with enhanced encryption and transaction limits to protect your funds.
          </p>
          <button
            onClick={handleExploreClickSafe}
            class="px-2 py-4 bg-blue-400 hover:bg-blue-900 text-gray-100 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Explore ClickSafe
          </button>
        </div>
      </div>
      <div class="w-full mx-auto flex md:flex-row flex-col-reverse gap-2 justify-center mt-10">
        <div class="w-full md:w-1/2 rounded-lg p-4">
          <h2 class="text-3xl font-semibold text-blue-900 md:text-4xl">Bank-level security.</h2>
          <p class="mt-4 mb-6 px-2 py-4 text-blue-900 max-w-md">
            All our cards come with military-grade encryption, real-time fraud monitoring, and instant transaction blocking. Your financial security is our top priority with 24/7 monitoring.
          </p>
          <button
            onClick={handleSecurityFeatures}
            class="px-2 py-4 bg-blue-400 hover:bg-blue-900 text-gray-100 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Security Features
          </button>
        </div>
        <img
          class="w-full md:w-1/2 px-2 py-4 rounded-md hover:scale-105 transition-transform duration-300 shadow"
          src={Feature1}
          alt="Security feature"
          decoding="async"
        />
      </div>
    </div>
<div class="px-4 mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-blue-900 font-bold text-3xl animate__bounceOut">
          ClickSafe Cards for secure payments.
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mb-2">
        <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden min-h-[300px]">
          <img
            src={secure2}
            alt="Global card acceptance"
            class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
            decoding="async"
          />
          <h2 class="text-3xl text-blue-900 font-bold z-10 animate__bounceOut">Global Acceptance</h2>
          <p class="z-10 text-blue-900">
            Accepted at millions of locations worldwide with real-time currency conversion. Experience the future of payments with our advanced card technology...
          </p>
          <button
            onClick={goToGlobal}
            class="p-4 bg-blue-400 hover:bg-blue-900 text-gray-100 px-2 py-2 text-center w-fit rounded-lg z-10 transition-transform duration-200 hover:scale-105"
          >
            See more
          </button>
        </div>
        <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden min-h-[300px]">
          <img
            src={secure}
            alt="Instant alerts"
            class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
            decoding="async"
          />
          <h2 class="text-3xl text-blue-900 font-bold z-10 animate__bounceOut">Instant Alerts</h2>
          <p class="z-10 text-blue-900">
            Add your card to Apple Pay, Google Pay, and Samsung Pay. Experience the future of payments with our advanced card technology...
          </p>
          <button
            onClick={goToAlerts}
            class="p-4 bg-blue-400 hover:bg-blue-900 text-gray-100 px-2 py-2 text-center w-fit rounded-lg z-10 transition-transform duration-200 hover:scale-105"
          >
            See more
          </button>
        </div>
        <div class="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden min-h-[300px]">
          <img
            src={secure}
            alt="Digital Wallet"
            class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
            decoding="async"
          />
          <h2 class="text-3xl text-blue-900 font-bold z-10 animate__bounceOut">Digital Wallet Integration</h2>
          <p class="z-10 text-blue-900">
            Real-time notifications for every transaction on your card. Experience the future of payments with our advanced card technology...
          </p>
          <button
            onClick={goToWallet}
            class="p-4 bg-blue-400 hover:bg-blue-900 text-white px-2 py-2 text-center w-fit rounded-lg z-10 transition-transform duration-200 hover:scale-105"
          >
            See more
          </button>
        </div>
        <div className="relative flex flex-col p-6 gap-4 rounded-2xl bg-cover bg-center overflow-hidden min-h-[300px]">
          <img
            src={secure2}
            alt="Card Controls"
            class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
            decoding="async"
          />
          <h2 class="text-3xl text-blue-900 font-bold z-10 animate__bounceOut">Card Controls</h2>
          <p class="z-10 text-blue-900">
            Freeze/unfreeze, set spending limits, and manage locations. Experience the future of payments with our advanced card technology...
          </p>
          <button
            onClick={goToControls}
            class="p-4 bg-blue-400 hover:bg-blue-900 text-white px-2 py-2 text-center w-fit rounded-lg z-10 transition-transform duration-200 hover:scale-105"
          >
            See more
          </button>
        </div>
      </div>
    </div>
    <div class="section flex flex-col items-center justify-center gap-10 mt-2 p-4 bg-gray-100 w-full text-center">
  <h2 class="text-3xl font-bold text-blue-900 animate__bounceOut">Why choose ClickSafe?</h2>
  <div class="flex flex-row flex-wrap justify-center gap-10 w-full max-w-6xl">
    <div class="flex flex-col items-center p-4 w-80">
  <img src={badge} alt="Zero fraud liability badge" class="rounded-2xl" decoding="async" />
      <h2 class="text-xl font-bold text-blue-900 mb-2">Zero Fraud Liability</h2>
      <p class="text-blue-900 text-sm leading-relaxed">You're not responsible for unauthorized transactions with our advanced security measures.</p>
    </div>
    <div class="flex flex-col items-center p-4 w-80">
  <img src={badge} alt="card" class="rounded-2xl" decoding="async" />
      <h2 class="text-3xl font-bold text-blue-900 mb-2">No Annual Fees</h2>
      <p class="text-blue-900 text-sm leading-relaxed">Premium card benefits without the premium price tag.</p>
    </div>

    <div class="flex flex-col items-center p-4 w-80">
  <img src={badge} alt="card" class="rounded-2xl" decoding="async" />
      <h2 class="text-3xl font-bold text-blue-900 mb-2">Spending Analytics</h2>
      <p class="text-blue-900 text-sm leading-relaxed">Detailed spending reports and budgeting tools right in our app.</p>
    </div>
  </div>
  <div class="bg-gray-100 w-full flex items-center p-4">
  <marquee class="marq text-blue-900 font-bold text-2xl bg-gray-100 w-full"
  behavior="scroll" direction="left" loop="" scrollamount="10">
    <div class="mx-auto px-4 pb-2 max-w-48xl">
    <div class="grid grid-cols-4 gap-8 text-blue-900">
      <a class="flex items-center">
      <svg class="w-fit h-18 text-blue-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center md:justify-center sm:justify-start">
      <svg class="w-fit h-18 text-blue-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="w-fit h-18 text-blue-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
      <a class="flex items-center">
      <svg class="w-fit h-18 text-blue-900 hover:text-blue-400" viewBox="0 0 86 29" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                        fill="currentColor"></path>
                </svg>
      </a>
    </div>
  </div>
  </marquee>
</div>
<div class="text-blue-900 bg-gray-100">
  <div class="container mx-auto px-2 py-4">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
          <div class="mb-1 w-12 h-12 items-center mx-auto">
            <img src={card2} alt="Virtual cards issued" /></div>
          <h2 class="text-3xl text-blue-900">7M+</h2>
          <p class="text-blue-900">Virtual-Cards Issued</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
          <GiCardExchange class="w-12 h-12 mb-1 inline-block" />
          <h2 class="text-3xl text-blue-900">380K</h2>
          <p class="text-blue-900">Daily Transactions</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-900 w-12 h-12 mb-1 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-900">100%</h2>
          <p class="text-blue-900">Fraud Protections</p>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="px-2 py-4">
        <div class="mb-1 w-12 h-12 items-center mx-auto">
        <img src={card2} alt="Virtual cards issued" /></div>
          <h2 class="text-3xl text-blue-900">$5B</h2>
          <p class="text-blue-900">Annual Transactions</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex items-center justify-center text-blue-900 bg-gray-100">
  <div class="w-full px-2 py-4">
    <div class="grid grid-cols-1 gap-8">
      <div class="flex flex-col items-center">
        <h2 class="text-4xl font-extrabold">Smart Banking Cards</h2>
        <p class="block mt-2 font-medium text-blue-900 items-center">Experience the future of payments with our advanced card technology that seamlessly integrates cutting-edge security features with an effortless payment experience. Our cards offer contactless payments for quick transactions, digital wallet integration for convenience, and real-time spending controls that empower you to manage your finances with ease. Say goodbye to traditional barriers and hello to a new era of financial freedom where innovation meets simplicity in every swipe.</p>
        <div class="mt-2 flex flex-wrap gap-6 w-fit"> 
          <button href="get-cards#" class="p-3 rounded-lg grow border border-gray-300 w-fit text-blue-400 font-bold text-center hover:bg-blue-900">Order Cards</button>
          <button href="more-cards#" class="p-3 bg-blue-400 hover:bg-blue-900 text-gray-100 rounded-lg grow w-fit text-center">Compare Cards</button>
        </div>
      </div>
      <div class="relative flex items-center">
        <div class="relative p-2 text-center grow rounded-xl">
          <h2 class="text-2xl font-bold text-blue-900">Cardholder Testimonial</h2>
          <blockquote class="mt-2 pl-6 text-2xl text-blue-900 italic">
          &quot;The security features give me peace of mind, and the contactless payments are incredibly convenient.&quot;
    </blockquote>
        </div>
      </div>
      <div class="container mx-auto px-2 py-4">
    <div class="flex flex-wrap text-center">
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">15K+</h2>
          <p class="text-blue-900">Retail Partners</p>
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
          <p class="text-blue-900">Security Certified</p>
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
          <p class="text-blue-900">Annual Savings</p>
          <img src={star} alt="star" class="w-full"/>
        </div>
      </div>
      <div class="p-4 w-full md:w-1/4 sm:w-1/2">
        <div class="border border-gray-300 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-blue-400 w-12 h-12 mb-1 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="text-3xl text-blue-400">900</h2>
          <p class="text-blue-900">Global ATMs</p>
          <img src={stars} alt="stars" class="w-full"/>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
</div>
    <section id="pricing" class="section bg-white px-2 py-4 text-center">
      <h2 class="text-blue-900 text-3xl md:text-4xl font-bold mb-2">
        Choose Your ClickSafe Protection Plan
      </h2>
      <p class="text-blue-900 text-center font-semibold text-sm mt-2 mb-6">Yearly Money-Back Guarantee.</p>
      <div class="flex flex-wrap justify-center gap-6">
        <div class="relative max-w-sm w-full rounded-br-[50%] shadow-sm p-6 text-left bg-gray-100">
          <h3 class="text-lg text-blue-900 font-semibold mb-1">Basic Plan</h3>
          <div class="mb-2">
            <p class="line-through text-blue-400 text-sm">Before: $49</p>
            <p class="text-2xl text-blue-900 font-bold mt-1">Now: $30</p>
          </div>
          <ul class="text-blue-400 text-sm mb-4 space-y-1">
            <li>Single Card.</li>
            <li>Real-Time Alerts.</li>
            <li>1 Year Protection.</li>
          </ul>
          <button class="text-gray-100 text-center font-medium py-2 px-4 rounded-lg w-fit bg-blue-400 hover:bg-blue-900">
            Buy Now
          </button>
        </div>
        <div class="relative max-w-sm w-full rounded-br-[50%] shadow-sm p-6 text-left bg-gray-100">
          <h3 class="text-lg text-blue-900 font-semibold mb-1">Plus</h3>
          <div class="mb-2">
            <p class="line-through text-blue-400 text-sm">Before: $99</p>
            <p class="text-2xl text-blue-900 font-bold mt-1">Now: $67</p>
          </div>
          <ul class="text-blue-400 text-sm mb-4 space-y-1">
            <li>Upto 3 Cards.</li>
            <li>Prior Alerts.</li>
            <li>1 Year Protection.</li>
          </ul>
          <button class="text-gray-100 text-center font-medium py-2 px-4 rounded-lg w-fit bg-blue-400 hover:bg-blue-900">
            Buy Now
          </button>
        </div>
        <div class="relative max-w-sm w-full rounded-br-[50%] shadow-sm p-6 text-left bg-gray-100">
        <div class="absolute mx-auto right-[-3px] top-[-3px] z-10 h-24 w-20 overflow-hidden">
        <div class="before:border-t-solid before:border-l-solid before:border-r-solid after:border-t-solid after:border-l-solid after:border-r-solid relative left-[-4px] top-3.5 w-28 rotate-45 transform bg-[#cfe1f0] bg-gradient-to-b from-[#0d47a1] via-[#000080] to-[#0d47a1] px-0 py-1.5 text-center text-gray-100 shadow-[0px_0px_3px_#0000004d] drop-shadow-[#ffffff80_0px_1px_0px] before:absolute before:bottom-[-3px] before:left-0 before:border-l-[3px] before:border-r-[3px] before:border-t-[3px] before:border-l-transparent before:border-r-transparent before:border-t-[#50504f] before:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:border-l-[3px] after:border-r-[3px] after:border-t-[3px] after:border-l-transparent after:border-r-transparent after:border-t-[#50504f] after:content-['']">Hot Deals</div>
        </div>
          <h3 class="text-lg text-blue-900 font-semibold mb-1">Pro</h3>
          <div class="mb-2">
            <p class="line-through text-blue-400 text-sm">Before: $159</p>
            <p class="text-2xl text-blue-900 font-bold mt-1">Now: $99</p>
          </div>
          <ul class="text-blue-400 text-sm mb-4 space-y-1">
            <li>Upto 10 Cards.</li>
            <li>Geo-fencing Alerts.</li>
            <li>1 Year Protection.</li>
          </ul>
          <button class="text-gray-100 text-center font-medium py-2 px-4 rounded-lg w-fit bg-blue-400 hover:bg-blue-900">
            Buy Now
          </button>
        </div>
        <div class="relative max-w-sm w-full rounded-br-[50%] shadow-sm p-6 text-left bg-gray-100">
          <h3 class="text-lg text-blue-900 font-semibold mb-1">Enterprise</h3>
          <div class="mb-2">
            <p class="line-through text-blue-400 text-sm">Before: $299</p>
            <p class="text-2xl text-blue-900 font-bold mt-1">Now: $199</p>
          </div>
          <ul class="text-blue-400 text-sm mb-4 space-y-1">
            <li>Unlimited Cards.</li>
            <li>Custom Alerts.</li>
            <li>1 Year Protection.</li>
          </ul>
          <button class="text-gray-100 text-center font-medium py-2 px-4 rounded-lg w-fit bg-blue-400 transform-element hover:bg-blue-900">
            Buy Now
          </button>
        </div>
      </div>
    </section>
<section id="contact" class="section p-4 mt-2 mx-auto max-w-5xl">
  <h2 class="text-blue-900 text-3xl font-semibold mb-4">ClickSafe Support</h2>
  <div class="flex flex-col md:flex-row gap-8">
    <form onSubmit={handleFormSubmit} class="w-full md:w-1/2 bg-gray-100 rounded-lg shadow p-4 mb-8">
      <div class="w-full p-2">
        <div class="relative">  
        <label htmlFor="email" class="block py-4 text-lg text-blue-900 placeholder-gray-400 focus:placeholder-blue-300">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} class="w-full bg-white rounded-lg border text-base py-1 px-1 text-blue-900" required />
        </div>
        <div class="mb-4">
                <label htmlFor="card" class="block text-blue-900 font-medium mb-2">Card Type</label>
                <select
                  id="card"
                  name="card"
                  value={formData.card}
                  onChange={handleInputChange}
                  class="w-full p-3 font-semibold rounded-lg bg-blue-200 text-blue-900"
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
                <label htmlFor="message" class="block text-blue-900 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  class="w-full p-3 rounded-lg bg-blue-200 text-blue-900"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="px-4 py-2 bg-blue-400 hover:bg-blue-900 text-gray-100 rounded-lg text-lg font-medium">
                Send
              </button>
      </div>
      
    </form>
    <div class="w-full md:w-1/2">
      <section class="relative rounded-lg pt-4 mb-4 bg-white shadow">
        <div class="absolute px-2 top-0 left-0 rounded-tl-lg rounded-br-lg bg-blue-300 p-4">
          <div class="text-blue-900 px-2 w-fit font-semibold text-md">ClickSafe Support</div>
        </div>
          <div class="pt-12 px-4">
          <p class="text-blue-900 mb-4">24/7 Customer Support:</p>
          <p class="text-blue-400 font-bold text-xl"><span><FiPhoneCall /></span> +000 777 3930</p>
          <p class="text-blue-900 mt-6">For lost or stolen cards:</p>
          <p class="text-blue-400 font-bold text-xl"><span><FiPhoneCall /></span> +000 777 3930</p>
          <div class="w-full flex justify-end my-3">
            <button class="px-4 py-2 bg-blue-400 hover:bg-blue-900 text-gray-100 font-bold rounded-md">Chat Now</button>
          </div>
        </div>
      </section>  
    </div>
  </div>
</section>
<section id="faq" class="section bg-gray-100 py-18 px-2 mx-auto max-w-5xl">
      <div class="px-4 mx-auto max-w-7xl">
        <div class="text-center mx-auto max-w-2xl">
          <h2 class="text-blue-900 font-bold text-3xl mb-4">Frequently Asked Questions</h2>
          <p class="text-blue-900 max-w-2xl mx-auto leading-relaxed">
            Hints to common questions about ClickSafe cards.
          </p>
        </div>
        <div class="space-y-4">
          <div class="bg-gray-200 rounded-lg p-4">
          <p class="text-blue-900 font-medium">What is ClickSafe?</p>
            <button
              type="button"
              id="faq2"
              class="w-full text-left text-xl font-bold text-blue-900 flex justify-end items-center"
              onClick={() => toggleFaq(1)}
            >
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {faqOpen[1] && (
              <p class="mt-2 text-blue-900">
                ClickSafe offers smart banking cards with advanced security features for safe and convenient transactions.
              </p>
            )}
          </div>

          <div class="bg-gray-200 rounded-lg p-4">
          <p class="text-blue-900 font-medium">How to apply for card security features?</p>
            <button
              type="button"
              id="faq2"
              class="w-full text-left text-xl font-bold text-blue-900 flex justify-end items-center"
              onClick={() => toggleFaq(2)}
            >
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {faqOpen[2] && (
              <p class="mt-2 text-blue-900">
                Visit our order page to apply for a ClickSafe card. Choose your card type and fill out the application form.
              </p>
            )}
          </div>

          <div class="bg-gray-200 rounded-lg p-2">
          <p class="text-blue-900 font-medium">What are the security features?</p>
            <button
              type="button"
              id="faq3"
              class="w-full text-left text-xl font-bold text-blue-900 flex justify-end items-center"
              onClick={() => toggleFaq(3)}
            >
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {faqOpen[3] && (
              <p class="mt-2 text-blue-900">
                Our cards include military-grade encryption, real-time fraud monitoring, instant alerts, and card controls.
              </p>
            )}
          </div>
          <div class="bg-gray-200 rounded-lg p-4">
          <p class="text-blue-900 font-medium">What are the security features?</p>
            <button
              type="button"
              id="faq4"
              class="w-full text-left text-xl font-bold text-blue-900 flex justify-end items-center"
              onClick={() => toggleFaq(4)}
            >
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {faqOpen[4] && (
              <p class="mt-2 text-blue-900">
                Visit our order page to apply for a ClickSafe card. Choose your card type and fill out the application form.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>

<footer id="footer" aria-label="Footer" class="footer bg-blue-300">
  <div class="px-2 py-2 text-blue-900 mx-auto max-w-screen sm:px-6 sm:grid sm:grid-cols-6 space-x-2">
    <div class="p-2">
    <DiRedhat size={50} color="white" />
      <h3 class="font-bold text-2xl text-blue-900">ClickSafe</h3>
      <p class="text-gray-100 mb-6">Creating innovative ClickSafe solutions for modern businesses. Scalable, secure, and with user-friendly modern banking needs.
     </p>
    </div>
    <div class="p-2">
      <div class="text-2xl font-semibold text-blue-900">Products</div>
      <a class="my-2 block hover:text-gray-100" href="virtual#">Virtual Cards</a>
      <a class="my-2 block hover:text-gray-100" href="prepaid#">Prepaid Cards</a>
      <a class="my-2 block hover:text-gray-100" href="business#">Business Cards</a>
      <a class="my-2 block hover:text-gray-100" href="loyalty#">Loyalty cards</a>
    </div>
    <div class="p-2">
      <div class="text-2xl font-semibold text-blue-900">Resources</div>
      <a class="my-2 block hover:text-gray-100" href="security#">Card Security</a>
      <a class="my-2 block hover:text-gray-100" href="card-management#">Card Management</a>
      <a class="my-2 block hover:text-gray-100" href="fee#">Fee Schedule</a>
      <a class="my-2 block hover:text-gray-100" href="support#">Support Center</a>
    </div>
    <div class="p-2">
      <div class="text-2xl font-semibold text-blue-900">Company</div>
      <a class="my-2 block hover:text-gray-100" href="about#">About Us</a>
      <a class="my-2 block hover:text-gray-100" href="careers#">Careers</a>
      <a class="my-2 block hover:text-gray-100" href="partners#">Partners</a>
    </div>
    <div class="p-2">
      <div class="text-2xl font-semibold text-blue-900">Contact</div>
      <a class="my-2 block hover:text-gray-100" href="contact#"><span><FiPhoneCall /></span> +000 777 3930, Universe.VA</a>
      <a class="my-2 block hover:text-gray-100" href="email#">support@clicksafe.com</a>
      <a class="my-2 block hover:text-gray-100" href="info#">info.us</a> 
    </div>
    <div class="mt-6">
      <h4 class="text-blue-900 mb-3">ClickSafe Security Updates</h4>
      <form class="flex">
          <input id="email" type="email" placeholder="Enter email" aria-required="true" class="bg-gray-100 text-blue-900 px-4 py-2 rounded-lg w-full" />
        <button type="submit" class="bg-blue-400 hover:bg-blue-900 text-gray-100 font-bold px-4 py-2 rounded-lg">Subscribe
        </button>
      </form>
    </div>
  </div>
  <div class="bg-gray-200 pt-1">
      <div class="flex flex-col max-w-screen items-center px-2 pb-0 text-blue-900">
        <div class="my-5">® 2025 ClickSafe. All terms and conditions apply.</div>
    <button
          onClick={scrollToTop}
          class={`fixed bottom-6 right-6 z-50 bg-blue-300 text-blue-900 p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 ${
            showScrollButton 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
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

