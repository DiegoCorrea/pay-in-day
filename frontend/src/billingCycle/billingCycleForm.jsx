import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput} readOnly={readOnly}
          label='Nome' cols='12 4' placeholder='Informe o nome' />
          <Field name='month' component={labelAndInput} readOnly={readOnly}
          type='number' label='Ano' cols='12 4' placeholder='Informe o ano' />
          <Field name='year' component={labelAndInput} readOnly={readOnly}
          label='Ano' cols='12 4' placeholder='Informe o ano' />
          <ItemList cols='12 6' list={credits} readOnly={readOnly}
            field='credits' legend='Créditos' />
          <ItemList cols='12 6' list={debts} readOnly={readOnly}
            field='debts' legend='Debitos' />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToPros = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToPros, mapDispatchToProps)(BillingCycleForm)
