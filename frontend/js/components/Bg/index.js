import React, { Component } from 'react'

import { getBg } from '../../common/imgs'

export default class Resumes extends Component {
  constructor(props) {
    super(props)
  }

  render(){
  	const { present } = this.props;
    const bg = getBg(present.web.bg);
  	
  	return(
      <div className='body-bg' style={{backgroundImage: `url(${bg})`}}>
      </div>
  	)
  }
}