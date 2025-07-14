import React, {useState} from 'react'

const Bmiapp = () => {
    const[ht,setht]=useState('');
    const[wt,setwt]=useState('');
    const[bmi,setbmi]=useState(null);
    const[category,setcategory]=useState('');

const calculateBmi = () =>{
    if(!ht || !wt) return;

    const htinMeters = ht/100;
    const calculatedBmi =wt/(htinMeters*htinMeters);
    setbmi(calculatedBmi);

    if(calculatedBmi < 18.5){
        setcategory("Underweigth");

    }else if(calculatedBmi >=  18.5 && calculatedBmi < 24.9){
        setcategory("Normal Weight");
    }
    else if(calculatedBmi >= 25 && calculatedBmi < 29.9){
        setcategory("Overweigth");

    }else{
        setcategory("Obese");
    }

}


  return (
    <div>
        <input type ="number" placeholder="Height in cm" value={ht}
        onChange={(e)=>setht(e.target.value)}
        />
      <input type="number"
      placeholder= "Weigth in kg"
      value={wt}
      onChange={(e)=>setwt(e.target.value)}
      />
      <button onClick = {calculateBmi}> Calculate your bmi </button>
      


      {bmi && (
        <div>
          <h1>BMI is: {bmi}</h1>
          <p>Category is: {category}</p>
        </div>
      )}
    </div>
  );
}

export default Bmiapp;