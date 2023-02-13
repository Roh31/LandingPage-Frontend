import React ,{useState,useEffect}from 'react'
import DashBoard from './final_dashboard_4.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from './box-2.png'
import Update from './refresh-1.png'
import Email from './email.png'
import Graph from './graph-1.png'
import CSV from './csv.png'
import Bag from './bag.png'
import Ih from './indie_hacker.png'
import Twitter from './twitter.png'
import Linkedin from './linkedin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {

  const [upEmail,setUpEmail]=useState("")
  const [downEmail,setDownEmail]=useState("")

    const add=()=>{
      fetch("https://jl2t0e.deta.dev/",{
      method:"POST",
      body:JSON.stringify({
        "email":upEmail
      }),
      headers:{
        "content-type":"application/json; charset=UTF-8"
    }
    })
    .then(setUpEmail("")) 
    .then((response)=>{
      if(response.status === 200){
        toast.success('Signed Up For The Beta-Program  !', {
          position: toast.POSITION.TOP_CENTER,
          className:"toast-message"
      });
      }
      else if(response.status === 403){
        toast.info('Already Singed-up for Beta-Program', {
          position: toast.POSITION.TOP_CENTER
      });
    }
      else{
        toast.error('Please Enter A Valid Email ', {
          position: toast.POSITION.TOP_CENTER,
          className:"toast-message"
      });
      }
    })
  }

  const downadd=()=>{
    fetch("https://jl2t0e.deta.dev/",{
      method:"POST",
      body:JSON.stringify({
        "email":downEmail
      }),
      headers:{
        "content-type":"application/json; charset=UTF-8"
    }
    })
    .then(setDownEmail("")) 
    .then((response)=>{
      if(response.status === 200){
        toast.success('Signed Up For The Beta-Program  !', {
          position: toast.POSITION.TOP_CENTER,
          className:"toast-message"
      });
      }
      else if(response.status === 403){
        toast.info('Already Singed-up for Beta-Program', {
          position: toast.POSITION.TOP_CENTER
      });

      }
      else{
        toast.error('Please Enter A Valid Email ', {
          position: toast.POSITION.TOP_CENTER,
          className:"toast-message"
      });
      }
    })
  }


  return (
    <div >
      <div className='text'>
      <h1>A NO-CODE <mark>PRICE MONITORING</mark> SOLUTION</h1>
      <h4>Track And Capatalize On Your Competitors Prices</h4>
      <h4>Sign-Up For Our Upcoming Beta Program</h4>
      <input  id="lead" type="email" placeholder='Enter Your Email Address' value={upEmail} onChange={(e)=>setUpEmail(e.target.value)}/><button id='submit' onClick={add}>Submit</button>
      <ToastContainer />
      <h4 >No-Credit Card Information Required</h4>
      </div>
      <div className='dashboard'>
      <h2>"All Your Competitors <mark>Pricing Insights</mark> On Your Fingertips"</h2>
      <img src={DashBoard} className="board"/>
      </div>
      <div className='features'>
      <h2>FEATURES OF OUR BETA-PROGRAM </h2>
      {/* <p>Upto 150 products with unlimited Competitors URL's</p>
      <p>3 Price updates for each product</p>
      <p>Instant Email notification for any price drop</p>
      <p>Daily Emails summarizing the products price movement with a CSV report</p>
      <p>Better Understanding of pricing with anlytical and statical Insights</p> */}
      </div>
      <div className='card'>
      <Card sx={{ classname:"main-card"}}>
      <CardMedia
        sx={{ height:140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={Bag}
        title="green iguana"
        id="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          150 Products
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Add upto 150 unique products and for each product you get to add unlimited
          Competitors URL's
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ className:"main-card" }}>
      <CardMedia
        sx={{ height: 140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={Update}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          3 Price updates
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Prices of all your Competitors Products will be Monitored 3 times a day
          to spot any price changes
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ className:"main-card" }}>
      <CardMedia
        sx={{ height: 140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={Email}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          Email Notification
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Email notifications reporting any price change in any of Competitors Prices
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ className:"main-card" }}>
      <CardMedia
        sx={{ height: 140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={Box}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          Stock Availiblity Check
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Track and price your products better by getting to know your Competitors stock situation
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ className:"main-card" }}>
      <CardMedia
        sx={{ height: 140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={CSV}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          Daily Summary
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Get a daily summary of the products price movement in a CSV format
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ className:"main-card" }}>
      <CardMedia
        sx={{ height: 140,padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={Graph}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="header">
          Analytical and statical Insights
        </Typography>
        <Typography variant="body2" color="text.secondary" id="description">
          Understand your products price positioning better with easy to Understand graphs and statical measurments
        </Typography>
      </CardContent>
    </Card>
      </div>
      <div className='endlead'>
      <h2>Sign-Up For Our Beta-Program And Make<br/> <mark>Price Monitoring</mark> a bit easier</h2>
      <input  id="lead" type="email" placeholder='Enter Your Email Address' value={downEmail} onChange={(e)=>setDownEmail(e.target.value)}/><button id='submit' onClick={downadd}>Submit</button>
      </div>
      
      <footer id="footer">
        @ALL RIGHTS RESERVED-PRICEINCHECK 2023<a href='https://twitter.com/priceincheck'><img src={Twitter} className="icon"/></a><a href='https://www.linkedin.com/company/priceincheck'><img src={Linkedin} className="icon"/></a><img src={Ih} className="icon" id="resize"/>
      </footer>
    </div>
  )
}

export default LandingPage

