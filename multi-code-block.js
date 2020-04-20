import React, { useState } from 'react';

export default function MultiCodeBlock(props) {
  const [index, setIndex] = useState(0);
  return (
    <>
      Select a language:
      <select
        value={index}
        onChange={event => {
          setIndex(event.target.value);
        }}
        style={{ fontSize: 'inherit' }}
      >
        {props.children.map((child, index) => (
          <option key={index} value={index}>
            {child.props.children.props.className.replace('language-', '')}
          </option>
        ))}
      </select>
      {props.children[index]}
    </>
  );
}
