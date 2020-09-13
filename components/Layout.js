import Header from "components/Header";
import Footer from "components/Footer";
import MenuContext from 'components/MenuContext';

export default function Layout({ children }) {
  const [open, toggleOpen] = React.useState(false)

  return (
    <MenuContext.Provider
      value={{
        open,
        toggleOpen,
      }}
    >
      <div className="max-w-screen-md px-4 py-12 mx-auto antialiased font-body">
        <Header />
        {!open && (<main>{children}</main>)}
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}
