import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box background="red">
          Yovanamatag
        </Box>
      </main>
    </div>
  );
}
