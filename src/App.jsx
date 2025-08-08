import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "animate.css";
import { DiRedhat } from "react-icons/di";
import { GiCardExchange } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import FraudTimeline from './components/FraudTimeline';
import hero from "./assets/her1.jpg";
import stars from "./assets/stars-1.svg";
import star from "./assets/stars-5-1.svg";
import Feature from "./assets/Feature.jpg";
import Feature1 from "./assets/security.jpg";
import card2 from "./assets/card2.png";
import paycard from "./assets/paycard.png";
import credit from "./assets/credit.png";
import securrr from "./assets/securrr.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    card: "",
    message: "",
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showScrollButton, setShowScrollButton] = useState(false);
  function handleExploreClickSafe() {
    window.location.href = "/contactless";
  }
  function handleSecurityFeatures() {
    window.location.href = "/security";
  }
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleFaq = (id) => {
    setFaqOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ email: "", card: "", message: "" });
  };

  

  return (
    <>
      <div
        class="
          flex flex-col
          min-h-screen
          scroll-smooth"
      >
        <main
          class="
            flex-grow
          "
        >
          <nav
            aria-label="Main navigation"
            class="
              flex z-10
              w-full
              p-1
              text-blue-900
              bg-blue-300
              shadow-md
              justify-between items-center fixed top-0
            "
          >
            <motion.div
              class="
                flex
                font-bold
              "
              initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <DiRedhat
                size={50}
                color="white"
                class="
                  h-8
                  text-center
                "
              />
              <a
                href="/"
                class="
                  text-2xl text-blue-900
                "
              >
                ClickSafe
              </a>
            </motion.div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              class="
                flex flex-col
                justify-center items-center
                md:hidden
              "
            >
              <span
                class={`
                  block
                  w-6 h-0.5
                  mb-1
                  bg-blue-900
                  transition-transform
                  ${menuOpen ? "rotate-45 translate-y-1.5" : ""}
                `}
              ></span>
              <span
                class={`
                  block
                  w-6 h-0.5
                  mb-1
                  bg-blue-900
                  ${menuOpen ? "opacity-0" : ""}
                `}
              ></span>
              <span
                class={`
                  block
                  w-6 h-0.5
                  bg-blue-900
                  transition-transform
                  ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}
                `}
              ></span>
            </button>

            <div
              style={{ transition: "all 2s ease-in-out", top: "100%" }}
              class={`
                flex flex-col z-40
                w-full
                space-x-4
                bg-blue-300
                items-center absolute top-full left-0
                md:flex-row md:flex md:w-auto md:space-x-4 md:bg-transparent md:static
                ${menuOpen ? "flex" : "hidden"}
              `}
            >
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                class="
                  px-4 py-2
                  font-medium
                  rounded-lg
                  hover:text-gray-100
                "
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                class="
                  px-4 py-2
                  font-medium
                  rounded-lg
                  hover:text-gray-100
                "
              >
                About
              </a>
              <a
                href="#feature"
                onClick={() => setMenuOpen(false)}
                class="
                  px-4 py-2
                  font-medium
                  rounded-lg
                  hover:text-gray-100
                "
              >
                Feature
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                class="
                  px-4 py-2
                  font-medium
                  rounded-lg
                  hover:text-gray-100
                "
              >
                Contact
              </a>
            </div>
          </nav>
          <motion.div
            id="home"
            class="
              overflow-hidden
              h-screen
              text-blue-900
            "
            initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
          >
            <motion.div
              class="
                absolute inset-0
              "
              initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src={hero}
                alt="hero image"
                loading="lazy"
                decoding="async"
                class="
                  object-cover object-center
                  w-full h-full
                  opacity-85
                "
              />
              {/* <img src="http://www.zaccohn.com/images/gifs/lookatthat.gif" class="night-vision-effect h-full w-full"></img> */}
            </motion.div>
            <motion.div
              class="
                z-10 flex flex-col
                h-full
                p-6
                text-center
                relative items-center justify-center
              "
            >
              <motion.h1
                class="
                  max-w-5xl
                  mt-2 mb-2
                  text-4xl text-gray-100 font-bold
                  md:text-5xl
                "
                initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
              >
                Secure Your Credit & Debit Cards with ClickSafe.
              </motion.h1>
              <p
                class="
                  max-w-4xl
                  mb-6
                  text-blue-900 font-bold text-center text-lg leading-relaxed tracking-wide
                  bg-gray-100
                  rounded-lg
                "
              >
                Protect both your credit and debit cards with military-grade encryption, real-time fraud detection, 
      and instant transaction alerts. Verified. Secured. Trusted.
              </p>
              
              <button
      onClick={handleExploreClickSafe}
      className="px-6 py-3 text-lg text-gray-100 bg-blue-400 rounded-lg shadow-md hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
    >
      Get Started
    </button>
            </motion.div>
          </motion.div>
          <section id="about" class="py-12 px-4 bg-gray-100">
          <div class="py-12 px-4 bg-gray-100">
  <div class="max-w-full mx-auto text-center">
    <motion.h2 class="text-3xl font-bold text-blue-900 mb-8" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Why Choose ClickSafe?</motion.h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div class="p-6 flex flex-col items-center text-center">
        <img src={credit} alt="Zero fraud liability" class="rounded-2xl mb-3 h-20 object-contain" />
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Zero Fraud Liability</motion.h3>
        <p class="text-blue-900 text-sm">
          You're not responsible for unauthorized transactions on any linked credit or debit card. 
          Verified protection from day one.
        </p>
      </motion.div>
      <div class="p-6 flex flex-col items-center text-center">
        <img src={securrr} alt="Instant alerts" class="rounded-2xl mb-3 h-20 object-contain" />
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Instant Transaction Alerts</motion.h3>
        <p class="text-blue-900 text-sm">
          Receive real-time push or SMS alerts for every purchase — credit or debit — so you can act fast.
        </p>
      </div>
      <div class="p-6 flex flex-col items-center text-center">
        <img src={Feature1} alt="Freeze cards" class="rounded-2xl mb-3 h-20 object-contain" />
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Freeze Any Card Instantly</motion.h3>
        <p class="text-blue-900 text-sm">
          Lost your card? Freeze your credit or debit card in one tap. No more waiting for customer service.
        </p>
      </div>
      <div class="p-6 flex flex-col items-center text-center">
        <img src={paycard} alt="Global acceptance" class="mb-3 h-20 object-contain" />
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Works Worldwide</motion.h3>
        <p class="text-blue-900 text-sm">
          Accepted at millions of locations globally. Verified, secure, and ready for travel.
        </p>
      </div>
    </div>
  </div>
</div>
</section>
          <section id="feature" class="py-12 px-4 bg-gray-100">
  <div class="max-w-6xl mx-auto text-center">
    <motion.h1 class="text-3xl font-bold max-w-5xl text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Advanced Security for Your Card.</motion.h1>
    <p class="max-w-2xl mx-auto text-blue-900 leading-relaxed mb-10">
      Whether it’s a credit or debit card, ClickSafe ensures full protection with verified linking, 
      end-to-end encryption, and AI-powered fraud monitoring.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="p-6">
        <div class="w-fit mx-auto mb-4 text-blue-900">
        </div>
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Verified Card Linking</motion.h3>
        <p class="text-blue-900">
          Every credit and debit card is verified using SMS, email, or biometric authentication. 
          Temporary authorization holds confirm ownership securely and comply with PCI-DSS standards.
        </p>
      </div>
      <div class="p-6">
        <div class="w-fit mx-auto mb-4 text-blue-900">
        </div>
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Military-Grade Encryption</motion.h3>
        <p class="text-blue-900">
          All card data — whether credit or debit — is encrypted in transit and at rest using AES-256. 
          We never store full card numbers on our servers.
        </p>
      </div>
      <div class="p-6">
        <div class="w-fit mx-auto mb-4 text-blue-900">
        </div>
        <motion.h3 class="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Real-Time Fraud Monitoring</motion.h3>
        <p class="text-blue-900">
          AI analyzes every transaction on your credit and debit cards in real time. 
          Get instant alerts and freeze cards instantly if suspicious activity is detected.
        </p>
      </div>
    </div>
  </div>
  <FraudTimeline />
</section>
          <div
            class="
              text-center
            "
          >
            <motion.h1
              class="
                mt-2 
                font-bold text-3xl text-blue-900
              "
              initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
            >
              ClickSafe Security Features
            </motion.h1>
            <p
              class="
                max-w-2xl
                mx-auto
                text-blue-900 leading-relaxed
              "
            >
              Advanced protection for your financial transactions.
            </p>
          </div>

          <div
            class="
              flex flex-col
              w-full h-full
              py-10
              items-center
            "
          >
            <div
              class="
                flex flex-col
                w-full
                mx-auto mt-4
                gap-2 justify-center
                md:flex-row
                lg:gap-4
              "
            >
              <img
                src={Feature}
                alt="Contactless payment technology"
                decoding="async"
                class="
                  w-full
                  px-2 py-4
                  rounded-md
                  transition-transform
                  hover:scale-105 duration-300 shadow
                  md:w-1/2
                "
              />
              <div
                class="
                  w-full
                  p-4
                  rounded-lg
                  md:w-1/2
                "
              >
                <h2
                  class="
                    text-3xl font-semibold text-blue-900
                    md:text-4xl
                  "
                >
                  Advanced contactless technology.
                </h2>
                <p
                  class="
                    max-w-md
                    mt-4 mb-6 px-2 py-4
                    text-blue-900
                  "
                >
                  Our cards feature next-generation contactless payment
                  technology for faster, more secure transactions. Tap to pay
                  with enhanced encryption and transaction limits to protect
                  your funds.
                </p>
                <button
                  onClick={handleExploreClickSafe}
                  class="
                    px-2 py-4
                    text-gray-100 text-lg
                    bg-blue-400
                    rounded-lg
                    shadow-md transition-all
                    hover:bg-blue-900 duration-300 transform hover:scale-105
                  "
                >
                  Explore ClickSafe
                </button>
              </div>
            </div>
            <div
              class="
                flex flex-col-reverse
                w-full
                mx-auto mt-10
                gap-2 justify-center
                md:flex-row
              "
            >
              <div
                class="
                  w-full
                  p-4
                  rounded-lg
                  md:w-1/2
                "
              >
                <h2
                  class="
                    text-3xl font-semibold text-blue-900
                    md:text-4xl
                  "
                >
                  Bank-level security.
                </h2>
                <p
                  class="
                    max-w-md
                    mt-4 mb-6 px-2 py-4
                    text-blue-900
                  "
                >
                  All our cards come with military-grade encryption, real-time
                  fraud monitoring, and instant transaction blocking. Your
                  financial security is our top priority with 24/7 monitoring.
                </p>
                <button
                  onClick={handleSecurityFeatures}
                  class="
                    px-2 py-4
                    text-gray-100 text-lg
                    bg-blue-400
                    rounded-lg
                    shadow-md transition-all
                    hover:bg-blue-900 duration-300 transform hover:scale-105
                  "
                >
                  Security Features
                </button>
              </div>
              <img
                src={Feature1}
                alt="Security feature"
                decoding="async"
                class="
                  w-full
                  px-2 py-4
                  rounded-md
                  transition-transform
                  hover:scale-105 duration-300 shadow
                  md:w-1/2
                "
              />
            </div>
          </div>
          <div
            class="
              max-w-7xl
              px-4 mx-auto
            "
          >
            
            </div>      
<div
              class="
                flex
                w-full
                p-4
                bg-gray-100
                items-center
              "
            >
              <marquee
                behavior="scroll"
                direction="left"
                loop=""
                scrollamount="10"
                class="
                  w-full
                  text-blue-900 font-bold text-2xl
                  bg-gray-100
                  marquee
                  hover:marquee-hover
                "
              >
                <div
                  class="
                    max-w-48xl
                    mx-auto px-4 pb-2
                  "
                >
                  <div
                    class="
                      grid grid-cols-4
                      text-blue-900
                      gap-8
                    "
                  >
                    <a
          href="#stripe"
          class="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
            alt="Stripe" 
            class="
              h-12
              object-contain
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </a>
                    <a
          href="#paypal"
          class="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
            alt="PayPal" 
            class="
              h-12
              object-contain
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </a>
                    <a
          href="#mastercard"
          class="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" 
            alt="Mastercard" 
            class="
              h-12
              object-contain
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </a>
        
                    <a
          href="#visa"
          class="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
            alt="Visa" 
            class="
              h-12
              object-contain
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </a>
                  </div>
                </div>
              </marquee>
              <div
  class="
    flex
    w-full
    p-4
    bg-gray-100
    items-center
  "
>
</div>
            </div>
            <div
              class="
                text-blue-900
                bg-gray-100
              "
            >
              <div
                class="
                  container
                  mx-auto px-2 py-4
                "
              >
                <div
                  class="
                    flex flex-wrap
                    text-center
                  "
                >
                  <div
                    class="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      class="
                        px-2 py-4
                      "
                    >
                      <div
                        class="
                          w-12 h-12
                          mb-1 mx-auto
                          items-center
                        "
                      >
                        <img src={card2} alt="Virtual cards issued" />
                      </div>
                      <h2
                        class="
                          text-3xl text-blue-900
                        "
                      >
                        7M+
                      </h2>
                      <p
                        class="
                          text-blue-900
                        "
                      >
                        Virtual-Cards Issued
                      </p>
                    </div>
                  </div>
                  <div
                    class="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      class="
                        px-2 py-4
                      "
                    >
                      <GiCardExchange
                        class="
                          inline-block
                          w-12 h-12
                          mb-1
                        "
                      />
                      <h2
                        class="
                          text-3xl text-blue-900
                        "
                      >
                        380K
                      </h2>
                      <p
                        class="
                          text-blue-900
                        "
                      >
                        Daily Transactions
                      </p>
                    </div>
                  </div>
                  <div
                    class="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      class="
                        px-2 py-4
                      "
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        class="
                          inline-block
                          w-12 h-12
                          mb-1
                          text-blue-900
                        "
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <h2
                        class="
                          text-3xl text-blue-900
                        "
                      >
                        100%
                      </h2>
                      <p
                        class="
                          text-blue-900
                        "
                      >
                        Fraud Protections
                      </p>
                    </div>
                  </div>
                  <div
                    class="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      class="
                        px-2 py-4
                      "
                    >
                      <div
                        class="
                          w-12 h-12
                          mb-1 mx-auto
                          items-center
                        "
                      >
                        <img src={card2} alt="Virtual cards issued" />
                      </div>
                      <h2
                        class="
                          text-3xl text-blue-900
                        "
                      >
                        $5B
                      </h2>
                      <p
                        class="
                          text-blue-900
                        "
                      >
                        Annual Transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                flex
                text-blue-900
                bg-gray-100
                items-center justify-center
              "
            >
              <div
                class="
                  w-full
                  px-2 py-4
                "
              >
                <div
                  class="
                    grid grid-cols-1
                    gap-8
                  "
                >
                  <div
                    class="
                      flex flex-col
                      items-center
                    "
                  >
                    <h2
                      class="
                        text-4xl font-extrabold
                      "
                    >
                      Smart Banking Cards
                    </h2>
                    <p
                      class="
                        block
                        mt-2
                        font-medium text-blue-900
                        items-center
                      "
                    >
                      Experience the future of payments with our advanced card
                      technology that seamlessly integrates cutting-edge
                      security features with an effortless payment experience.
                      Our cards offer contactless payments for quick
                      transactions, digital wallet integration for convenience,
                      and real-time spending controls that empower you to manage
                      your finances with ease. Say goodbye to traditional
                      barriers and hello to a new era of financial freedom where
                      innovation meets simplicity in every swipe.
                    </p>
                    <div
                      class="
                        flex flex-wrap
                        w-fit
                        mt-2
                        gap-6
                      "
                    >
                      <button
                        onClick={() => window.location.href = "get-cards"}
                        class="
                          w-fit
                          p-3
                          text-blue-400 font-bold text-center
                          rounded-lg border border-gray-300
                          grow hover:bg-blue-900
                        "
                      >
                        Order Cards
                      </button>
                      <button
                        href="more-cards#"
                        class="
                          w-fit
                          p-3
                          text-gray-100 text-center
                          bg-blue-400
                          rounded-lg
                          hover:bg-blue-900 grow
                        "
                      >
                        Credit validator
                      </button>
                    </div>
                  </div>      
                  <div
                    class="
                      flex
                      relative items-center
                    "
                  >
                    <div
                      class="
                        p-2
                        text-center
                        rounded-xl
                        relative grow
                      "
                    >
                      <h2
                        class="
                          text-2xl font-bold text-blue-900
                        "
                      >
                        Cardholder Testimonial
                      </h2>
                      <blockquote
                        class="
                          mt-2 pl-6
                          text-2xl text-blue-900
                          italic
                        "
                      >
                        &quot;The security features give me peace of mind, and
                        the contactless payments are incredibly
                        convenient.&quot;
                      </blockquote>
                    </div>
                  </div>
                  
                  <div
                    class="
                      container
                      mx-auto px-2 py-4
                    "
                  >
                    <div
                      class="
                        flex flex-wrap
                        text-center
                      "
                    >
                      <div
                        class="
                          w-full
                          p-4
                          sm:w-1/2
                          md:w-1/4
                        "
                      >
                        <div
                          class="
                            px-4 py-6
                            border border-gray-300 rounded-lg
                          "
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            class="
                              inline-block
                              w-12 h-12
                              mb-3
                              text-blue-900
                            "
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          <h2
                            class="
                              text-3xl text-blue-900
                            "
                          >
                            15K+
                          </h2>
                          <p
                            class="
                              text-blue-900
                            "
                          >
                            Retail Partners
                          </p>
                          <img
                            src={star}
                            alt="star"
                            class="
                              w-full
                            "
                          />
                        </div>
                      </div>
                      <div
                        class="
                          w-full
                          p-4
                          sm:w-1/2
                          md:w-1/4
                        "
                      >
                        <div
                          class="
                            px-4 py-6
                            border border-gray-300 rounded-lg
                          "
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            class="
                              inline-block
                              w-12 h-12
                              mb-3
                              text-blue-900
                            "
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          <h2
                            class="
                              text-3xl text-blue-900
                            "
                          >
                            700+
                          </h2>
                          <p
                            class="
                              text-blue-900
                            "
                          >
                            Security Certified
                          </p>
                          <img
                            src={stars}
                            alt="stars"
                            class="
                              w-full
                            "
                          />
                        </div>
                      </div>
                      <div
                        class="
                          w-full
                          p-4
                          sm:w-1/2
                          md:w-1/4
                        "
                      >
                        <div
                          class="
                            px-4 py-6
                            border border-gray-300 rounded-lg
                          "
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            class="
                              inline-block
                              w-12 h-12
                              mb-3
                              text-blue-900
                            "
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          <h2
                            class="
                              text-3xl text-blue-900
                            "
                          >
                            $4B
                          </h2>
                          <p
                            class="
                              text-blue-900
                            "
                          >
                            Annual Savings
                          </p>
                          <img
                            src={star}
                            alt="star"
                            class="
                              w-full
                            "
                          />
                        </div>
                      </div>
                      <div
                        class="
                          w-full
                          p-4
                          sm:w-1/2
                          md:w-1/4
                        "
                      >
                        <div
                          class="
                            px-4 py-6
                            border border-gray-300 rounded-lg
                          "
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            class="
                              inline-block
                              w-12 h-12
                              mb-1
                              text-blue-900
                            "
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          <h2
                            class="
                              text-3xl text-blue-900
                            "
                          >
                            900
                          </h2>
                          <p
                            class="
                              text-blue-900
                            "
                          >
                            Global ATMs
                          </p>
                          <img
                            src={stars}
                            alt="stars"
                            class="
                              w-full
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <section
            id="pricing"
            class="
              px-2 py-4
              text-center
              bg-gray-100
              section
            "
          >
            <h2
              class="
                mb-2
                text-blue-900 text-3xl font-bold
                md:text-4xl
              "
            >
              Choose Your ClickSafe Protection Plan
            </h2>
            <p
              class="p-4 justify-center
                max-w-3xl mx-auto
                leading-relaxed
                mt-2 mb-6
                text-blue-900 text-center font-semibold text-sm
              "
            >
              Secure your credit and debit cards with flexible plans. Verified linking, real-time alerts and full fraud protection in every tier.
            </p>
            <div
              class="
                flex flex-wrap
                justify-center gap-6
              "
            >
              <div
                class="
                  max-w-sm w-full
                  p-6
                  text-left
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <h3
                  class="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Basic Plan
                </h3>
                <div
                  class="
                    mb-2
                  "
                >
                  <p
                    class="
                      text-blue-400 text-sm
                      line-through
                    "
                  >
                    Before: $49/month
                  </p>
                  <p
                    class="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    Now: FREE
                  </p>
                </div>
                <ul
                  class="
                    mb-4 space-y-1
                    text-blue-400 text-sm
                  "
                >
                  <li>Single Card  (Credit or Debit).</li>
                  <li>Instant transaction Alerts.</li>
                  <li>Freeze/Unfreeze anytime.</li>
                  <li>Verified Card Setup</li>
                </ul>
                <button
                  class="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    hover:bg-blue-900
                  "
                >
                  Buy Now
                </button>
              </div>
              <div
                class="
                  max-w-sm w-full
                  p-6
                  text-left
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <h3
                  class="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Plus
                </h3>
                <div
                  class="
                    mb-2
                  "
                >
                  <p
                    class="
                      text-blue-400 text-sm
                      line-through
                    "
                  >
                    Before: $99/year
                  </p>
                  <p
                    class="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    Now: $67/year
                  </p>
                </div>
                <ul class="mb-4 space-y-2 text-blue-400 text-left text-sm">
          <li>Up to 10 Cards (Credit/Debit)</li>
          <li>Geo-Fencing & Location Alerts</li>
          <li>Verified Biometric Setup</li>
          <li>24/7 Fraud Monitoring</li>
        </ul>
                <button
                  class="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    hover:bg-blue-900
                  "
                >
                  Buy Now
                </button>
              </div>
              <div
                class="
                  max-w-sm w-full
                  p-4
                  text-left
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <div
                  class="
                    z-10 overflow-hidden
                    h-24 w-20
                    mx-auto
                    absolute right-[-3px] top-[-3px]
                  "
                >
                  <div
                    class="
                      w-28
                      px-0 py-1.5
                      text-center text-gray-100
                      bg-[#cfe1f0] bg-gradient-to-b from-[#0d47a1] via-[#000080] to-[#0d47a1]
                      shadow-[0px_0px_3px_#0000004d]
                      before:border-t-solid before:border-l-solid before:border-r-solid after:border-t-solid after:border-l-solid after:border-r-solid relative left-[-4px] top-3.5 rotate-45 transform drop-shadow-[#ffffff80_0px_1px_0px] before:absolute before:bottom-[-3px] before:left-0 before:border-l-[3px] before:border-r-[3px] before:border-t-[3px] before:border-l-transparent before:border-r-transparent before:border-t-[#50504f] before:content-[''] after:absolute after:bottom-[-3px] after:right-0 after:border-l-[3px] after:border-r-[3px] after:border-t-[3px] after:border-l-transparent after:border-r-transparent after:border-t-[#50504f] after:content-['']
                    "
                  >
                    Hot Deals
                  </div>
                </div>
                <h3
                  class="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Pro
                </h3>
                <div
                  class="
                    mb-2
                  "
                >
                  <p
                    class="
                      text-blue-400 text-sm
                      line-through
                    "
                  >
                    Before: $159/year
                  </p>
                  <p
                    class="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    Now: $99/year
                  </p>
                </div>
                <ul
                  class="
                    mb-4 space-y-1
                    text-blue-400 text-sm
                  "
                >
                  <li>Upto 10 Cards (Credit & Debit).</li>
                  <li>Geo-fencing  Location Alerts.</li>
                  <li>1 Year Protection.</li>
                  <li>Instant Global Transaction.</li>
                </ul>
                <button
                  class="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    hover:bg-blue-900
                  "
                >
                  Buy Now
                </button>
              </div>
              <div
                class="
                  max-w-sm w-full
                  p-6
                  text-left
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <h3
                  class="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Enterprise
                </h3>
                <div
                  class="
                    mb-2
                  "
                >
                  <p
                    class="
                      text-blue-400 text-sm
                      line-through
                    "
                  >
                    Before: $299/year
                  </p>
                  <p
                    class="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    Now: $199/year
                  </p>
                </div>
                <ul class="mb-4 space-y-2 text-blue-400 text-left text-sm">
          <li>Unlimited Cards (Credit & Debit)</li>
          <li>Custom Alerts & Rules</li>
          <li>Advanced Verification Logs</li>
          <li>Business-Grade Security</li>
        </ul>
                <button
                  class="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    transform-element
                    hover:bg-blue-900
                  "
                >
                  Buy Now
                </button>
              </div>
            </div>
          </section>

          <section
            id="contact"
            class="
              max-w-5xl
              p-4 mt-2 mx-auto
              section
            "
          >
            <h2
              class="
                mb-4
                text-blue-900 text-3xl font-semibold
              "
            >
              Need Help Verifying Your Card?
            </h2>
            <div
              class="
                flex flex-col
                gap-8
                md:flex-row
              "
            >
          
              <form
                onSubmit={handleFormSubmit}
                class="
                  w-full
                  p-4 mb-8
                  bg-gray-100
                  rounded-lg
                bg-gradient-to-br from-gray-100 to-blue-100
                  md:w-1/2
                "
              >
                <div
                  class="
                    w-full
                    p-2
                  "
                >
                  <div
                    class="
                      relative mb-2
                    "
                  >
                    <label
                      htmlFor="email"
                      class="
                        block
                        py-4
                        text-lg text-blue-900 placeholder-gray-100
                        focus:placeholder-blue-300
                      "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      class="
                        w-full
                        py-1 px-1
                        text-base text-blue-900
                        bg-white
                        rounded-lg border
                      "
                    />
                  </div>
                  <div
                    class="
                      mb-4
                    "
                  >
                    <label
                      htmlFor="card"
                      class="
                        block
                        mb-2
                        text-blue-900 font-medium
                      "
                    >
                      Card Type
                    </label>
                    <select
                      id="card"
                      name="card"
                      value={formData.card}
                      onChange={handleInputChange}
                      required
                      class="
                        w-full
                        p-3
                        font-semibold text-blue-900
                        bg-blue-200
                        rounded-lg
                      "
                    >
                      <option value="">Select a card</option>
                      <option value="platinum">Platinum Credit Card</option>
                      <option value="business">Business Expense Card</option>
                      <option value="virtual">Virtual Debit Card</option>
                      <option value="rewards">Rewards Mastercard</option>
                    </select>
                  </div>
                  <div
                    class="
                      mb-4
                    "
                  >
                    <label
                      htmlFor="message"
                      class="
                        block
                        mb-2
                        text-blue-900 font-medium
                      "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                      class="
                        w-full
                        p-3
                        text-blue-900
                        bg-blue-200
                        rounded-lg
                      "
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="
                      px-4 py-2
                      text-gray-100 text-lg font-medium
                      bg-blue-400
                      rounded-lg
                      hover:bg-blue-900
                    "
                  >
                    Send
                  </button>
                </div>
              </form>
              <div
                class="
                  w-full
                  md:w-1/2
                "
              >
                <section
                  class="
                    pt-4 mb-4
                    bg-white
                    rounded-lg
                    relative shadow
                  "
                >
                  <div
                    class="
                      px-2 p-4
                      bg-blue-300
                      rounded-tl-lg rounded-br-lg
                      absolute top-0 left-0
                    "
                  >
                    <div
                      class="
                        w-fit
                        px-2
                        text-blue-900 font-semibold text-md
                      "
                    >
                      ClickSafe Support
                    </div>
                  </div>
                  <div
                    class="
                      pt-12 px-4
                    "
                  >
                    <p
                      class="
                        mb-4
                        text-blue-900
                      "
                    >
                      24/7 Customer Support call us for any questions:
                    </p>
                    <p
                      class="
                        text-blue-400 font-bold text-xl
                      "
                    >
                      <span>
                        <FiPhoneCall />
                      </span>{" "}
                      +000 777 3930
                    </p>
                    <p
                      class="
                        mt-6
                        text-blue-900
                      "
                    >
                      For lost or stolen cards call us immediately:
                    </p>
                    <p
                      class="
                        text-blue-400 font-bold text-xl
                      "
                    >
                      <span>
                        <FiPhoneCall />
                      </span>{" "}
                      +000 777 3930
                    </p>
                    <div
                      class="
                        flex
                        w-full
                        my-3
                        justify-end
                      "
                    >
                      <button
                        class="
                          px-4 py-2
                          text-gray-100 font-bold
                          bg-blue-400
                          rounded-md
                          hover:bg-blue-900
                        "
                      >
                        Chat Now
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section id="faq" class="max-w-5xl py-12 px-2 mx-auto bg-gray-100 section">
  <div className="max-w-7xl px-4 mx-auto">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="mb-4 text-blue-900 font-bold text-3xl">Frequently Asked Questions</h2>
      <p className="text-blue-900 leading-relaxed">Common questions about ClickSafe card safety, verification, and protection for both credit and debit cards.</p>
    </div>
    <div className="space-y-4 mt-8">
      <div className="p-4 bg-gray-200 rounded-lg">
        <p className="text-blue-900 font-medium">What security features protect my credit and debit cards?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(1)} 
          className="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {faqOpen[1] && (
          <p className="mt-2 text-blue-900">
            ClickSafe applies the same military-grade encryption, real-time fraud monitoring, and instant transaction alerts to both credit and debit cards. 
            All cards are verified using multi-factor authentication during setup and support biometric login, tokenization, and dynamic CVV for secure transactions.
          </p>
        )}
      </div>
      <div class="p-4 bg-gray-200 rounded-lg">
        <p class="text-blue-900 font-medium">How do I verify my credit or debit card with ClickSafe?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(2)} 
          class="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[2] && (
          <p class="mt-2 text-blue-900">
            To verify your card, simply add it in the ClickSafe app. We’ll authenticate ownership via SMS, email, or in-app biometrics. 
            A small temporary authorization hold may be used for validation, which clears automatically. Both credit and debit cards are verified securely using PCI-DSS compliant processes.
          </p>
        )}
      </div>
      <div class="p-4 bg-gray-200 rounded-lg">
        <p class="text-blue-900 font-medium">Are my transactions monitored in real time?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(3)} 
          class="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[3] && (
          <p class="mt-2 text-blue-900">
            Yes. Every transaction on your ClickSafe credit or debit card is analyzed in real time using AI-powered fraud detection. 
            You’ll receive instant alerts for suspicious activity and can freeze your card instantly from the app.
          </p>
        )}
      </div>
      <div class="p-4 bg-gray-200 rounded-lg">
        <p class="text-blue-900 font-medium">Can I control where and how my card is used?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(4)} 
          class="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[4] && (
          <p class="mt-2 text-blue-900">
            Absolutely. With ClickSafe, you can set spending limits, disable international transactions, restrict usage by merchant type (e.g., no gambling sites), 
            and enable geo-fencing to block transactions outside your location. These controls apply to both credit and debit cards.
          </p>
        )}
      </div>
    </div>
  </div>
  <div className="p-2 mt-4 text-center">
        <p className="text-xs text-blue-900">
          24/7 monitoring • Military-grade encryption • Instant alerts • Global coverage
        </p>
      </div>
