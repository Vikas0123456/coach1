// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// // import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// function Addhospital() {
//     let [hospital_id, setHospital_id] = useState("");
//     let [hospital_name, setHospital_name] = useState("");
//     let [hospital_type, setHospital_type] = useState("");
//     let [hospital_address, setHospital_address] = useState("");
//     let [admin_id, setAdmin_id] = useState("");

//   function submitData() {
//     let userdata = {
//       hospital_id: hospital_id,
//       hospital_name: hospital_name,
//       hospital_type: hospital_type,
//       hospital_address: hospital_address,
//       admin_id: admin_id,
//     };

//     let reqData = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userdata),
//     };
//     fetch("http://localhost:1999/posthospital", reqData).then((response) =>
//       console.log(`Data Submitted ${response.status}`)
//     );
//   }

//   return (
//     <>
//         {/* <h1>Add Productspecification</h1> */}
//         <div style={{display: "flex", marginTop: "-550px", marginLeft: "250px"}}>

//         <Form>

//           <Row>
//             <Form.Group controlId="formGridEmail">
//               <Form.Label>hospital id</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={hospital_id}
//                 onChange={(e) => setHospital_id(e.target.value)}
//                 placeholder=" hospital id"
//               />
//             </Form.Group>

//             <Form.Group controlId="formGridPassword">
//               <Form.Label>hospital name </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={hospital_name}
//                 onChange={(e) => setHospital_name(e.target.value)}
//                 placeholder="hospital name"
//               />
//             </Form.Group>

//             <Form.Group controlId="formGridPassword">
//               <Form.Label>hospital type </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={hospital_type}
//                 onChange={(e) => setHospital_type(e.target.value)}
//                 placeholder="hospital type"
//               />
//             </Form.Group>

//             <Form.Group controlId="formGridPassword">
//               <Form.Label>hospital address </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={hospital_address}
//                 onChange={(e) => setHospital_address(e.target.value)}
//                 placeholder="hospital address"
//               />
//             </Form.Group>

//             <Form.Group controlId="formGridPassword">
//               <Form.Label>admin id </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={admin_id}
//                 onChange={(e) => setAdmin_id(e.target.value)}
//                 placeholder="admin id"
//               />
//             </Form.Group>

//           </Row>

//             <Button onClick={submitData} variant="primary" type="submit">
//               Submit
//             </Button>
//         </Form>
//         </div>
//     </>
//   );
// }
// export default Addhospital;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/sidebar";
import { Card, CardHeader, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";

function Addhospital() {
  let [hospital_id, setHospital_id] = useState("");
  let [hospital_name, setHospital_name] = useState("");
  let [hospital_type, setHospital_type] = useState("");
  let [hospital_address, setHospital_address] = useState("");
  let [admin_id, setAdmin_id] = useState("");

  function submitData() {
    let userdata = {
      hospital_id: hospital_id,
      hospital_name: hospital_name,
      hospital_type: hospital_type,
      hospital_address: hospital_address,
      admin_id: admin_id,
    };

    let reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:1999/posthospital", reqData).then((response) =>
      console.log(`Data Submitted ${response.status}`)
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <div style={{ marginLeft: '210px',  marginTop: '30px'}}>
        <Card>
          <CardHeader
            subheader="Fill all the required information."
            title="Profile"
          />
          <Divider />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please enter hospital id"
                value={hospital_id}
                onChange={(e) => setHospital_id(e.target.value)}
                placeholder=" hospital id"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please enter hospital name"
                value={hospital_name}
                onChange={(e) => setHospital_name(e.target.value)}
                placeholder="hospital name"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
              fullWidth
                helperText="Please enter hospital type"
                value={hospital_type}
                onChange={(e) => setHospital_type(e.target.value)}
                placeholder="hospital type"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
              fullWidth
                helperText="Please enter hospital address"
                value={hospital_address}
                onChange={(e) => setHospital_address(e.target.value)}
                placeholder=" hospital id"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
              fullWidth
                helperText="Please enter admin id"
                value={admin_id}
                onChange={(e) => setAdmin_id(e.target.value)}
                placeholder=" admin id"
              />
            </Grid>
            <Divider />
            
          </Grid>
          <Box 
            sx={{
              display:"flex",
              justifyContent:"flex-end",
              p: 2
            }}
            >
            <Button onClick={submitData} variant="primary" type="submit">
              Submit
            </Button>
            </Box>
        </Card>
        </div>
      </div>
    </>
  );
}
export default Addhospital;
