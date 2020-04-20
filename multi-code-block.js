import React, { useState, useContext, createContext } from 'react';

const MultiCodeBlockContext = createContext();

export function MultiCodeBlockProvider(props) {
  const state = useState(0); 
  return (
    <MultiCodeBlockContext.Provider value={state}>
      {props.children}
    </MultiCodeBlockContext.Provider>
  );
}

export default function MultiCodeBlock(props) {
  const [index, setIndex] = useContext(MultiCodeBlockContext);
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
