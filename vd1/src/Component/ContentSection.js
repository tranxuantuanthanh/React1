import React, { Component } from 'react';

class ContentSection extends Component {
    render() {
        return (
            <section id="scroll">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className={"col-lg-6 "+this.props.lg2}>
                  <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.img} alt="..." /></div>
                </div>
                <div className={"col-lg-6 "+ this.props.lg1}>
                  <div className="p-5">
                    <h2 className="display-4">{this.props.title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}

export default ContentSection;