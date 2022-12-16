import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal, Container } from "react-bootstrap";
import Sidebar from "../Sidebar/sidebar";

function Viewhospital() {
  const [data1, setData] = useState([]);

  let [hospital_id, setHospital_id] = useState("");
  let [hospital_name, setHospital_name] = useState("");
  let [hospital_type, setHospital_type] = useState("");
  let [hospital_address, setHospital_address] = useState("");
  let [admin_id, setAdmin_id] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const response = await fetch("http://localhost:1999/gethospital");
    const data = await response.json();
    setData(data);
  }

  function deletehospital(hospital_id) {
    fetch(`http://localhost:1999/deletehospital/${hospital_id}`, {
      method: "DELETE",
    }).then((res) => console.log("user deleted"));
    // getdata();
  }

  function updatehospital(
    hospital_id,
    hospital_name,
    hospital_type,
    hospital_address,
    admin_id
  ) {
    setHospital_id(hospital_id);
    setHospital_name(hospital_name);
    setHospital_type(hospital_type);
    setHospital_address(hospital_address);
    setAdmin_id(admin_id);
    setShow(true);
  }

  function updateView() {
    let user = {
      hospital_id,
      hospital_name,
      hospital_type,
      hospital_address,
      admin_id,
    };
    let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch(`http://localhost:1999/updatehospital/${hospital_id}`, reqData).then(
      (result) => {
        result.json().then((resp) => {
          console.warn(resp);
        });
      }
    );
    getdata();
  }

  const columns = [
    {
      name: "hospital id",
      selector: (row) => row.hospital_id,
    },

    {
      name: "hospital name",
      selector: (row) => row.hospital_name,
    },

    {
      name: "hospital type",
      selector: (row) => row.hospital_type,
    },

    {
      name: "hospital address",
      selector: (row) => row.hospital_address,
    },

    {
      name: "admin id",
      selector: (row) => row.admin_id,
    },

    {
      name: "Update",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() => {
            updatehospital(
              row.hospital_id,
              row.hospital_name,
              row.hospital_type,
              row.hospital_address,
              row.admin_id
            );
          }}
        >
          Edit
        </button>
      ),
    },

    {
      name: "Delete",
      cell: (row) => {
        return (
          <Button
            onClick={() => deletehospital(row.hospital_id)}
            variant="danger"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{display:"flex"}} >
      <div><Sidebar /></div>
      <div style={{marginLeft: "200px"}}>
        
        <DataTable
          title="Hospital List"
          columns={columns}
          data={data1}
          pagination
          fixedHeader
          highlightOnHover
        />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Hospital</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container
              fluid="md"
              style={{ background: "skyblue", color: "black" }}
            >
              <label>hospital id</label>
              <input
                className="form-control"
                type="text"
                value={hospital_id}
                onChange={(e) => setHospital_id(e.target.value)}
              />
              <label>hospital name</label>
              <input
                className="form-control"
                type="text"
                value={hospital_name}
                onChange={(e) => setHospital_name(e.target.value)}
              />
              <label>hospital type</label>
              <input
                className="form-control"
                type="text"
                value={hospital_type}
                onChange={(e) => setHospital_type(e.target.value)}
              />
              <label>hospital address</label>
              <input
                className="form-control"
                type="text"
                value={hospital_address}
                onChange={(e) => setHospital_address(e.target.value)}
              />
              <label>admin id</label>
              <input
                className="form-control"
                type="text"
                value={admin_id}
                onChange={(e) => setAdmin_id(e.target.value)}
              />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                updateView();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    </div>
  );
}
export default Viewhospital;
