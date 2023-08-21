import { useState, useEffect } from "react";
import { Table, Spinner, Container } from "react-bootstrap";
import VisitedFormRecordsDetail from "../visited-form-records-detail/VisitedFormRecordsDetail";
import ModalComponent from "../../../modal/ModalComponent";
import PaginationComponent from "../../../pagination/PaginationComponent";
import axios from "../../../../axios";
import { readUrl } from "../../../../common/endpoints";

const VisitedFormRecords = () => {
    const [records, setRecords] = useState([]);
    const [detailRecord, setDetailRecord] = useState({});
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        findAll(currentPage);
        return () => { }
    }, [currentPage]);

    const findAll = (page) => {
        setSpinner(true);
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
                setRecords(response.data.content);
                setCurrentPage(response.data.number);
                setTotalPages(response.data.totalPages);
                setSpinner(false);
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
            {spinner ?
                <div className="text-center"> <Spinner animation="border" role="status" /> </div> :
                records.length <= 0 ? <div className="text-center"><h1 className="display-4 centered">No records found</h1> </div> :
                    <div>
                        <div className="text-center"><h1 className="display-4 centered">Records</h1></div>
                        <div className="table-responsive">
                            <Table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th key="id">ID</th>
                                        <th key="firstName">First Name</th>
                                        <th key="lastName">Last Name</th>
                                        <th className="d-none d-sm-table-cell" key="email">Email</th>
                                        <th className="d-none d-sm-table-cell" key="phone">Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map(record => (
                                            <tr key={record.id}>
                                                <th>{record.id}</th>
                                                <td>{record.name}</td>
                                                <td>{record.lastName}</td>
                                                <td className="d-none d-sm-table-cell">{record.email}</td>
                                                <td className="d-none d-sm-table-cell">{record.mobilePhone}</td>
                                                <td style={{ textAlign: "center" }}>
                                                    <div style={{ cursor: "pointer" }} onClick={() => findById(record)}><img alt="img" src="eye.svg" /></div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <PaginationComponent currentPage={currentPage} totalPages={totalPages} findAll={findAll} />
                        <ModalComponent size="xl" title="Detail record" show={show} handleModal={handleModal}>
                            <VisitedFormRecordsDetail detailRecord={detailRecord} />
                        </ModalComponent>
                    </div>
            }
        </Container>
    );
}

export default VisitedFormRecords;