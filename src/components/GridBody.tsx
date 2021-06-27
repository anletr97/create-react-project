import React, { Component } from "react";

export class GridBody extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td> abc</td>
          {new Array(31).fill("").map((i) => (
            <td>x</td>
          ))}
        </tr>
      </tbody>
    );
  }
}

export default GridBody;
