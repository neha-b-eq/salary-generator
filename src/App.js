import './App.css';
import React,{useState} from 'react'
function App(){
  const [workingday,setWorkingday]=useState(0)
  const [paidleave,setPaidleave]=useState(0)
  const [presentday,setPresentday]=useState(0)

    const [totalpay,setTotalpay]=useState(0)

    const [hourlyPay,setHourlyPay]=useState(0)
    const [weeklyPay,setWeeklyPay]=useState(0)
    const [biWeeklyPay,setBiWeeklyPay]=useState(0)
    const [monthlyPay,setMonthlyPay]=useState(0)
    const [yearlyPay,setYearlyPay]=useState(0)
    
  const changeHourly=(value)=>{
    setHourlyPay(value)
    setWeeklyPay(value*40)
    setBiWeeklyPay(value*80)
    setMonthlyPay(value*160)
    setYearlyPay(value*1920)
  }
  const changeWeekly=(value)=>{
    setHourlyPay(value/40)
    setWeeklyPay(value)
    setBiWeeklyPay(value*2)
    setMonthlyPay(value*4)
    setYearlyPay(value*48)
  }
  const changeBiWeekly=(value)=>{
    setHourlyPay(value/80)
    setWeeklyPay(value/2)
    setBiWeeklyPay(value)
    setMonthlyPay(value*2)
    setYearlyPay(value*24)
  }
  const changeMonthly=(value)=>{
    setHourlyPay(Math.round(100*value/160)/100)
    setWeeklyPay(Math.round(100*value/4)/100)
    setBiWeeklyPay(Math.round(100*value/2)/100)
    setMonthlyPay(value)
    setYearlyPay(Math.round(100*value*12)/100)
  }
  const changeYearly=(value)=>{
    setHourlyPay(Math.round(100*value/1920)/100)
    setWeeklyPay(Math.round(100*value/48)/100)
    setBiWeeklyPay(Math.round(100*value/24)/100)
    setMonthlyPay( Math.round(100*value/12)/100)
    setYearlyPay(Math.round(100*value)/100)
  }
  const countsalary=()=>{
    const total=parseInt(presentday)+parseInt(paidleave)
    if(total>=parseInt(workingday)){
     setTotalpay(parseInt(yearlyPay))
    }
    else{
      const perday=(parseInt(yearlyPay)/parseInt(workingday))
      setTotalpay(perday*total)
    }
  }
    return (
      <div >
        <div className="title">
          <h1>Salary Generator</h1>
        </div>
        <div>
          <div>
            <input placeholder="enter working days" onChange = {(event)=>setWorkingday(parseInt(event.target.value))}></input>
            <input placeholder="enter paid leaves" onChange = {(event)=>setPaidleave(event.target.value)}></input>
            <input placeholder="enter present days" onChange = {(event)=>setPresentday(parseInt(event.target.value))}></input>
          </div>
          <div className="title">
            <h4>Enter value in any one box</h4>
          </div>
          <div>
              <input placeholder="hourly Payment" onChange = {(event)=>changeHourly(event.target.value)}></input>
              <span> {hourlyPay}</span>
          </div>
          <div>
            <input placeholder="weekly Payment" onChange = {(event)=>changeWeekly(event.target.value)}></input>
            <span> {weeklyPay}</span>
          </div>
          <div>
            <input placeholder="Bi-Weekly Payment" onChange = {(event)=>changeBiWeekly(event.target.value)}></input>
            <span> {biWeeklyPay}</span>
          </div>
          <div>
            <input placeholder="Monthly Payment" onChange = {(event)=>changeMonthly(event.target.value)}></input>
            <span> {monthlyPay}</span>
          </div>
          <div>
            <input placeholder="Yearly Payment" onChange = {(event)=>changeYearly(event.target.value)}></input>
            <span> {yearlyPay}</span>
          </div>
          <button onClick={()=>{countsalary()}}>count monthly salary</button>
          <div className="title">
            <h2 >Salary</h2>
            <span><b>Yearly salary : </b>{(totalpay).toFixed(2)}</span><br></br>
            <span><b>Monthly salary : </b>{(totalpay/12).toFixed(2)}</span><br></br>
            <span><b>Bi-Weekly salary : </b>{(totalpay/24).toFixed(2)}</span><br></br>
            <span><b>Weekly salary :</b>{(totalpay/48).toFixed(2)}</span><br></br>
            <span><b>Hourly salary : </b>{(totalpay/1920).toFixed(2)}</span><br></br>
          </div> 
        </div>
      </div>
    )
  }


export default App;