import React, { useState } from 'react'
import { Card, Input } from 'antd'
import 'antd/dist/antd.css'
import data from '../data/data'
import Item from 'antd/lib/list/Item'

const Search = () => {
  const { Meta } = Card
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  let modelSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12 mb-5'>
          <div className='mb-3 col-4 mx-auto'>
            <label className='form-label h4'>Search Models</label>
            <Input
              type='text'
              placeholder='Basic usage'
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>

        {modelSearch.map((Item, index) => {
          return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt='example' src={Item.img} />}
              >
                <Meta title={Item.title} description={Item.description} />
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Search
