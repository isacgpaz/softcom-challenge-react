import { Layout } from "../components/Layout";
import { CardProvider } from "../contexts/CardContext";
import { CartProvider } from "../contexts/CartContext";
import { ProductModalProvider } from "../contexts/ProductModalContext";
import { QuantifierProvider } from "../contexts/QuantifierContext";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <CardProvider>
          <QuantifierProvider>
            <ProductModalProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ProductModalProvider>
          </QuantifierProvider>
        </CardProvider>
      </CartProvider>
      <GlobalStyles />
    </>
  )
}

export default MyApp
