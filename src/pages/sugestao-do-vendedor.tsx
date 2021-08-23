import { GetStaticProps } from "next";
import Head from "next/head";
import { Catalog } from "../components/Catalog";
import { IProduct } from "../interfaces/IProduct";
import { api } from "../services/api";

interface SellerSuggestionProps{
  sellerSuggestion: Array<IProduct>;
}

export default function sellerSuggesiton({ sellerSuggestion }: SellerSuggestionProps){
  return (
    <>
      <Head>
        <title>Sugestão do Vendedor | Lojinha Virtual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <Catalog sectionTitle="Sugestão do Vendedor" products={sellerSuggestion} grid />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products', {
    params: {
      sellerSuggestion: true
    }
  });

  const sellerSuggestion: Array<IProduct> = data.map((product: IProduct)=> {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      thumbnail: product.thumbnail,
      price: String(product.price.toFixed(2)).replace('.', ','),
      onSale: product.onSale || false,
      oldPrice: String(product?.oldPrice?.toFixed(2)).replace('.', ',') || String(product.price.toFixed(2)).replace('.', ',')
    }
  });

  return {
    props: {
      sellerSuggestion
    },
    revalidate: 60 * 60 * 8
  }
}