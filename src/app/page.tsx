import CheckoutResume from "@/components/CheckoutResume";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/Hero";
import { Container, CssBaseline } from "@mui/material";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CssBaseline />
      <HeroSection />
      <Container maxWidth="lg">
        <Projects/>
        <AboutMe/>
        {/* {[...Array(5)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            harum distinctio mollitia necessitatibus! Praesentium, deserunt ea
            iste voluptates dolorem natus, non modi ab molestias magnam quod
            iure nulla perferendis velit laborum. Voluptatem, pariatur harum!
            Provident ipsam nam doloribus iste possimus.
          </p>
        ))} */}
      </Container>
      <CheckoutResume />
      <ContactMe />
      <Footer />
    </main>
  );
}
