import React, { useEffect, useState } from 'react';

const StatewiseData = () => {
    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData);
        setdata(actualData.statewise)
    }
    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <><div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='mb-5 text-center'>INDIA COVID-19 DASHBOARD</h1>

            </div>
            <div className="table-responsive">
                <table class="table table-hover">
                    
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Serial Number</th>
                            <th scope="col">STATE</th>
                            <th scope="col">CONFIRMED</th>
                            <th scope="col">RECOVERD</th>
                            <th scope="col">DEATHS</th>
                            <th scope="col">ACTIVE</th>
                            <th scope="col">UPDATED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElement, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{curElement.state}</td>
                                        <td>{curElement.confirmed}</td>
                                        <td>{curElement.recovred}</td>
                                        <td>{curElement.deaths}</td>
                                        <td>{curElement.active}</td>
                                        <td>{curElement.lastupdatedtime}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default StatewiseData