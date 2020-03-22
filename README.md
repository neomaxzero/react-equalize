# React equalize
[![CircleCI](https://circleci.com/gh/neomaxzero/react-equalize.svg?style=shield)](https://circleci.com/gh/neomaxzero/react-equalize)

Equalize the height of your elements in your page. 

## Installation

```bash
    npm install react-equalize
```

## Usage

1. Wrap the list of elements you want to equalize the height

```javascript

import React from "react";
import { EqualizerContainer } from "react-equalize";
import samples from './samples';
import Card from './Card';

const List = () => (
  <div>
    <h2>List</h2>
    <EqualizerContainer>
      {samples.map(sample => (
	      <Card title={sample.title} img={sample.img} />
      ))}
    </EqualizerContainer>
	</div>
);

export default List;

```

2. Equalize the elements of your choice
```javascript
// Card.js
import React from "react";
import { Equalize } from "react-equalize";

const Card = ({ title, img, description }) => (
  <div>
    <p>
      <Equalize>{title}</Equalize>
    </p>
    <Equalize>
      <img src={img} width="100%" alt="boo" />
    </Equalize>
    <p>
      <Equalize>{description}</Equalize>
    </p>
  </div>
);

export default Card;

```

