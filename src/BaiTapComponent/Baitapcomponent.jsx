import React, { Component } from "react";
import Cardcomponent from "./Component/Cardcomponent";
import Carouselcomponent from "./Component/Carouselcomponent";
import Contactcomponent from "./Component/Contactcomponent";
import Footercomponent from "./Component/Footercomponent";
import Headercomponent from "./Component/Headercomponent";

class Baitapcomponent extends Component {
  render() {
    return (
      <div>
        <Headercomponent />
        <Carouselcomponent />
        <div className="container mt-3">
          <div className="row">
            <div class="col-sm-8">
              <h1>What We Do</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                laborum consequuntur iste odit doloribus fugiat, qui repellendus
                tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
                doloribus eaque consequatur praesentium blanditiis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                laborum consequuntur iste odit doloribus fugiat, qui repellendus
                tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
                doloribus eaque consequatur praesentium blanditiis?
              </p>
            </div>
            <Contactcomponent />
          </div>
          <div className="row">
            <Cardcomponent />
            <Cardcomponent />
            <Cardcomponent />
          </div>
        </div>
        <Footercomponent />
      </div>
    );
  }
}

export default Baitapcomponent;
