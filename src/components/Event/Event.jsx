import PropTypes from "prop-types"
import React from "react"
import * as Styled from './Event.styles'
import ReactHtmlParser from 'react-html-parser'

const Event = ({ current, data, type }) => {
  const listItems = data.descList.map((item, i) => {
    if (type === "work") {
      return <li key={`li-${i}`}>{item}</li>
    } else {
      return <p key={`p-${i}`}>{item}</p>
    }
  })

  const awards = data.awards.map((item, i) => {
    return (
      <h5 key={i} className="award">
        <i className="fal fa-trophy-alt"></i> {item.name}
        <span>{item.detail}</span>
      </h5>
    )
  })

  if (type === 'work') {
    return (
      <Styled.Event className={`event ${current ? `current` : ''}`}>
        <span className="date">{data.year}</span>
        <header>
          <h4>{ReactHtmlParser(data.position)}</h4>
          <h5>{ReactHtmlParser(data.company)}</h5>
          <span className="range">{data.startDate} &ndash; {data.endDate}</span>
        </header>
        <ul className="list">
          {listItems}
        </ul>
        {awards ? awards : false}
      </Styled.Event>
    )
  } else {
    return (
      <Styled.Event className="event">
        <header>
          <h4>{ReactHtmlParser(data.position)}</h4>
          <h5>{ReactHtmlParser(data.company)}</h5>
          <small>{data.timespan}</small>
          {data.desc ? <p>{data.desc}</p> : null}
        </header>
        {awards ? awards : false }
      </Styled.Event>
    )

  }

}

Event.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired
}


export default Event
