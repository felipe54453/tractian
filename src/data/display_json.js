import React, { Component } from "react";
import data from "./data.json";

class display_json extends Component {
  render() {
    return (
      <div>
        {data.units.map((unit, i) => {
          return (
            <div key={i}>
              <div>
                <a href={unit.url}>
                  <img src={unit.logo} alt={unit.companyName} />
                </a>
                <div>
                  <div>
                    <a href={unit.url}>{unit.companyName}</a>
                  </div>
                  {unit.roles.map(function (role, i) {
                    return (
                      <div key={i}>
                        <h5>{role.title}</h5>
                        <span>{role.startDate}</span>
                        <span>{role.location}</span>
                        <p>{role.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Example2;
