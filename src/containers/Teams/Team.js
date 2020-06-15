import React from 'react'

export const Team = ({ name, region, imgURL, colors, abbrev, index, active }) => {
  const st = { backgroundImage: `url(${imgURL})` }


  return (
    <div className={`Teams_item ${active ? 'Teams_item-active': ''}`} data-index={index}>
      <div className="Teams_item-img" style={st}>

      </div>
      <div className="Teams_item-name"><span>{region}</span> {name}</div>
      <Flag arr={colors} abbrev={abbrev} />
    </div>
  )
}


const Flag = ({ arr, abbrev }) => {

  return (
    <div className='item-flag'
      style={{
        height: '99px',
        width: '99px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <span style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontSize: '25px',
        fontWeight: 700,
        textShadow: '1px 1px 3px #000'
      }}
      >
        {abbrev}
      </span>
      {arr.map((color, i) => {
        return (
          <span
            style={{
              height: 100 / 3 + '%',
              display: 'block',
              background: color
            }}
            key={i}>
          </span>)
      })
      }
    </div>
  )
}