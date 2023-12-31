import React from "react"

const SingleFaq = ({ item }) => {
  const { title, desc, id, show, parent,desc_2 } = item || {}
  return (
   
    <div section id="faq" className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
          {desc && <p>{desc_2}</p>}
        </div>
      </div>
    </div>
     
  )
}

export default SingleFaq
