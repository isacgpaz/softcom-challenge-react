import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'
import Link from 'next/link'
import navbar from '../../data/navbar.json'
import { TextField } from '../TextField'
import { Container, DeliveryInfo, Info, Navbar, Navigation, Presentation, Profile, Status, Thumbnail } from "./styles"
import { useRouter } from 'next/dist/client/router'
import MediaQuery from 'react-responsive'
import { Cart } from './styles'
import { useCart } from '../../hooks/useCart'

export function Header(){
  const router = useRouter()
  const { totalItems, totalCart } = useCart();

  return (
    <Container>
      <Profile>
        <Presentation>
          <Thumbnail>
            <Image 
              src="/logo.png" 
              alt="Logo da Pet Friends Acessories" 
              width={192}
              height={192}
            />
          </Thumbnail>

          <Info>
            <Status>
              <h2>Pet Friends Acessories</h2>

              <span>
                <FaIcons.FaRegClock />
                ABERTO AGORA
              </span>
            </Status>

            <p>
              Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB
            </p>

            <DeliveryInfo>
              <div>
                <p>
                  <FaIcons.FaMotorcycle />
                  Delivery:
                </p>
                <span>35m - 1h:40m</span>
              </div>

              <div>
                <p>
                  Entrega:
                </p>
                <span>A partir de R$ 3,00</span>
              </div>
            </DeliveryInfo>        
          </Info>
        </Presentation>

        <MediaQuery minWidth={1000}>
          <Cart>
            <div>
              <div>
                <FaIcons.FaShoppingCart />
                {totalItems} Produto{totalItems == 1 ? null : 's'} no Carrinho
              </div>
                
              <span>
                R$ {totalCart.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </Cart>
        </MediaQuery>
      </Profile>

      <Navigation>
        <MediaQuery maxWidth={756}>
          <TextField placeHolder='O que você procura?' doResearch>
            <FaIcons.FaSearch />
          </TextField>
        </MediaQuery>

        <Navbar>
          <ul>
            <li>
              <Link href='/'>
                <a className={router.pathname == '/' ? 'active' : undefined}>
                  Início
                </a>
              </Link>
            </li>

            {navbar.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a className={(`/${router.query.slug}` == item.path || router.pathname == item.path) ? 'active' : undefined}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}      
          </ul>
        </Navbar>
      </Navigation>
    </Container>
  )
}