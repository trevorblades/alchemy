import React, { useState } from 'react';

export default function MultiCodeBlock(props) {
  const [index, setIndex] = useState(0);
  const selectedChild = props.children[index];
  return (
    <div>
      <select
        onChange={event => setIndex(event.target.value)}
        style={{ fontSize: '1em' }}
      >
        {props.children.map((child, index) => (
          <option key={index} value={index}>
            {child.props.children.props.className.replace('language-', '')}
          </option>
        ))}
      </select>
      {selectedChild}
    </div>
  );
}
