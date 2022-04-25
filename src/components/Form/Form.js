import React from 'react'
import { FormSection, CVCWrapper } from './Form.styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Form = ({form, handleInputText, submitForm}) => (

    <FormSection>
        <h1>Checkout</h1>
        <form onSubmit={e => submitForm(e)}>

            <Input 
                $isValid={form?.ccnumber?.isValid}
                placeholder="Credit Card Number" 
                type="text" 
                name="ccnumber" 
                max="16"
                pattern="(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)" 
                value={form?.ccnumber?.value || ''}
                onChange={e => handleInputText(e)}
                required
                />

            <Input 
                $isValid={form?.name?.isValid}
                placeholder="Name" 
                type="text" 
                name="name" 
                max="50"
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" 
                value={form?.name?.value || ''}
                onChange={e => handleInputText(e)}
                required
                />

            <CVCWrapper>
                <Input
                    $small={true}
                    $isValid={form?.ccmonth?.isValid}
                    placeholder="Expiry" 
                    type="text" 
                    name="ccmonth"
                    max="2"
                    pattern="^\d{2,}$"
                    value={form?.ccmonth?.value || ''}
                    onChange={e => handleInputText(e)} 
                    required/>
                    
                <Input
                    $small={true}
                    $isValid={form?.ccyear?.isValid}
                    placeholder="CVC" 
                    type="text" 
                    name="ccyear" 
                    max="4"
                    pattern="^\d{4,}$"
                    value={form?.ccyear?.value || ''}
                    onChange={e => handleInputText(e)}
                    required
                    />
            </CVCWrapper>
            
            <Button $full={true}>
                Place Your Order
            </Button>
        </form>
    </FormSection>
)

export default Form