import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "animate.css";
import { DiRedhat } from "react-icons/di";
import { GiCardExchange } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import FraudTimeline from './components/FraudTimeline';
import hero from "./assets/card.png";
import stars from "./assets/stars-1.svg";
import star from "./assets/stars-5-1.svg";
import Feature from "./assets/Feature.jpg";
import Feature1 from "./assets/security.jpg";
import card2 from "./assets/card2.png";
import pay from "./assets/pay.png";
import credit from "./assets/credit.png";
import secure from "./assets/secure.png";

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
  function handleExploreSecureCard() {
    window.location.href = "/virtual";
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
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ email: "", card: "", message: "" });
  };

  

  return (
    <>
      <div
        className="
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
              className="
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
                className="
                  text-2xl text-blue-900
                "
              >
                SecureCard+
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
                className={`
                  block
                  w-6 h-0.5
                  mb-1
                  bg-blue-900
                  ${menuOpen ? "opacity-0" : ""}
                `}
              ></span>
              <span
                className={`
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
              className={`
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
                className="
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
                className="
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
                className="
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
                className="
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
              className="
                absolute inset-0
              "
              initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src={hero}
                alt="SecureCard+ virtual card"
                loading="lazy"
                decoding="async"
                className="
                  object-cover object-center
                  w-full h-full
                  opacity-85
                "
              />
              {/* <img src="http://www.zaccohn.com/images/gifs/lookatthat.gif" class="night-vision-effect h-full w-full"></img> */}
            </motion.div>
            <motion.div
              className="
                z-10 flex flex-col
                h-full
                p-6
                text-center
                relative items-center justify-center
              "
            >
              <motion.h1
                className="
                  max-w-5xl
                  mt-2 mb-2
                  text-4xl text-blue-900 font-bold
                  md:text-5xl
                "
                initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
              >
                SecureCard+ Your Ultimate Virtual Credit Card.
              </motion.h1>
              <p
                className="
                  max-w-4xl
                  mb-6
                  text-blue-900 font-bold text-center text-lg leading-relaxed tracking-wide
                  bg-gray-100
                  rounded-lg p-4
                "
              >
                Generate random, secure virtual card numbers in seconds. Never share your real card again.
              </p>
              
              <button
      onClick={handleExploreSecureCard}
      className="px-6 py-3 text-lg text-gray-100 bg-blue-400 rounded-lg shadow-md hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
    >
      Get Your SecureCard+
    </button>
            </motion.div>
          </motion.div>
          
          <section id="about" className="py-2 px-2 bg-gray-100">
          <div className="py-2 px-2 bg-gray-100">
  <div className="max-w-full mx-auto text-center">
    <motion.h2 className="text-3xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Why Choose SecureCard+ ?</motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div className="p-6 flex flex-col items-center text-center">
        <img src={credit} alt="Random card generation" className="rounded-2xl mb-2 h-20 object-contain" />
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Random Card Generation</motion.h3>
        <p className="text-blue-900 text-sm">
        Create unique, disposable virtual card numbers instantly, each one isolated, secure and verified.
        </p>
      </motion.div>
      <div className="p-6 flex flex-col items-center text-center">
        <img src={secure} alt="Enhanced security" className="rounded-2xl mb-2 h-20 object-contain" />
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Enhanced Security</motion.h3>
        <p className="text-blue-900 text-sm">
        Your real card details stay hidden. No more data breaches or fraud exposure.
        </p>
      </div>
      <div className="p-6 flex flex-col items-center text-center">
        <img src={Feature1} alt="Spending controls" className="rounded-2xl mb-2 h-20 object-contain" />
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Custom Spending Controls</motion.h3>
        <p className="text-blue-900 text-sm">
        Set limits, expiration dates, and merchant restrictions for full control over your spending.
        </p>
      </div>
      <div className="p-6 flex flex-col items-center text-center">
        <img src={pay} alt="Privacy protection" className="mb-2 h-20 object-contain" />
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Privacy Protection</motion.h3>
        <p className="text-blue-900 text-sm">
        Avoid spam, tracking, and unwanted spending while your info stays private and secure.
        </p>
      </div>
    </div>
  </div>
</div>
</section>
          <section id="feature" className="py-2 px-2 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h1 className="text-3xl font-bold max-w-5xl text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Smart, Secure, Private.</motion.h1>
    <p className="max-w-2xl mx-auto text-blue-900 leading-relaxed mb-10">
      Generate random virtual card numbers for one-time purchases, subscriptions and online shopping without ever exposing your real card details.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-2">
        <div className="w-fit mx-auto mb-2 text-blue-900">
        </div>
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Instant Random Cards</motion.h3>
        <p className="text-blue-900">
        Generate a new virtual card number in seconds randomly, encrypted, and ready to use for secure online transactions.
        </p>
      </div>
      <div className="p-2">
        <div className="w-fit mx-auto mb-2 text-blue-900">
        </div>
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Full Transaction Control</motion.h3>
        <p className="text-blue-900">
        Freeze, delete and limit spending on any virtual card with just a click.
        </p>
      </div>
      <div className="p-2">
        <div className="w-fit mx-auto mb-2 text-blue-900">
        </div>
        <motion.h3 className="text-xl font-bold text-blue-900 mb-2" initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}>Real-Time Monitoring</motion.h3>
        <p className="text-blue-900">
          Monitor all your transactions from a single, secure dashboard with instant alerts and freeze cards instantly if suspicious activity is detected.
        </p>
      </div>
    </div>
  </div>
  <FraudTimeline />
</section>
          {/* <div
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
                  onClick={handleExploreSecureCard}
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
            
            </div>       */}
<div
              className="
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
                className="
                  w-full
                  text-blue-900 font-bold text-2xl
                  bg-gray-100
                  marquee
                  hover:marquee-hover
                "
              >
                <div
                  className="
                    max-w-48xl
                    mx-auto px-4 pb-2
                  "
                >
                  <div
                    className="
                      grid grid-cols-4
                      text-blue-900
                      gap-8
                    "
                  >
                    <a
          href="#stripe"
          className="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
            alt="Stripe" 
            className="
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
          className="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
            alt="PayPal" 
            className="
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
          className="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" 
            alt="Mastercard" 
            className="
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
          className="
            flex
            items-center
            justify-center
          "
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
            alt="Visa" 
            className="
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
  className="
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
              className="
                text-blue-900
                bg-gray-100
              "
            >
              <div
                className="
                  container
                  mx-auto px-2 py-4
                "
              >
                <div
                  className="
                    flex flex-wrap
                    text-center
                  "
                >
                  <div
                    className="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      className="
                        px-2 py-4
                      "
                    >
                      <div
                        className="
                          w-12 h-12
                          mb-1 mx-auto
                          items-center
                        "
                      >
                        <img src={card2} alt="Virtual cards issued" />
                      </div>
                      <h2
                        className="
                          text-3xl text-blue-900
                        "
                      >
                        7M+
                      </h2>
                      <p
                        className="
                          text-blue-900 text-3xl
                        "
                      >
                        Virtual Cards Issued
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      className="
                        px-2 py-4
                      "
                    >
                      <GiCardExchange
                        className="
                          inline-block
                          w-12 h-12
                          mb-1
                        "
                      />
                      <h2
                        className="
                          text-3xl text-blue-900
                        "
                      >
                        380K
                      </h2>
                      <p
                        className="
                          text-blue-900 text-3xl
                        "
                      >
                        Daily Transactions
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                      w-full
                      p-4<FraudTimeline />
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      className="
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
                        className="
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
                        className="
                          text-3xl text-blue-900
                        "
                      >
                        100%
                      </h2>
                      <p
                        className="
                          text-blue-900 text-3xl
                        "
                      >
                        Fraud Protection
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                      w-full
                      p-4
                      sm:w-1/2
                      md:w-1/4
                    "
                  >
                    <div
                      className="
                        px-2 py-4
                      "
                    >
                      <div
                        className="
                          w-12 h-12
                          mb-1 mx-auto
                          items-center
                        "
                      >
                        <img src={card2} alt="Transactions secured" />
                      </div>
                      <h2
                        className="
                          text-3xl text-blue-900
                        "
                      >
                        $5B
                      </h2>
                      <p
                        className="
                          text-blue-900 text-3xl
                        "
                      >
                        Secured Transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
                flex
                text-blue-900
                bg-gray-100
                items-center justify-center
              "
            >
              <div
                className="
                  w-full
                  px-2 py-4
                "
              >     
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
                            className="
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
                        className="
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
          
          <section
            id="pricing"
            className="
              px-2 py-4
              text-center
              bg-gray-100
              section
            "
          >
            <h2
              className="
                mb-2
                text-blue-900 text-3xl font-bold
                md:text-4xl
              "
            >
              Choose Your SecureCard+ Plan
            </h2>
            <p
              className="p-4 justify-center
                max-w-3xl mx-auto
                leading-relaxed
                mt-2 mb-6
                text-blue-900 text-center font-semibold text-sm
              "
            >
              Generate random virtual cards with flexible plans. Security, privacy, and control in every tier.
            </p>
            <div
              className="
                flex flex-wrap
                justify-center gap-6
              "
            >
              <div
                className="
                  max-w-sm w-full
                  p-6
                  text-left
                  text-sm
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <h3
                  className="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Free
                </h3>
                <div
                  className="
                    mb-2
                  "
                >
                  
                  <p
                    className="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                     Forever Free
                  </p>
                </div>
                <ul
                  className="
                    mb-4 space-y-1
                    text-blue-400 text-sm
                  "
                >
                  <li>Active Virtual Card</li>
                  <li>Random Card Generation</li>
                  <li>Freeze/Unfreeze anytime.</li>
                  <li>Basic Spending Limits</li>
                </ul>
                <button
                  className="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    hover:bg-blue-900
                  "
                >
                  Get Started
                </button>
              </div>
              <div
                className="
                  max-w-sm w-full
                  p-6
                  text-left
                  text-sm
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <div className="z-10 overflow-hidden h-24 w-20 mx-auto absolute right-[-3px] top-[-3px]">
                  <div className="w-28 px-0 py-1.5 text-center text-gray-100 bg-gradient-to-b from-blue-900 to-blue-600 rotate-45 transform before:content-[''] after:content-[''] relative left-[-4px] top-3.5 drop-shadow">
                    Popular
                  </div>
                </div>
                <h3
                  className="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Pro
                </h3>
                <div
                  className="
                    mb-2
                  "
                >
                  
                  <p
                    className="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    $9/month
                  </p>
                </div>
                <ul className="mb-4 space-y-2 text-blue-400 text-left text-sm">
          <li>Up to 10 Virtual Cards</li>
          <li>Custom Expiration and Limits</li>
          <li>Merchant Locking</li>
          <li>Priority Support</li>
        </ul>
                <button
                  className="
                    w-fit
                    py-2 px-4
                    text-gray-100 text-center font-medium
                    bg-blue-400
                    rounded-lg
                    hover:bg-blue-900
                  "
                >
                  Go Pro
                </button>
              </div>
              <div
                className="
                  max-w-sm w-full
                  p-4
                  text-left
                  text-sm
                  bg-gray-100
                  rounded-br-[50%]
                  shadow-sm
                  relative
                "
              >
                <div
                  className="
                    z-10 overflow-hidden
                    h-24 w-20
                    mx-auto
                    absolute right-[-3px] top-[-3px]
                  "
                >
                </div>
                <h3
                  className="
                    mb-1
                    text-lg text-blue-900 font-semibold
                  "
                >
                  Enterprise
                </h3>
                <div
                  className="
                    mb-2
                  "
                >
                  <p
                    className="
                      mt-1
                      text-2xl text-blue-900 font-bold
                    "
                  >
                    $99/year
                  </p>
                </div>
                <ul
                  className="
                    mb-4 space-y-1
                    text-blue-400 text-sm
                  "
                >
                  <li>Unlimited Virtual Cards.</li>
                  <li>Team Management</li>
                  <li>API Access</li>
                  <li>24/7 Support</li>
                </ul>
                <button
                  className="
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
              </div>
          </section>

          <section
            id="contact"
            className="
              max-w-5xl
              p-4 mt-2 mx-auto
              section
            "
          >
            <h2
              className="
                mb-4
                text-blue-900 text-3xl font-semibold
              "
            >
              Need Help Getting Your Card?
            </h2>
            <div
              className="
                flex flex-col
                gap-8
                md:flex-row
              "
            >
          
              <form
                onSubmit={handleFormSubmit}
                className="
                  w-full
                  p-4 mb-2
                  bg-gray-100
                  rounded-lg
                  bg-gradient-to-br from-gray-100 to-blue-100
                  md:w-1/2
                "
              >
                <div
                  className="
                    w-full
                    p-2
                  "
                >
                  <div
                    className="
                      relative mb-2
                    "
                  >
                    <label
                      htmlFor="email"
                      className="
                        block
                        py-4
                        text-xl text-blue-900 placeholder-gray-100
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
                      className="
                        w-full
                        py-1 px-1
                        text-base text-blue-900
                        bg-white
                        rounded-lg border
                      "
                    />
                  </div>
                  <div
                    className="
                      mb-4
                    "
                  >
                    <label
                      htmlFor="card"
                      className="
                        block
                        mb-2
                        text-blue-900 text-xl placeholder-gray-100
                        focus:placeholder-blue-300
                        font-medium
                      "
                    >
                      Interest
                    </label>
                    <select
                      id="card"
                      name="card"
                      value={formData.card}
                      onChange={handleInputChange}
                      required
                      className="
                        w-full
                        p-3
                        font-semibold text-blue-900
                        text-sm
                        bg-blue-200
                        rounded-lg
                      "
                    >
                      <option value="">Select Option</option>
                      <option value="personal">Personal Use</option>
                      <option value="business">Business Expenses</option>
                      <option value="virtual">API Integration</option>
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
                        text-lg
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
                    className="
                      px-4 py-2
                      text-sm
                      text-gray-100 font-medium
                      bg-blue-400
                      rounded-lg
                      hover:bg-blue-900
                      transition-colors duration-300
                    "
                  >
                    Send Message
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
                    pt-4 mb-2
                    px-4
                    flex flex-col
                    items-center
                    justify-center
                    bg-white
                    rounded-lg
                    relative shadow
                    bg-gradient-to-br from-gray-100 to-blue-100
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
                      SecureCard+ Support
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
                      Have questions? We're here to help:
                    </p>
                    <p
                      class="
                        text-blue-400 font-bold text-md
                      "
                    >
                        <FiPhoneCall />
                      +0 (000) 777 3930
                    </p>
                    <p
                      class="
                        mt-6
                        text-blue-900
                      "
                    >
                      For urgent card generation issues:
                    </p>
                    <p
                      class="
                        text-blue-400 font-bold text-xl
                      "
                    >
                        <FiPhoneCall />
                      +0 (000) 777 3930
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
                          text-md
                          text-gray-100 font-bold
                          bg-blue-400
                          rounded-md
                          hover:bg-blue-900
                          transition-colors duration-300
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
      <p className="text-blue-900 leading-relaxed">Learn more about SecureCard+ virtual card generation and protection.</p>
    </div>
    <div className="space-y-4 mt-8">
      <div className="p-4 bg-gray-200 rounded-lg">
        <p className="text-blue-900 font-medium">How does random card generation work?</p>
        <button onClick={() => toggleFaq(1)} className="flex w-full text-left justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
        
        {faqOpen[1] && (
          <p className="mt-2 text-blue-900">
            SecureCard+ generates a completely random, unique virtual card number linked to your funding source. 
            It's encrypted and never exposes your real card details during transactions.
          </p>
        )}
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
        <p className="text-blue-900 font-medium">Can I use virtual cards anywhere?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(2)} 
          className="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[2] && (
          <p className="mt-2 text-blue-900">
            Yes! Our virtual cards work wherever major credit cards are accepted across all online stores, subscriptions, and international sites.
          </p>
        )}
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
        <p className="text-blue-900 font-medium">Are my transactions monitored in real time?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(3)} 
          className="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[3] && (
          <p className="mt-2 text-blue-900">
            Yes. Every transaction on your SecureCard+ are analyzed in real time using fraud detection, receive instant alerts for suspicious activity and can freeze your card instantly.
          </p>
        )}
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
        <p className="text-blue-900 font-medium">Are my virtual cards secure?</p>
        <button 
          type="button" 
          onClick={() => toggleFaq(4)} 
          className="flex w-full text-left text-xl font-bold text-blue-900 justify-end items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {faqOpen[4] && (
          <p className="mt-2 text-blue-900">
             Absolutely. Every virtual card uses AES-256 encryption, tokenization, and real-time monitoring to prevent fraud.
          </p>
        )}
      </div>
    </div>
  </div>
  <div className="p-2 mt-4 text-center">
        <p className="text-xs text-blue-900 font-semibold">
        Random card numbers • Full privacy • Instant control • Global use
        </p>
      </div>
