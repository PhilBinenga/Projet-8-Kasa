import React from 'react'
import Banner from '../../components/banner/Banner.jsx'
import Cards from '../../components/cards/Cards.jsx'
import Container from '../../components/container/Container.jsx'
import bannerHome from '../../assets/images/banner-img.png'
function Home() {
  return (
    <div>
      <Banner
      titre="Chez vous, partout et ailleurs"
      src= {bannerHome}
      alt="banner home"
     />
      <Cards />
      <Container />
    </div>
  )
}

export default Home