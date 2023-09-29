import mayokun from '../assets/images/mayokun.jpg'
import wande from '../assets/images/wande.jpg'
import wura from '../assets/images/wura.jpg'
import phone from '../assets/images/app-screenshot-investment-platform-nigeria.png'
import '../App.css'
import { useEffect, useState, useRef, useCallback} from 'react'

function Body(){
    const[pic,picState] = useState(mayokun)
    const[comment, commentState] = useState('I\'ve become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there')
    const[name, nameState]= useState('Mayorkun A')
    const[handle, handleState] = useState('@Mhay')

   
    const commentors = [
        {
            name: "Mayorkun A",
            picture: mayokun,
            handle: "@Mhay",
            comment: "I've become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there"
        },
        {
            name: " Olaitan O",
            picture: wande,
            handle: "@thevideopilot",
            comment: "I love how Cowrywise has made me think of saving part of any income I get. I immediately think of investing any money I get now."
        },
        {
            name: " Wuraola F",
            picture: wura,
            handle: "@wuwu",
            comment: "Cowrywise makes saving quite interesting and fun. My best part would be the fact that I can seamlessly invest my naira in dollars"
        }
    ]

        const imgRef = useRef(null)
        
  
        const add = useCallback(()=> {
            imgRef.current.classList.add('add')
            setTimeout(() => {
               imgRef.current.classList.remove('add');
             }, 500);
           console.log(imgRef.current.classList)

       })

     function handlePicChange(val){
        add()
        picState(val.picture)
        commentState(val.comment)
        nameState(val.name)
        handleState(val.handle)
    }
    useEffect(()=>{add()},[add])

    return(
        <>
            <section>
                <div className="picture-display">
                    <div className="backpanel">
                        <div className="pic_selection">
                            <img src={mayokun} onClick={()=>handlePicChange(commentors[0])}  alt="mayokun pic"/>
                            <img src={wande} onClick={()=>handlePicChange(commentors[1])}  alt="mayokun pic"/>
                            <img src={wura} onClick={()=>handlePicChange(commentors[2])}  alt="mayokun pic"/>
                        </div>
                    </div>

                    <img  src={pic} alt="mayokun pic" ref={imgRef}/>
                    <div className="comment">
                        <div className="comment_text">
                            <p>{comment}</p>
                            <br />
                            <p id='link'><span>{name}</span><span>{handle}</span></p>
                        </div>
                    </div>
                </div>
                
                <div className="section-info">
                    <h1>Put your money to work</h1>
                    <h6>Invest wisely. Grow wealth</h6>
                    <div className="form">
                        <input type="text" placeholder='    Your email...'/>
                        <button>Start investing</button>
                    </div>
                </div>
            </section>


            <div className="bars_section">

                <div className="advertisement">
                    <h2>Get a <small ><i>little</i></small> richer each day</h2>
                    <h5>One small step today, a giant leap from tomorrow</h5>
                    <button>Start Your Financial Journey</button>
                </div>

                <div className="phone">
                    <img src={phone} alt="" />
                </div>
            </div>
        </>
    )
}
export default Body;