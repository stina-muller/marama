import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getType} from '../actions/type'

class Interest extends React.Component {
  componentDidMount () {
    this.props.dispatch(getType(this.props.match.params.interest))
  }

  render () {
    return (
      <div>
      <img src='/images/bg-stars.png' className='stars-background'/>
      <div className='page-section'>
        <div className='interest-section'>
          <div className='page-title-font'>{this.props.match.params.interest}</div>
          <div className='p-class'>If you love this, why not help create it?! Here's what you can do to become the builder of your favourite hobby.</div>
          {this.props.interestType.map(type => (
            <div key={type.type_id}>
              <Link to={`/interests/${this.props.match.params.interest}/${type.name}`}>
                <div className='h2-class'>{type.name}</div>
              </Link>
              <div>
                <div className='p-class'>{type.description}</div>
              </div>
            </div>
          )
          )}
        </div>
      </div>

          </div>
        )
        )}
        <div>
          <Link to='/'>
            <button>Previous Page</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interestType: state.interestType
  }
}

export default connect(mapStateToProps)(Interest)
