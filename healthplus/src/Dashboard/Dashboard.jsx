// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Sidebar from '../Sidebar/sidebar';

// export default function Dashboard() {
//   return (
//     <>
//     <div> <Sidebar /> </div>
//     <Card style={{ maxWidth: 200 , marginTop: '-550px', marginLeft: "210px"}}>
//       <CardMedia
//         component="img"
//         height="70"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//         // style={{marginTop: '10px', marginLeft: "20px"}}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Iron Man
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          vikas
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

// <Card style={{ maxWidth: 200 , marginTop: '-210px', marginLeft: "500px"}}>
// <CardMedia
//   component="img"
//   height="70"
//   image="/static/images/cards/contemplative-reptile.jpg"
//   alt="green iguana"
//   // style={{marginTop: '10px', marginLeft: "20px"}}
// />
// <CardContent>
//   <Typography gutterBottom variant="h5" component="div">
//     Iron Man
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//    vikas
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button size="small">Share</Button>
//   <Button size="small">Learn More</Button>
// </CardActions>
// </Card>

// </>

//   );
// }

import React from "react";
import "./dashboard.css";
import {  Table } from "react-bootstrap";
import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import Graph from "./graph";
import Sidebar from "../Sidebar/sidebar";
import { Budget } from "./Budget";
import { TotalCustomers } from "./TotalCustomers";
import { TotalProfit } from "./TotalProfit";
import { TasksProgress } from "./TasksProgress";


function Dashboard() {
  return (
    <div style={{ display: "flex", maxWidth: "100vw"}}>
      <div>
        <Sidebar />
      </div>
      <div className="dashboard">
        <div style={{display: "flex"}}>
        <Budget sx={{ margin: "50px", height: "20vh", marginLeft: "140px" , backgroundColor: "grey"}} />
        <TotalCustomers sx={{ margin: "50px", height: "20vh", backgroundColor: "olive" }} />
        <TasksProgress sx={{ margin: "50px", height: "20vh", backgroundColor: "orange" }} />
        <TotalProfit sx={{ margin: "50px", height: "20vh", backgroundColor: "lightgreen" }} />

        </div>
        <div style={{ marginLeft: "-150px" }}>
          <MDBContainer>
            <MDBRow className="g-2">
              <MDBCol size="12">
                <div className="dashboard-cards">
                  <div className="p-3">
                  </div>
                </div>
              </MDBCol>



              <MDBCol size="6">
                <div className="p-3 dashboard-table">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <th key={index}>Hospitals Added on Year</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>202 {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>3</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </MDBCol>
              
              <MDBCol size="6">
                <div className="p-3 graph-admin">
                  <MDBCol lg="7">
                    <div className="graph-admin">
                      <Graph />
                    </div>
                  </MDBCol>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






