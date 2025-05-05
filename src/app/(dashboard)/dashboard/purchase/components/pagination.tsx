import React from "react";

const Pagination = () => {
  return (
    <div className="mb-1">
      <nav className="d-flex justify-items-center justify-content-between">
        <div className="d-flex justify-content-between flex-fill d-sm-none">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">« Previous</span>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="https://posproweb.acnoo.com/business/products?page=2"
                rel="next"
              >
                Next
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
          <div className="px-4 ">
            <p className="small text-muted pagination-content-style">
            Showing 1 to 10 of 20 entries
            </p>
          </div>
          <div className="me-1">
            <ul className="pagination">
              <li className="page-item disabled border rounded-start">
                <span className="page-link" aria-hidden="true">
                  Previous
                </span>
              </li>
              <li className="page-item active border" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item border">
                <a
                  className="page-link"
                  href="https://posproweb.acnoo.com/business/products?page=2"
                >
                  2
                </a>
              </li>
              <li className="page-item border rounded-end ">
                <a
                  className="page-link pagination-link-style"
                  href="https://posproweb.acnoo.com/business/products?page=2"
                  rel="next"
                  aria-label="Next"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
