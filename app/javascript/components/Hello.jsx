import React from 'react'
import PropTypes from 'prop-types'
import { Container, Message } from 'semantic-ui-react'

export default class Hello extends React.Component {
  constructor( props ) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Message>
          <Message.Header>
            Our First Semantic UI Component!
          </Message.Header>
          <p>Hello {this.props.name}!</p>
          <p>This is our first test of a SemanticUI component rendered via React.</p>
        </Message>
      </Container>
    )
  }
}


Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}
