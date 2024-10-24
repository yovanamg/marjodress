// import styles from "./page.module.css";
import { Divider, HStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Options from "../components/Options";
import Footer from "../components/Footer";
import CardImg from "../components/CardImg";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM vestidos`;
  return (
    <div>
        <Header />
        <Divider />
        <Options />
        <HStack>
          <CardImg vestidos={rows} />
        </HStack>
        <Footer />
    </div>
  );
}
