import React from "react";
// import PropTypes from 'prop-types'

const NewsItem = (props)=> {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div style = {{display:'flex' , justifyContent : 'flex-end' , position:'absolute' , right:'0'}}>
          {/* <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" style={{left : '90%', zIndex : '1'}}> */}
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>

          <img
            src={
              !imgUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqskQJHJ1Po3cXnFhAWUbjvZ1r4HtwQ1Qk0A&usqp=CAU"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-outline-secondary"
            >
              Know More..
            </a>
            <p className="card-text">
              <small className="text-primary">
                By {author ? author : "Sources"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
