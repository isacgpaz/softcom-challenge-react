import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { Catalog } from "../components/Catalog";
import { IProduct } from "../interfaces/IProduct";
import { api } from "../services/api";

interface CategoryProps{
  products: Array<IProduct>;
  sectionTitle: string;
}

export default function Category({ products, sectionTitle }: CategoryProps){
  return (
    <>
      <Head>
        <title>Brinquedos | Lojinha Virtual</title>
      </Head>
      
      <Catalog sectionTitle={sectionTitle} products={products} grid />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('products')

  const paths = data.map(product => {
    return {
      params: {
        slug: product.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {slug} = ctx.params

  const { data } = await api.get('products', {
    params: {
      category: slug
    }
  })

  let sectionTitle: string;

  switch(slug){
    case 'sugestao-do-vendedor':
    sectionTitle = 'Sugestão do Vendedor'
    break
    
    case 'brinquedos':
    sectionTitle = 'Brinquedos'
    break

    case 'camas-e-casinhas':
    sectionTitle = 'Camas e Casinhas'
    break
    
    case 'coleiras':
    sectionTitle = 'Coleiras'
    break
    
    case 'ossos-e-petiscos':
    sectionTitle = 'Ossos e Petiscos'
    break
    
    case 'saude':
    sectionTitle = 'Saúde'
    break

    default:
    sectionTitle = ''
    break
  }

  if(sectionTitle == ''){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const products: Array<IProduct> = data.map((product: IProduct)=> {
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
      products,
      sectionTitle
    },
    revalidate: 60 * 60 * 8
  }
}
