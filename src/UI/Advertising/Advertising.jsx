import "./Advertising.css";
import React, { useState } from "react";
import Posibities from "../Posibities/Posibities.jsx";
import About from "../About/About";
// import classes from './Ad.module.css'

function Advertising({ elem, curPath, j }) {
  return (
    <div className="Advertising">
      <img
        className="Image"
        src={`
        ${process.env.PUBLIC_URL}/PhotoForAdv/${curPath}/${elem.path_img_desktop}`}
      />
      <div
        className={elem.ad ? "Ad" : "hidden"}
        style={{
          background: `${elem?.ad?.back_color_ad}`,
          color: `${elem?.ad?.color_title_ad}`,
        }}
      >
        {elem?.ad?.title_ad}
      </div>

      <article className="Description">
        <div className="Title">{elem.title}</div>
        <div className="ClockPlusTraveTime">
          <div className="Clock">
            <img
              className="Arrows"
              src={`${process.env.PUBLIC_URL}` + "/icon/arrows.png"}
            />
          </div>

          <span>{elem.Travel_time}</span>
        </div>
        <div className="Possibilities">
          {elem.Possibilities.map((pos, i) => (
            <Posibities
              i={i}
              key={pos}
              pos={pos}
              elem={elem}
              j={j}
            ></Posibities>
          ))}
        </div>
        <div className="low_row"
         
        >
          <div className="price">
            <div className="cur_price"
            style={
              elem.pier_price
              ?
              {marginTop: '0px'}
              :
              {marginTop: '16px'}
            }
            >{elem.price} ₽</div>
            <div   className={elem?.pier_price ? "pier_price" : "hidden"}>{elem?.pier_price} ₽ на причале</div>
          </div>
          <About></About>
        </div>
      </article>
    </div>
  );
}

export default Advertising;
