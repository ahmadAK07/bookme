import React from 'react'

const Select = (props) => {


    const handleChange = (event) => {
        props.setVal(event.target.value);
      };

  return (
    <form class={props.formStyle}>
                    
                    <select onChange={handleChange} value={props.val} id="cities" class={props.selectStyle}>
                        <option value="">Departure</option>
                       {
                        props.cityData && props.cityData.map((city, i) => {
                            return <option value={city} key={i}>{city}</option>
                        })
                       }
                     
                    </select>
                </form>
  )
}

export default Select
