import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import './../App.css'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='col-lg-8 col-md-8 col-sm-10 '>
        <p className='display-1 text-center'>
          Best food waiting for your belly
        </p>
      </div>

      <div className='col-lg-3 col-md-6 col-sm-6 '>
        <InputGroup className='my-2 rounded-pill '>
          <FormControl
            placeholder='search food names'
            aria-label='search food names'
            aria-describedby='basic-addon2'
          ></FormControl>
          <Button variant='danger' size='lg' className='ext-white'>
            Search
          </Button>
        </InputGroup>
      </div>
    </section>
  )
}

export default Banner
