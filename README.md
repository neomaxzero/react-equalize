<p align="center">
  <img src="https://github.com/neomaxzero/react-equalize/blob/master/assets/react-equalize.png?raw=true" alt="logo react equalize"  width="250px"/>
</p>

[![CircleCI](https://circleci.com/gh/neomaxzero/react-equalize.svg?style=shield)](https://circleci.com/gh/neomaxzero/react-equalize)

Equalize the height of your elements in your page. 


- Check what I mean [-->here<--](https://raw.githubusercontent.com/neomaxzero/react-equalize/master/zictu.csb.app_.png)

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

[![Edit react-equalize-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xenodochial-stallman-zictu?fontsize=14&hidenavigation=1&theme=dark)

## API 

### <EqualizerContainer />

| Prop | Type | Description |
| --- | :---: | --- |
| `elements` | `Array` | List of elements that should re-trigger the calculation.
