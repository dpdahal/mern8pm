import React from 'react'
import Header from '../../layouts/Header'
import { useGetNewsQuery } from '../../store/reducers/newsSlice'

function HomeComponent() {
  const { data: news, isLoading, isError } = useGetNewsQuery();
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col-lg-12'>
          <h1 className='text-center'>Latest News</h1>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error loading news</p>}
          <div className='row'>
          {news && news.map((item) => (
            <div key={item._id} className='col-md-4 card mb-3'>
              <img src={`${item.image}`} className='card-img-top' alt={item.title} />
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>{item.description}</p>
                <a href={`/news/${item._id}`} className='btn btn-primary'>Read More</a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent