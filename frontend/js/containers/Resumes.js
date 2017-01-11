import React, { Component } from 'react'

import {Delay} from '../components/common'
import Loading from '../components/Loading'
import list from '../components/Resumes'

const {Item} = list

export default class Resumes extends Component {
  constructor(props) {
    super(props)

    this.showDetail = this.showDetail.bind(this)
  }

  showDetail(id){
    const { actions, present } = this.props
    actions.edit({detail: id}, 'web')
  }

  render(){
    const { showDetail, props} = this
  	const { present } = props;
    const { web, resumes } = present
    const { isEditing, detail } = web
  	
  	return(
      <div className={`resume-conatiner ${(isEditing || detail)&&'blur'} ${web.bg && 'has-bg'}`}>
        <div className="resume-list">
          { resumes.filter(item => !item.hide).map((item, index) => {
            const Resume = list[item.val]

            return (
              <Delay key={item.id} wait={index * 150}>
                <Loading show={true}>
                  <Item click={()=>{ showDetail(item.id)}} ready={true}>
                    <Resume present={present} detail={item}/>
                  </Item>
                </Loading>
              </Delay>
            )
          }) }
        </div>
      </div>
  	)
  }
}