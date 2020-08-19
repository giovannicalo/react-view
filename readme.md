# React View

[![Build Status](https://travis-ci.org/giovannicalo/react-view.svg?branch=master)](https://travis-ci.org/giovannicalo/react-view)
[![Coverage Status](https://coveralls.io/repos/github/giovannicalo/react-view/badge.svg?branch=master)](https://coveralls.io/github/giovannicalo/react-view?branch=master)

## Installation

```bash
npm install giovannicalo/react-view
```

> Not yet published

## Usage

```javascript
import React from "react";
import View from "react-view";
import styled from "styled-components";

const Body = styled(View)`
    flex-grow: 1;
`;

const Container = styled(View)`
    flex-grow: 1;
`;

const Header = styled(View)`
    flex-direction: row;
    height: 50px;
`;

const Input = styled(View)`
    border-style: none;
`;

const Foo = () => {
    return <Container>
        <Header>
            {"Foo"}
        </Header>
        <Body>
            <Input as="input" type="text" />
        </Body>
    </Container>;
};

export default Foo;
```

## API

### View

The `View` component is meant as the fundamental building block of every application that uses it.

By default, it renders a `div` element which behaves similarly to [React Native](https://github.com/facebook/react-native)'s homonymous component and has no special props of its own.

It can be styled with [Styled Components](https://github.com/styled-components/styled-components), which also allows it to render different elements using the `as` prop.

### global.debugViews

If set to `true`, all subsequent `View`s will have random background colors.

This sometimes helps better visualize the CSS box model and can make building layouts easier.

If left unset, it has a negligible effect on performance (about 0.001-0.005 ms per component).
