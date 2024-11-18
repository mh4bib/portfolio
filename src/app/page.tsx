import CheckoutResume from "@/components/CheckoutResume";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/Hero";
import { Container, CssBaseline } from "@mui/material";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs";
import FeedbackDialog from "@/components/FeedbackDialog";
import PublicFeedback from "@/components/PublicFeedback";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CssBaseline />
      <HeroSection />
      <Container maxWidth="lg">
        <Projects />
        <AboutMe />
      </Container>

      <CheckoutResume />

      <Container maxWidth="md">
        <Blogs />
      </Container>

      <ContactMe />
      <PublicFeedback />
      <Footer />
    </main>
  );
}
