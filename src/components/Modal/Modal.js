import React from 'react';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './Modal.css'

const Modal = (props) => {

    const {
        childrenComponent,
        input,
        inputCurrentState,
        inputCurrentStateChange,
        // first props button
        buttonFirst,
        buttonFirstAction,
        buttonFirstActionType,
        buttonFirstDisabled,
        // second props button
        buttonSecond,
        buttonSecondAction,
        buttonSecondActionType,
        buttonSecondDisabled
    } = props;

    return (
        <div className='modal'>
            {childrenComponent ? childrenComponent : null}
            <Input
                placeholder={input[0]}
                classModule={input[1]}
                mod={input[2]}
                inputCurrentState={inputCurrentState}
                inputCurrentStateChange={inputCurrentStateChange}
            />
            <div className='modal__buttons-group'>
                <Button
                    text={buttonFirst[0]}
                    classModule={buttonFirst[1]}
                    mod={buttonFirst[2]}
                    action={buttonFirstAction}
                    actionType={buttonFirstActionType}
                    disabled={buttonFirstDisabled}
                />
                <Button
                    text={buttonSecond[0]}
                    classModule={buttonSecond[1]}
                    mod={buttonSecond[2]}
                    action={buttonSecondAction}
                    actionType={buttonSecondActionType}
                    disabled={buttonSecondDisabled}
                />
            </div>
        </div>
    )
}

export { Modal };