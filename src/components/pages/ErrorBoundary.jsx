import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error) {
        return{
            hasError:true
        }
    }
  render() {
    if(this.state.hasError) {
        return(
            <div className='error-div'>
              <h1 className='error-h'>'Error! something went wrong with your codes'</h1>
              <p className='error-p'>Kindly check your codes for possible debugging</p>
          </div>
        )
    } 
        return this.props.children
  }
}

export default ErrorBoundary