</section>
          <footer
            id="footer"
            aria-label="Footer"
            className="
              bg-blue-300
              footer
            "
          >
            <div
              className="
                max-w-screen
                px-2 py-2 mx-auto space-x-2
                text-blue-900
                relative
                sm:grid sm:grid-cols-6 sm:px-6
              "
            >
              <div
                className="
                  p-2
                "
              >
                <DiRedhat size={50} color="white" />
                <h3
                  className="
                    font-bold text-2xl text-blue-900 ml-2
                  "
                >
                  ClickSafe
                </h3>
                <p
                  className="
                    mb-2
                    text-gray-100 mt-2
                  "
                >
                  Creating innovative ClickSafe solutions for modern businesses.
                  Scalable, secure, and with user-friendly modern banking needs.
                </p>
              </div>
              <div
                className="
                  p-2
                "
              >
                <div
                  className="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Products
                </div>
                <a
                  href="virtual#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Virtual Cards
                </a>
                <a
                  href="prepaid#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Prepaid Cards
                </a>
                <a
                  href="business#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Business Cards
                </a>
                <a
                  href="loyalty#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Loyalty cards
                </a>
              </div>
              <div
                className="
                  p-2
                "
              >
                <div
                  className="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Company
                </div>
                <a
                  href="about#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  About Us
                </a>
                <a
                  href="careers#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Careers
                </a>
                <a
                  href="partners#"
                  className="
                    block
                    my-2
                    hover:text-gray-100
                  "
                >
                  Partners
                </a>
              </div>
              <div
                className="
                  p-2
                "
              >
                <div
                  className="
                    text-2xl font-semibold text-blue-900
                  "
                >
                  Contact
                </div>
                <a href="#contact" className="block my-2 hover:text-gray-100">
        <span className="inline-block align-middle">
          <FiPhoneCall />
        </span>{" "}
        +0 (000) 777 3930, Universe.VA
      </a>
                <a
                  href="email#"
                  className="
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
                className="
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
