import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ currentPage, totalPages, findAll }) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.First onClick={() => findAll(0)} />
                    <Pagination.Prev onClick={() => findAll(currentPage - 1)} disabled={currentPage === 0} />
                    {
                        Array.from(Array(totalPages), (e, i) => <Pagination.Item key={i + 1} onClick={() => findAll(i)}>{i + 1}</Pagination.Item>)
                    }
                    <Pagination.Next onClick={() => findAll(currentPage + 1)} disabled={(currentPage + 1) === totalPages} />
                    <Pagination.Last onClick={() => findAll(totalPages - 1)} />
                </Pagination>
            </div>
            <div className="d-flex justify-content-center">
                <span>Page: {currentPage + 1} of {totalPages}</span>
            </div>
        </>
    );
}

export default PaginationComponent;