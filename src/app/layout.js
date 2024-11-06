import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google"
export const metadata = {
  title: "Amulya Ayurved",
  description: "A way to healthy lifestyle",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={poppins.className} style={{ width: "100%", backgroundColor: "#7075FF", textAlign: "center", fontSize: "1.1rem", color: "white" }}>
          <span>Online Consultation at lowest price!!!</span>
        </header>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img style={{ margin: "auto", maxWidth: "400px", width: "90%" }} src="/AmulyaLogo.png" alt="" />
        </div>
        <nav className={poppins.className}>
          <ul className="nav-listing">
            <li>
            <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>Offers</Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>Therapies</Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>Consultation</Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>Products</Link>
            </li>
            <li>
            <Link style={{ textDecoration: "none", color: "white" }} href={"/"}>About Us</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
