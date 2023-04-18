import React from "react";
import styles from "./styles.js";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, ScrollTopButton } from "./components";

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">

      {/* Navbar Component */}
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/*  Hero Component */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Other Component(s) */}
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>

      {/* Footer Component */}
      <div className={`bg-footer ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

      {/* ScrollTopButton Component */}
      <ScrollTopButton />

    </div>
  )
}

export default App;