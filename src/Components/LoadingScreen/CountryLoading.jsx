import React from "react";
import { Skeleton, Stack } from "@mui/material";
import styles from "./countryLoading.module.css";

const CountryLoading = () => {
  return (
    <main className={styles.country}>
      <Skeleton animation="wave" variant="rounded" width="136px" height="40px" className={styles.back} />
      <section className={styles.flex}>
        <Skeleton animation="wave" variant="rounded" height="323px"/>

        <Stack spacing={2} className={styles.countryInfo}>
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
          <Skeleton animation="wave" variant="rounded" width="100%" height="20px" />
        </Stack>
      </section>
    </main>
  );
};

export default CountryLoading;
