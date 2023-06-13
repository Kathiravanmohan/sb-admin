import React from 'react'
import Card from './Card'

function Dashboard() {
    let data=[{
        title:"Earnings (monthly)",
        value:"$5000",
        color:"primary",
        icon:"fa-calendar",
        isProgress:true
    },
    {
        title:"Earnings (Annual)",
        value:"$60,000",
        color:"success",
        icon:"fa-dollar-sign",
        isProgress:true
        
        
    },
    {
        title:"Task",
        value:"50",
        color:"info",
        icon:"fa-clipboard-list",
        isProgress:false
    },
    {
        title:"pending request",
        value:"18",
        color:"warning",
        icon:"fa-comments",
        isProgress:true
    }


    ]
  return <>
  <div id="content-wrapper" className="d-flex flex-column"> 
<div id="content">

    <div className="container-fluid">

        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div className="row">
         {
          data.map((e,i)=>{
            return <Card key={i}
            input={e}
            />
          })

         }
         
        </div>



    </div>
    

</div>



</div> 
  
  </>
}

export default Dashboard