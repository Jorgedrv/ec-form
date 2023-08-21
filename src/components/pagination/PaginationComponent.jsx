import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ currentPage, totalPages, findAll }) => {
    const pages = [];
    const visiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let pageLinks = [];
    if (totalPages <= visiblePages) {
        pageLinks = pages;
    } else {
        const leftEllipsis = currentPage - 1 > 1;
        const rightEllipsis = currentPage + 1 < totalPages;

        if (!leftEllipsis && rightEllipsis) {
            pageLinks = pages.slice(0, visiblePages);
        } else if (leftEllipsis && !rightEllipsis) {
            pageLinks = pages.slice(totalPages - visiblePages + 1);
        } else {
            pageLinks = pages.slice(
                currentPage - 3,
                currentPage + 2
            );
        }

        if (leftEllipsis) {
            pageLinks.unshift('...');
        }
        if (rightEllipsis) {
            pageLinks.push('...');
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <Pagination>
                <Pagination.First onClick={() => findAll(0)} />
                <Pagination.Prev onClick={() => findAll(currentPage - 1)} disabled={currentPage === 0} />
                {pageLinks.map((page, index) => (
                    <Pagination.Item
                        key={index}
                        active={page - 1 === currentPage}
                        onClick={() => {
                            if (typeof page === 'number') {
                                findAll(page - 1);
                            }
                        }}
                    >
                        {page}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => findAll(currentPage + 1)} disabled={(currentPage + 1) === totalPages} />
                <Pagination.Last onClick={() => findAll(totalPages - 1)} />
            </Pagination>
        </div>
    );
}

export default PaginationComponent;