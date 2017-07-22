// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Container, Message } from 'semantic-ui-react'

const Hello = props => (
  <Container>
    <Message>
      <Message.Header>
        Our First Semantic UI Component!
      </Message.Header>
      <p>Hello {props.name}!</p>
      <p>This is our first test of a SemanticUI component rendered via React.</p>
    </Message>
  </Container>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
