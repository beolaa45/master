import React from "react";
import { toLowerCase } from "../utiliti/utility";
import "./Filter.scss";
function Filter({ title, subTitle, onChange }) {
  let render = subTitle.map((value, index) => {
    return index === 0 ? (
      <div className="Filter__group" key={index}>
        <input
          onChange={onChange}
          id={toLowerCase(value)}
          name="categories"
          defaultChecked
          value={toLowerCase(value)}
          className="Filter__group__checkbox"
          type="radio"
        />
        <label htmlFor={toLowerCase(value)} className="Filter__group__label">
          {value}
        </label>
      </div>
    ) : (
      <div className="Filter__group" key={index}>
        <input
          onChange={onChange}
          id={toLowerCase(value)}
          name="categories"
          value={toLowerCase(value)}
          className="Filter__group__checkbox"
          type="radio"
        />
        <label htmlFor={toLowerCase(value)} className="Filter__group__label">
          {value}
        </label>
      </div>
    );
  });
  return (
    <div className="Filter">
      <p className="Filter__title">{title}</p>
      {render && render}
    </div>
  );
}

export default Filter;
