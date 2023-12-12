import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Form() {

  const [amount, setAmount] = useState('')
  const [interest, setInterest] = useState('')
  const [tenure, setTenure] = useState('')

  // console.log(amount)
  // console.log(interest)
  // console.log();

  const submit = () => {

    if (!amount && !interest && !tenure) {
      //alert("Please enter the values in all the fields")

      // document.getElementById('principlePara').innerHTML = 'Please Enter the Amount'
      // document.getElementById('interestPara').innerHTML = 'Please enter the interest rate'
      // document.getElementById('tenurePara').innerHTML = 'Please enter the tenure value in Years'
      const errorClass = document.getElementById('formbox')
      errorClass.classList.add('error')

      let notfilledAlert = document.getElementById('universalAlert')
      notfilledAlert.innerHTML = '&#x26A0;Please fill all the necessary input fields'


      setTimeout(() => {

        errorClass.classList.remove('error')

      }, 1000);

    }
    else if (!amount && !interest || !amount && !tenure || !interest && !tenure) {
      // alert("Please enter the values in all the fields")

      const errorClass = document.getElementById('formbox')
      errorClass.classList.add('error')

      document.getElementById('universalAlert').innerHTML = '&#x26A0;Please fill all the necessary input fields'

      setTimeout(() => {

        errorClass.classList.remove('error')

      }, 1000);

    }
    else if (!amount) {
      //   alert("Please enter the values in all the fields")

      document.getElementById('interestPara').innerHTML = ''
      document.getElementById('tenurePara').innerHTML = ''
      document.getElementById('universalAlert').innerHTML = ''


      document.getElementById('principlePara').innerHTML = 'Please Enter the Amount'
      const errorClass = document.getElementById('principle')
      errorClass.classList.add('error')

      setTimeout(() => {

        errorClass.classList.remove('error')

      }, 1000);




    }


    else if (!interest) {

      document.getElementById('principlePara').innerHTML = ''
      document.getElementById('tenurePara').innerHTML = ''
      document.getElementById('universalAlert').innerHTML = ''

      var interestPara = document.getElementById('interestPara')
      interestPara.innerHTML = 'Please enter the interest rate'

      //alert("Please enter the values in all the fields")
      const errorClass = document.getElementById('interest')
      errorClass.classList.add('error')

      setTimeout(() => {

        errorClass.classList.remove('error')

      }, 1000);

    }
    else if (!tenure) {

      // alert("Please enter the values in all the fields")

      document.getElementById('principlePara').innerHTML = ''
      document.getElementById('interestPara').innerHTML = ''
      document.getElementById('universalAlert').innerHTML = ''

      var tenurePara = document.getElementById('tenurePara')
      tenurePara.innerHTML = 'Please enter the tenure value in Years'

      const errorClass = document.getElementById('tenure')
      errorClass.classList.add('error')

      setTimeout(() => {

        errorClass.classList.remove('error')

      }, 1000);

    }
    else if (amount == 0 || interest == 0 || tenure == 0) {

      document.getElementById('principlePara').innerHTML = ''

      document.getElementById('universalAlert').innerHTML = 'Please do not enter "0" value'

      // alert("Please do not enter 0")


    }
    else if (amount < 0 || interest < 0 || tenure < 0) {

      // alert("Please give positive values in the field")
      document.getElementById('universalAlert').innerHTML = 'Please do not enter negative value'
    }

    else {
      document.getElementById('principlePara').innerHTML = ''
      document.getElementById('interestPara').innerHTML = ''
      document.getElementById('tenurePara').innerHTML = ''
      document.getElementById('universalAlert').innerHTML = ''

      const Demo = document.getElementById('demo')

      const Interest = interest / 100

      const value = amount * Interest * tenure
      Demo.innerHTML = '&#8377; ' + (value.toFixed(2))
    }




  }

  const reset = () =>{
   
    setAmount('')
    setInterest('')
    setTenure('')
    document.getElementById('universalAlert').innerHTML = ''
    document.getElementById('demo').innerHTML = '&#8377;0'
    
    document.getElementById('principlePara').innerHTML = ''
    document.getElementById('interestPara').innerHTML = ''
    document.getElementById('tenurePara').innerHTML = ''
  }


  return (
    <div>
      <form>

        <div className='mt-3 text-center' id='formbox' >
          <div className='mt-3' id="principle" >
            <TextField value={amount} className='w-75'  id='text' type='number' label="Principle amount" variant="outlined" onChange={(e) => setAmount(e.target.value)} />
            <p id='principlePara' style={{ color: "red", fontSize: "12px" }} ></p>
          </div>
          <div className='mt-3' id="interest" >
            <TextField value={interest} className='w-75' id="outlined-basic" type='number' label="Interest" variant="outlined" onChange={(e) => setInterest(e.target.value)} /><br />
            <p id='interestPara' style={{ color: "red", fontSize: "12px" }} ></p>
          </div>
          <div className='mt-3' id="tenure" >
            <TextField value={tenure} className='w-75' id="outlined-basic" type='number' label="Tenure in Year" variant="outlined" onChange={(e) => setTenure(e.target.value)} /><br />
            <p id='tenurePara' style={{ color: "red", fontSize: "12px" }} ></p>
          </div>

          <div className='mt-3' >
            <button type='button' className='btn btn-success' style={{ color: "white", padding: "10px", borderRadius: '12px' }} onClick={submit} >Submit</button>
            <button type='button' className='btn btn-primary ms-3' style={{ color: "white", padding: "10px", borderRadius: '12px' }} onClick={reset}  >Reset</button>

            <p className='mt-3' style={{ color: "red", fontSize: "15px" }} id='universalAlert' ></p>
          </div>



        </div>





      </form>
    </div>
  )
}

export default Form