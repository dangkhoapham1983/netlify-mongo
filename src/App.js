import React, { Component } from 'react'
import './App.css'

import ProductTable from './components/ProductTable'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Demo Gatsby, Contentful, MongoDB</h1>
        <h2>>Demo App </h2>
        <p>http://sarah-demo.surge.sh/</p>
        <p>http://khoa-demo-gatsby.surge.sh/</p>
        <p>https://khoademo.netlify.com/</p>
        <p>http://khoa-mongodb.surge.sh/</p>
        <p>https://github.com/dangkhoapham1983/contentfulandgatsby</p>
        <p>https://mongodbkhoa.netlify.com/</p>
        <p>https://khoademoapi.herokuapp.com/products/getall</p>

        <h1>Create Products Demo with Mongo DB</h1>

        <ProductTable />
      </div>
    )
  }
}
