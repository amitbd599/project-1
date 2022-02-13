import axios from 'axios'
import React, { Component } from 'react'
import _Home_LatestNewsData from './_Home_LatestNewsData'

export default class Home_LatestNews extends Component {

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const url = 'DataBase/NewsData.json'
        axios.get(url)
        .then(res=>{
            const data = res.data;
            this.setState({data})
        })
    }


  render() {
    return (
        <section id="latest_news">
        <div class="container pb-110">
            <div class="row">
                <div class="col">
                    <h2>Latest News</h2>
                </div>
            </div>
            <div class="row">


                {
                    this.state.data.map((data)=>(
                        <_Home_LatestNewsData key={data._id} data={data}></_Home_LatestNewsData>
                    ))
                }

               
            </div>
        </div>
    </section>
    )
  }
}
