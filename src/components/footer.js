/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        <Link to="/">Contact Us</Link>{" "}|{" "}
        <Link to="/">Accessibility</Link>{" "}|{" "}
        <Link to="/">Privacy</Link>{" "}|{" "}
        <Link to="/">Site Map</Link>{" "}|{" "}
        <Link to="/">© Queen's Printer for Ontario</Link>{" "}|{" "}
        <Link to="/">Terms of Use</Link>{" "}|{" "}
      </p>
    </div>
  </footer>
)

export default Footer
