# React View

[![Build Status](https://github.com/giovannicalo/react-view/actions/workflows/build.yml/badge.svg)](https://github.com/giovannicalo/react-view/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/giovannicalo/react-view/badge.svg?branch=master)](https://coveralls.io/github/giovannicalo/react-view?branch=master)

## Installation

```bash
npm install giovannicalo/react-view
```

> Not yet published to NPM. This will install it from GitHub.

## Usage

```javascript
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
            <Input element="input" type="text" />
        </Body>
    </Container>;
};

export default Foo;
```

## API

### `View`

The `View` component is meant as the fundamental building block of every application that uses it.

By default, it renders a `div` element which behaves similarly to [React Native](https://github.com/facebook/react-native)'s homonymous component.

It can be styled with [Styled Components](https://github.com/styled-components/styled-components).

It supports a single special prop, `element`, of type `string`, which overrides the default `div` and makes it render the given HTML element instead, e.g. `<View element="input" />` will render an `input` element. All other props are passed down to the styled component and, through that, to the DOM.

### `global.debugViews`

If set to `true`, all subsequent `View`s will have random background colors.

This sometimes helps better visualize the CSS box model and can make building layouts easier.

If left unset, it has a negligible effect on performance (about 0.001-0.005 ms per component).
