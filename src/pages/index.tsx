import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Catalog } from '../components/Catalog'
import { useSearch } from '../hooks/useSearch'
import { IHome } from '../interfaces/IHome'
import { IProduct } from '../interfaces/IProduct'
import { api } from '../services/api'

export default function Home({ 
  products,
  sellerSuggestion, 
  toys, 
  bedsAndHouses, 
  collars, 
  bonesAndSnacks, 
  health 
  }: IHome) {
  const { getProducts } = useSearch()

  useEffect(() => {
    getProducts(products)
  }, [getProducts, products])

  return (
    <div>
      <Head>
        <title>Lojinha Virtual</title>
      </Head>

      <div>
        <Catalog sectionTitle="Sugestão do Vendedor" products={sellerSuggestion}/>
        <Catalog sectionTitle="Brinquedos" products={toys}/>
        <Catalog sectionTitle="Camas e Casinhas" products={bedsAndHouses}/>
        <Catalog sectionTitle="Coleiras" products={collars}/>
        <Catalog sectionTitle="Ossos e Petiscos" products={bonesAndSnacks}/>
        <Catalog sectionTitle="Saúde" products={health}/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products')

  const products: Array<IProduct> = data.map((product: IProduct) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      thumbnail: product.thumbnail,
      price: String(product.price.toFixed(2)).replace('.', ','),
      onSale: product.onSale || false,
      oldPrice: String(product?.oldPrice?.toFixed(2)).replace('.', ',') || String(product.price.toFixed(2)).replace('.', ','),
      sellerSuggestion: product.sellerSuggestion
    }
  })

  const sellerSuggestion = products.filter((product: IProduct) => { return product.sellerSuggestion });
  const toys = products.filter((product: IProduct) => { return product.category == "brinquedos" });
  const bedsAndHouses = products.filter((product: IProduct) => { return product.category == "camas-e-casinhas" });
  const collars = products.filter((product: IProduct) => { return product.category == "coleiras" });
  const bonesAndSnacks = products.filter((product: IProduct) => { return product.category == "ossos-e-petiscos" });
  const health = products.filter((product: IProduct) => { return product.category == "saude" });

  return {
    props: {
      products,
      sellerSuggestion,
      toys,
      bedsAndHouses,
      collars,
      bonesAndSnacks,
      health
    },
    revalidate: 60 * 60 * 8 //24h
  }
}