import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/infoCard'

function Search({searchResults}:any) {
    const router = useRouter()
    const {location, startDate, endDate, noOfGuests} = router.query
    // const formattedStartDate = format(new Date(startDate),"dd MMMM yyyy")    
    // const formattedEndtDate = format(new Date(endDate),"dd MMMM yyyy")    
    // const range = `${formattedStartDate} - ${formattedEndtDate}`
    const range = `${startDate} - ${endDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuests} number of Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-400 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: any) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz')
  .then(res => res.json())
  return {
    props: {
      searchResults,
    },
  }
}
