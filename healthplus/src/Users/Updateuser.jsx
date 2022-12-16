import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal, Container } from "react-bootstrap";
import Sidebar from "../Sidebar/sidebar";

function Viewuser() {
  const [data1, setData] = useState([]);

  let [hospital_admin_id, setHospital_admin_id] = useState("");
  let [hospital_admin_name, setHospital_admin_name] = useState("");
  let [hospital_admin_email, setHospital_admin_email] = useState("");
  let [hospital_admin_contact, setHospital_admin_contact] = useState("");
  let [hospital_admin_password, setHospital_admin_password] = useState("");
  let [hospital_id, setHospital_id] = useState("");
  let [doctor_id, setDoctor_id] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const response = await fetch("http://localhost:1999/gethospitaladmin");
    const data = await response.json();
    setData(data);
  }

  function deletehospitaladmin(hospital_admin_id) {
    fetch(`http://localhost:1999/deletehospitaladmin/${hospital_admin_id}`, {
      method: "DELETE",
    }).then((res) => console.log("user deleted"));
    // getdata();
  }

  function updatehospitaladmin(
    hospital_admin_id,
    hospital_admin_name,
    hospital_admin_email,
    hospital_admin_contact,
    hospital_admin_password,
    hospital_id,
    doctor_id
  ) {
    setHospital_admin_id(hospital_admin_id);
    setHospital_admin_name(hospital_admin_name);
    setHospital_admin_email(hospital_admin_email);
    setHospital_admin_contact(hospital_admin_contact);
    setHospital_admin_password(hospital_admin_password);
    setHospital_id(hospital_id);
    setDoctor_id(doctor_id);
    setShow(true)
  }

  function updateView() {
    let user = {
      hospital_admin_id,
      hospital_admin_name,
      hospital_admin_email,
      hospital_admin_contact,
      hospital_admin_password,
      hospital_id,
      doctor_id,
    };
    let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch(
      `http://localhost:1999/updatehospitaladmin/${hospital_admin_id}`,
      reqData
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    getdata();
  }

  const columns = [
    {
      name: "hospital admin id",
      selector: (row) => row.hospital_admin_id,
    },

    {
      name: "hospital admin name",
      selector: (row) => row.hospital_admin_name,
    },

    {
      name: "hospital admin email",
      selector: (row) => row.hospital_admin_email,
    },

    {
      name: "hospital admin contact",
      selector: (row) => row.hospital_admin_contact,
    },

    {
      name: "hospital admin password",
      selector: (row) => row.hospital_admin_password,
    },
    {
      name: "hospital id",
      selector: (row) => row.hospital_id,
    },
    {
      name: "doctor id",
      selector: (row) => row.doctor_id,
    },

    {
      name: "Update",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() => {
            updatehospitaladmin(
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
            onClick={() => deletehospitaladmin(row.hospital_admin_id)}
            variant="danger"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ marginLeft: "200px" }}>
        <DataTable
          title="Hospital admins detail list"
          columns={columns}
          data={data1}
          pagination
          fixedHeader
          highlightOnHover
        />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Hospital Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container
              fluid="md"
              style={{ background: "skyblue", color: "black" }}
            >
              <label>hospital admin id</label>
              <input
                className="form-control"
                type="text"
                value={hospital_admin_id}
                onChange={(e) => setHospital_admin_id(e.target.value)}
              />
              <label>hospital admin name</label>
              <input
                className="form-control"
                type="text"
                value={hospital_admin_name}
                onChange={(e) => setHospital_admin_name(e.target.value)}
              />
              <label>hospital admin email</label>
              <input
                className="form-control"
                type="text"
                value={hospital_admin_email}
                onChange={(e) => setHospital_admin_email(e.target.value)}
              />
              <label>hospital admin contact</label>
              <input
                className="form-control"
                type="text"
                value={hospital_admin_contact}
                onChange={(e) => setHospital_admin_contact(e.target.value)}
              />
              <label>Hospital admin password</label>
              <input
                className="form-control"
                type="text"
                value={hospital_admin_password}
                onChange={(e) => setHospital_admin_password(e.target.value)}
              />
              <label>Hospital id</label>
              <input
                className="form-control"
                type="text"
                value={hospital_id}
                onChange={(e) => setHospital_id(e.target.value)}
              />
              <label>Doctor id</label>
              <input
                className="form-control"
                type="text"
                value={doctor_id}
                onChange={(e) => setDoctor_id(e.target.value)}
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
export default Viewuser;
