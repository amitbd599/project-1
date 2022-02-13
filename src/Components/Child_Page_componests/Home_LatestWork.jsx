import axios from 'axios';
import React, { Component } from 'react'
import _Home_LatestWork from './_Home_LatestWork'

export default class Home_LatestWork extends Component {


    constructor(props){
        super();
        this.state= {
            data: []
        }
    }

    componentDidMount(){
        const url = 'DataBase/LatestWork.json'
        axios.get(url)
        .then(res=>{
            const data = res.data;
            this.setState({data})
        })
    }
    componentDidUpdate(){
        console.log(this.state.data);
    }


  render() {
    return (
        <section id="latest_work">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Latest Work</h2>
                    <p>We have show here all of our latest work, for more information click on the see all button</p>
                </div>
            </div>
            <div class="row part-2">
                
                {
                    this.state.data.map((data)=>(
                        <_Home_LatestWork key={data._id}></_Home_LatestWork>
                    ))
                }


                {/* <div class="col-md-3">
                    <img class="img-fluid" src="./img/work-1.png" alt=""/>
                </div> */}
                
            </div>
           
            <div class="row">
                <div class="col">
                    <a href="#" class="btn">See All Projects</a>
                </div>
            </div>

        </div>
    </section>
    )
  }
}
