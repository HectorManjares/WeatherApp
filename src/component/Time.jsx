import React, {useState} from 'react';


const Time = () => {
    const [hora, setHora] = useState({})
    const d = new Date()
    const dformat = [d.getDay(), d.getMonth() + 1, d.getDate(), d.getFullYear()]
        .join('/').toString()
        
        setTimeout(() => {
            const d = new Date(Date.now())

            setHora({
                hours: (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()),
                minutes: d?.getMinutes(),
                seconds: d?.getSeconds(),
                meridian: d?.getHours()>12?'PM':'AM'
            })         
          }, 1000);

        const WelcomeUsr= () =>{ 
                return (d.getHours() < 12 ? 'Welcome and good Morning' : d.getHours() < 18 ? 'Welcome and good Evening' : 'Welcome and good Nigth' )
            }

        const Day = () =>{
            if(d.getDay() === 1){
                return 'Monday'
            }else if(d.getDay() === 2){
                return 'Tuesday'
            }else if(d.getDay() === 3){
                return 'Wednesday'
            }else if(d.getDay() === 4){
                return 'Thursday'
            }else if(d.getDay() === 5){
                return 'Friday'
            }else if(d.getDay() === 6){
                return 'Saturdy'
            }else if(d.getDay() === 7){
                return 'Sunday'
            }
        }

        const Month = () =>{
            if(d.getMonth()+1 === 1){
                return 'January'
            }else if(d.getMonth() + 1 === 2){
                return 'February'
            }else if(d.getMonth() + 1 === 3){
                return 'March'
            }else if(d.getMonth() + 1 === 4){
                return 'April'
            }else if(d.getMonth() + 1 === 5){
                return 'May'
            }else if(d.getMonth() + 1 === 6){
                return 'June'
            }else if(d.getMonth() + 1 === 7){
                return 'July'
            }else if(d.getMonth() + 1 === 8){
                return 'August'
            }else if(d.getMonth() + 1 === 9){
                return 'September'
            }else if(d.getMonth() + 1 === 10){
                return 'Octuber'
            }else if(d.getMonth() + 1 === 11){
                return 'November'
            }else if(d.getMonth() + 1 === 12){
                return 'December'
            }
        }
    

    return (
        <div className='TimeCont'>
            <h1 className='Welcome'>{WelcomeUsr()}</h1>
            <div className='Date'>
                <ul className='DatesInfo'>
                    <li className='diaSemana'>{Day()} </li>
                    <li className='day'>{d.getDate()} </li>
                    <li className='month'>{Month ()} </li>
                    <li className='of'>of</li>
                    <li className='year'>{d.getFullYear()} </li>
                </ul>
            </div>
            <div className='Hours'>
                <ul className='HoursInfo'>
                    <li id='hores' className='hores'>{hora.hours}</li>
                    <li>:</li>
                    <li id='minutes' className='minutes'>{hora.minutes}</li>
                    <li>:</li>
                    <li id='seconds' className='seconds'>{hora.seconds}</li>
                    <li id='ampm' className='ampm'> {hora.meridian}</li>
                </ul>
            </div>
        </div>
    );
    
};

export default Time
