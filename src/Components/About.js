import React, { useState } from "react";

function About(props) {

 const myStyle = {
        color : props.mode === "dark" ? "white" : "#042743",
        backgroundColor : props.mode === "dark" ? "rgb(36 74 104)" : "white"
 }



  

  
  return (
    <>
      <div className="container py-3" style={{color : props.mode === "dark" ? "white" : "#042743"}}> 
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}  // using style here
              >
                Analyze your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
                
              <div className="accordion-body" style={myStyle}> {/*using style here*/}
                      <strong>
                          Effortlessly analyze and improve your text. Whether you're checking grammar, readability, or style, our tool provides instant insights to help you refine your writing."
                      </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}    // using style here
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>   {/*using style here*/}
                    <strong>Enjoy full access to all features, completely free. No subscriptions, no hidden fees—just simple, effective text analysis.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}    // using style here
              >
                Browser compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}> {/*using style here*/}
                      <strong>Analyze your text with ease across all major browsers. Our tool ensures smooth performance and accurate insights, no matter which browser you use. </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
