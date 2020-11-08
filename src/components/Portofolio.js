import React, { Component } from "react";

export default class Portofolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portofolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portofolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              alt=""
            >
              {resumeData.portofolio &&
                resumeData.portofolio.map((item) => {
                  return (
                    <div className="columns portofolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" alt=''/>
                          <div className="overlay">
                            <div className="portofolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
