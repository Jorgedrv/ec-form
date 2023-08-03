import { useState, useEffect } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import VisitFormRecordsDetail from "../visit-form-records-detail/VisitFormRecordsDetail";
import ModalComponent from "../../modal/ModalComponent";
import PaginationComponent from "../../pagination/PaginationComponent";
import axios from "../../../axios";
import { readUrl } from "../../../common/endpoints";

const VisitFormRecords = () => {
    const [records, setRecords] = useState([]);
    const [detailRecord, setDetailRecord] = useState({});
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        findAll(currentPage);
        return () => { }
    }, [currentPage]);

    const findAll = (page) => {
        axios.get(readUrl, {
            params: {
                page: page,
                size: 10
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response);
                setRecords(response.data.content);
                setCurrentPage(response.data.number);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.log(error)
                window.location.href = "/error-page"
            });
    }

    const findById = (record) => {
        axios.get(readUrl + record.id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response);
                setDetailRecord(response.data);
                if (detailRecord != null) {
                    handleModal();
                }
            })
            .catch(error => console.log(error));
    }

    const handleModal = () => {
        setShow(!show);
    }

    return (
        <Container>
            {records.length <= 0 ?
                <div style={{ marginTop: "120px" }} className="text-center"> <Spinner animation="border" role="status" /> </div> :
                <div>
                    <h1 className="display-4 centered">Records</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th key="id">ID</th>
                                <th key="firstName">First Name</th>
                                <th key="lastName">Last Name</th>
                                <th key="email">Email</th>
                                <th key="phone">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.id}</td>
                                        <td>{record.name}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.email}</td>
                                        <td>{record.mobilePhone}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <div style={{ cursor: "pointer" }} onClick={() => findById(record)}><img alt="img" src="eye.svg" /></div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <PaginationComponent currentPage={currentPage} totalPages={totalPages} findAll={findAll} />
                    <ModalComponent size="xl" title="Detail record" show={show} handleModal={handleModal}>
                        <VisitFormRecordsDetail detailRecord={detailRecord} />
                    </ModalComponent>
                </div>
            }
        </Container>
    );
}

export default VisitFormRecords;