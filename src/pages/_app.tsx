import { Layout } from "../components/Layout";
import { CardProvider } from "../contexts/CardContext";
import { CartProvider } from "../contexts/CartContext";
import { ProductModalProvider } from "../contexts/ProductModalContext";
import { QuantifierProvider } from "../contexts/QuantifierContext";
import { SearchProvider } from "../contexts/SearchContext";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <CardProvider>
          <QuantifierProvider>
            <SearchProvider>
              <ProductModalProvider>            
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ProductModalProvider>
            </SearchProvider>
          </QuantifierProvider>
        </CardProvider>
      </CartProvider>

      <GlobalStyles />
    </>
  )
}

export default MyApp
