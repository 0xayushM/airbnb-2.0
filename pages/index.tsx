import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import SmallCard from '../components/smallCard'
import Banner from '../components/banner'
import MediumCard from '../components/mediumCard'
import LargeCard from '../components/largeCard'
import Footer from '../components/footer'

export default function Home ({exploreData,cardsData}:any) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploreData?.map(({ location, img, distance }: any) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide -ml-3 p-3'>
            {cardsData?.map(({ img, title }: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img = 'https://links.papareact.com/4cj'
          title = 'The Greatest Outdoors'
          description= 'Wishlists curated by Airbnb.'
          buttonText= 'Get Inspired'
        />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  )
  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}

