import '../Rewards.css'
import { useRef, useState , useEffect} from 'react';

function Rewards(){
    const rangeValues = useRef(null)
    const [value, setValue]=useState('0')
    const [invamount, setInvamount] = useState(500)
    const [ret, setRet] = useState(10000)

    const handleInputChange = () => {
        const selectedValue = rangeValues.current.value;
        console.log("Selected value: " + selectedValue);
        setValue(selectedValue)
        setInvamount(invamount +  (selectedValue *1000) ) 
        const amount = invamount;
        setRet(amount+ (amount * selectedValue * 0.90))

      };
    

    return(
        <>
           <div className="return-section">
                <div className="container">
                    <h2 className='text-center'>Stay the course, reap the rewards</h2>

                    <div className="return-invested">
                        <h6>If you invested</h6>
                        <h1>${invamount}</h1>
                        <div className="dropdown-wrapper">
                            <p>Monthly     3 years ago</p>
                        </div>
                        <div className='input-container'>
                            <input min="1" max="100" value={value} type= "range" onChange={()=>{handleInputChange()}} ref={rangeValues}/>
                        </div>
                        <div className="returns">
                            <h6>Today you would have</h6>
                            <h1>${ret}</h1>
                        </div>
                    </div>
                </div>
           </div>
           <div className="quotes-section"></div>
        </>
    )
}

export default Rewards;