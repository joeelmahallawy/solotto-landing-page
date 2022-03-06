import { Box } from "@chakra-ui/layout";
import themes from "../../themes";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Box bg={themes.colors.purpleBackground}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
export default Layout;
