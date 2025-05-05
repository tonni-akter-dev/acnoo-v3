import Image from 'next/image'
import React from 'react'
import arrowRight from '/public/icon/arrow-right.svg'
import star from '/public/icon/star.svg'
import download from '/public/img/icon/download-alt.svg'
import product1 from '/public/img/product/Product1.svg'

const DataTable = () => {
    return (
        <div className="mb-30">
            <div className="card mx-0 border-0">
                <div className="card-body border-0">
                    <div className="table-header p-2 border-0">
                        <h4>New Purchase</h4>
                        <div className="d-flex items-center justify-center gap-1">
                            <p>View All</p>
                            <Image src={arrowRight} alt="" />
                        </div>
                    </div>
                </div>

                <div className="responsive-table m-0 border-0">
                    <table className="table border-0" id="datatable">
                        <thead className="border-0">
                            <tr className="border-0">
                                <th className="font-body-4">SL.</th>
                                <th className="font-body-4">Image</th>
                                <th className="font-body-4">Invoice</th>
                                <th className="font-body-4">Name</th>
                                <th className="font-body-4">License</th>
                                <th className="font-body-4">Total Price</th>
                                <th className="font-body-4">Rating</th>
                                <th className="font-body-4">Support Expire</th>
                                <th className="font-body-4">Download License</th>
                            </tr>
                        </thead>
                        <tbody id="sale-return-data" className="border-0">
                            {[1, 2, 3, 4, 5].map(data => (
                                <tr key={data} className="font-body-3">
                                    <td className="font-body-3">1</td>
                                    <td>
                                        <Image
                                            src={product1}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </td>
                                    <td className="custom-color">2536214</td>
                                    <td className="font-body-3 big-content-td">
                                        Acnoo Admin - Flutter Admin Panel Dashboard with PWA
                                    </td>
                                    <td>
                                        <div>
                                            <p
                                                className="mb-0"
                                                style={{ color: "#0B071A", fontWeight: "bold" }}
                                            >
                                                Personal License
                                            </p>
                                            Extended support for 6 months
                                        </div>
                                    </td>
                                    <td className="font-body-3">$27.00</td>
                                    <td className="font-body-3">
                                        <div className="d-flex gap-1 items-center justify-center">
                                            <Image src={star} alt="" />
                                            <p className="custom-color">0.00 Reviews</p>
                                        </div>
                                    </td>
                                    <td className="font-body-3">24/05/2024</td>
                                    <td className="font-body-3 d-flex align-items-center justify-content-center">
                                        <button className=" download-btn d-flex gap-1 items-center justify-center">
                                            <p className="text-white">
                                                Download
                                            </p>
                                            <Image
                                                src={download}
                                                alt=""
                                                className="mt-1"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataTable