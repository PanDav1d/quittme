import Image from "next/image";
import styles from "./page.module.css";
import '@mantine/core/styles.css';
import { HeaderSimple } from "@/components/header/HeaderSimple";
import { FooterSimple } from "@/components/footer/FooterSimple";
import { Hero } from "@/components/hero/Hero";
import { Features } from "@/components/features/Features";
import { Form } from "@/components/contact/form/Form";

export default function Home() {
  return (
    <div>
    <HeaderSimple />
    <Hero />
    <Features />
    <Form />
    <FooterSimple />
    </div>
  );
}
