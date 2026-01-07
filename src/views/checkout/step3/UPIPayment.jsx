
import { useFormikContext } from 'formik';
import React from 'react';

const UPIPayment = () => {
  const { values, setValues } = useFormikContext();

  return (
    <div className={`checkout-fieldset-collapse ${values.type === 'upi' ? 'is-selected-payment' : ''}`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === 'upi'}
            id="modeUPI"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: 'upi' });
              }
            }}
            type="radio"
          />
          <label
            className="d-flex w-100"
            htmlFor="modeUPI"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">UPI</h4>
              <span className="text-subtle d-block margin-top-s">
                Pay easily, fast and secure with UPI.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;
