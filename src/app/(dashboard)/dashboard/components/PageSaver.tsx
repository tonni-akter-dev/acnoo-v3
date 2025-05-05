import React from 'react'
import csv from "/public/images/icons/csv.png";
import excel from "/public/images/icons/excel.png";
import pdf from "/public/images/icons/pdf.png";
import print from "/public/images/icons/print.png";
import Image from 'next/image';

const PageSaver = () => {
    return (
        <div className="table-top-btn-group">
            <ul className="mb-0 ps-0">
                <li>
                    <a href="#">
                        <Image src={csv} alt="" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <Image src={excel} alt="" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <Image src={pdf} alt="" />
                    </a>
                </li>

                <li>
                    <a className="print-window">
                        <Image src={print} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PageSaver