</section>
          <footer
            id="footer"
            aria-label="Footer"
            class="
              bg-blue-300
              footer
            "
          >
            <div
              class="
                max-w-screen
                px-2 py-2 mx-auto space-x-2
                text-blue-900
                relative
                sm:grid sm:grid-cols-6 sm:px-6
              "
            >
              <div
                class="
                  p-2
                "
              >
                <DiRedhat size={50} color="white" />
                <h3
                  class="
                    font-bold text-2xl text-blue-900 ml-2
                  "
                >
                  ClickSafe
                </h3>
                <p
                  class="
                    mb-2
                    text-gray-100 mt-2
                  "
                >
                  Creating innovative ClickSafe solutions for modern businesses.
                  Scalable, secure, and with user-friendly modern banking needs.
                </p>
              </div>
              <div
                class="
                  p-2
                "
              >
                <div
                  class="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Products
                </div>
                <a
                  href="virtual#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Virtual Cards
                </a>
                <a
                  href="prepaid#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Prepaid Cards
                </a>
                <a
                  href="business#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Business Cards
                </a>
                <a
                  href="loyalty#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Loyalty cards
                </a>
              </div>
              <div
                class="
                  p-2
                "
              >
                <div
                  class="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Company
                </div>
                <a
                  href="about#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  About Us
                </a>
                <a
                  href="careers#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Careers
                </a>
                <a
                  href="partners#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Partners
                </a>
              </div>
              <div
                class="
                  p-2
                "
              >
                <div
                  class="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Contact
                </div>
                <a href="#contact" className="block my-2 hover:text-gray-100">
        <span className="inline-block align-middle">
          <FiPhoneCall />
        </span>{" "}
        +000 777 3930, Universe.VA
      </a>
                <a
                  href="email#"
                  class="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  support@clicksafe.com
                </a>
              </div>
              <div
                className="
                  mt-2 p-2
                "
              >
                <h4
                  className="
                    mb-2
                    text-blue-900
                  "
                >
                  ClickSafe Security Updates
                </h4>
                <form
                  className="
                    flex
                  "
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    aria-required="true"
                    className="
                      w-full
                      px-4 py-2
                      text-blue-900
                      bg-gray-100
                      rounded-lg
                    "
                  />
                  <button
                    type="submit"
                    className="
                      px-4 py-2
                      text-gray-100 font-bold
                      bg-blue-400
                      rounded-lg
                      hover:bg-blue-900
                    "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div
              className="
                pt-2 mb-2
                bg-gray-200
              "
            >
              <div className="text-center pt-2 text-sm text-blue-900 border-gray-200 mb-2">
    <span>© 2025 ClickSafe. All rights reserved.</span>
    <span className="mx-4">Privacy Policy</span>
  </div>
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={`
                z-50
                p-3
                text-blue-400
                bg-blue-900
                rounded-full
                shadow-md transition-all
                fixed bottom-6 right-6 duration-300 transform hover:scale-110
                ${
                showScrollButton
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="
                  h-6 w-6
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </footer>
          
        </main>
      </div>
    </>
  );
};
export default App;
