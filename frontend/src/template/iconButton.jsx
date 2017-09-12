import React from 'react'
import If from '../template/if'

export default props => {
    if (props.hide) {
        return null
    } else {

        <If test={!props.hide}>
            <button className={'btn btn-' + props.style} onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        </If>

    }
}