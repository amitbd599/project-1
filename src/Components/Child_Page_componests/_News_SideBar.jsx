import React, { Component } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {MdOutlineBluetoothSearching} from 'react-icons/fa'

export default class _News_SideBar extends Component {
  render() {
    return (
        <div class="col-lg-4 pl-30">
        <div class="item-1">
          <div class="search">
            <InputGroup className="mb-1">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button  class=" btn-primary" id="button-addon2">
              <i class="fas fa-search"></i>
              </Button>
            </InputGroup>
           
          </div>
          <hgroup>
            <h2>Categories</h2>
          </hgroup>
          <div class="categories">
            <div>
              <a href="#"> Budget</a>
              <span class="left">(100)</span>
              <hr class="mt-5" />
            </div>
            <div>
              <a href="#">Account</a>
              <span class="left">(19)</span>
              <hr class="mt-5" />
            </div>
            <div>
              <a href="#">Invesment</a>
              <span class="left">(99)</span>
              <hr class="mt-5" />
            </div>
            <div>
              <a href="#">Stock</a>
              <span class="left">(19)</span>
              <hr class="mt-5" />
            </div>
            <div>
              <a href="#">Financial</a>
              <span class="left">(19)</span>
              <hr class="mt-5" />
            </div>
          </div>
        </div>
        <div class="item-2">
          <h2>Recent News</h2>
          <div class="media d-flex">
            <img
              class=" w-25 me-3 rounded-circle"
              data-src="holder.js/64x64?theme=sky"
              alt="64x64"
              src="https://i.imgur.com/nYheL2z.png"
            />
            <div class="media-body">
                <Link className="" to={''}>Easy way to high global sotck marketin...</Link>
              <p>13 Feb, 2016 </p>
            </div>
          </div>
          <div class="media d-flex">
            <img
              class="w-25 me-3 rounded-circle"
              data-src="holder.js/64x64?theme=sky"
              alt="64x64"
              src="https://i.imgur.com/yf4YFuP.png"
            />
            <div class="media-body">
              <a href="#">Easy way to high global sotck marketin...</a>
              <p>13 Feb, 2016 </p>
            </div>
          </div>
          <div class="media d-flex">
            <img
              class="w-25 me-3 rounded-circle"
              data-src="holder.js/64x64?theme=sky"
              alt="64x64"
              src="https://i.imgur.com/M4mZmeT.png"
            />
            <div class="media-body">
              <a href="#">Easy way to high global sotck marketin...</a>
              <p>13 Feb, 2016 </p>
            </div>
          </div>
          <div class="media d-flex">
            <img
              class="w-25 me-3 rounded-circle"
              data-src="holder.js/64x64?theme=sky"
              alt="64x64"
              src="https://i.imgur.com/fOhxfv1.png"
            />
            <div class="media-body">
              <a href="#">Easy way to high global sotck marketin...</a>
              <p>13 Feb, 2016 </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
