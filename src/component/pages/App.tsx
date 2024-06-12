import React from "react";
import { FC } from "react";

import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Category from "../Category/Category";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import BrandDifferent from "../BrandDifferent/BrandDifferent";
import JoinForm from "../JoinForm/JoinForm";

import InfoBanner from "../InfoBanner/InfoBanner";
import Footer from "../Footer/Footer";
import NewCategoryComponent from "../NewCategoryComponent/NewCategoryComponent";

import { lightTheme, darkTheme, greyTheme } from "../themes";
import { useAppSelector } from "../../hooks";

const App: FC = () => {
  const { switches } = useAppSelector((state) => state.user);

  const newCategoryComponents: string[] = ["electronics", "men's clothing"];

  const componentCategories = newCategoryComponents.map((category) => (
    <NewCategoryComponent category={category} key={category} />
  ));

  return (
    <Box
      sx={{
        backgroundColor:
          switches === "light"
            ? lightTheme.palette.background.default
            : switches === "dark"
              ? darkTheme.palette.background.default
              : greyTheme.palette.background.default,
      }}
    >
      <ThemeProvider theme={switches === "light" ? lightTheme : switches === "dark" ? darkTheme : greyTheme}>
        <Box sx={{ minHeight: "132px" }}>
          <Header />
          <Category />
        </Box>
        <HomeBanner />
        <BrandDifferent />
        {componentCategories}
        <JoinForm />
        <InfoBanner />
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default App;