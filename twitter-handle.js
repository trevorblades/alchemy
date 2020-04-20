import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function TwitterHandle() {
  return (
    <>
      <FaTwitter
        style={{
          verticalAlign: '-0.1em',
          marginRight: '0.5em'
        }}
        fill="#1da1f2"
      />
      @trevorblades
    </>
  );
}