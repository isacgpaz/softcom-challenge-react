import Image from 'next/image'
import Link from 'next/link';
import { Container, Social } from "./styles";
import { Logo } from './styles';


export function Footer(){
  return (
    <Container>
      <Logo>
        Desenvolvido por:
        <Image
          src="/logo-softcom.png"
          alt="Logo da Softcom"
          width={150}
          height={50}
        /> 
      </Logo>

      <Link href="/">
        <a>Política de Privacidade</a>
      </Link>

      <Link href="/">
        <a>Termos de Uso</a>
      </Link>

      <Social>
        Nossas redes sociais

        <div>
          <Link href="/">
            <a>
              <Image
                src="/facebook.png"
                alt="Logo da Softcom"
                width={50}
                height={50}
              /> 
            </a>
          </Link>

          <Link href="/">
            <a>
              <Image
                src="/instagram.png"
                alt="Logo da Softcom"
                width={50}
                height={50}
              /> 
            </a>
          </Link>

          <Link href="/">
            <a>
              <Image
                src="/twitter.png"
                alt="Logo da Softcom"
                width={50}
                height={50}
              /> 
            </a>
          </Link>

          <Link href="/">
            <a>
              <Image
                src="/youtube.png"
                alt="Logo da Softcom"
                width={50}
                height={50}
              /> 
            </a>
          </Link>
        </div>
      </Social>
    </Container>
  )
}