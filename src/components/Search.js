import React, { useState } from 'react'
import { Card, Input, Button, notification } from 'antd'
import 'antd/dist/antd.css'
import data from '../data/data'
import NotFound from '../assets/icons/noRecordFound.svg'
import Item from 'antd/lib/list/Item'
import './Hero.css'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
import Feature from './Feature'

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
)
const openNotification = () => {
  notification.open({
    message: 'Your Download is Ready',
    description: 'Click Allow to Download your model file',
    onClick: () => {
      console.log('Notification Clicked!')
    },
  })
}
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
            <Input
              id='lumoz-searchBox'
              size='large'
              type='text'
              placeholder='Search Models here'
              value={filter}
              suffix={suffix}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
        <Feature />

        {modelSearch.map((Item, index) => {
          return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4  '>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<img alt='example' src={Item.img} />}
              >
                <Meta title={Item.title} description={Item.description} />
                <Button
                  id='lumoz-download-btn'
                  type='primary'
                  href={Item.Model}
                  shape='round'
                  onClick={openNotification}
                  icon={<DownloadOutlined />}
                >
                  Download Model
                </Button>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Search
