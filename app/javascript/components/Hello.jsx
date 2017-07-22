import React from 'react'
import PropTypes from 'prop-types'
import { Container, Message, Input } from 'semantic-ui-react'

export default class Hello extends React.Component {
  constructor( props ) {
    super(props)
  }

  changeName(e) {
    this.props.update_settings( {name: e.target.value })
  }

  render() {
    return (
      <Container>
        <Message>
          <Message.Header>
            Our First Semantic UI Component!
          </Message.Header>
          <p>Hello {this.props.settings.name}!</p>
          <p>This is our first test of a SemanticUI component rendered via React.</p>
        </Message>

        <Input label='Change name:' placeholder='Name...' onChange={(e)=>this.changeName(e)} />

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
