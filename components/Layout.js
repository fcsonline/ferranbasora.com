import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
