import {useState} from 'react';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function WorkDoneIsobar(){
    const [P,setP] = useState(""); 
    const [Vi,setVi] = useState(""); 
    const [Vf,setVf] = useState(""); 
    const [W,setW] = useState(""); 

    function findWork(event){
        let workDone = P*(Vf-Vi);
        setW(workDone);
        event.preventDefault();
    }
    const data = [
        {
          name: Vi,
          uv: P
        },
        {
          name: Vf,
          uv: P,
        }
      ];
    return (
        <div className="container-fluid my-5">
            <section>
                <div className="container">
                    <div className="card">
                        <div className="row ">
                            <div className="col-md-4 bg-intro"> 
                                <img src="https://i.ytimg.com/vi/BG-cUpnNmPM/maxresdefault.jpg" className="img-fluid" alt="Pascal"/>       
                            </div>
                            <div className="col-md-8">
                                <div className="card-block px-3">
                                <h4 className="card-title py-3">WORK DONE IN ISOBARIC PROCESS</h4>
                                <p className="card-text">An Isobaric process is a thermodynamic process taking place at constant pressure. The term isobaric has been derived from the Greek words “iso” and “baros” meaning equal pressure. As such, the constant pressure is obtained when the volume is expanded or contracted. This basically neutralizes any pressure change due to the transfer of heat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-2">
                        <div className="card">
                            <div className="row ">
                                <div className="col-md-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                            {W&&<div className="alert alert-success" role="alert">Work Done is {W} J</div>}
                                        <form encType="multipart/form-data" onSubmit={findWork}>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of Pressure on System in Pascal" value={P} onChange={(elem)=>{setP(elem.target.value)}}/>
                                            </div>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of Initial Volume of gas in m3" value={Vi} onChange={(elem)=>{setVi(elem.target.value)}}/>
                                            </div>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of Final Volume of gas in m3 " value={Vf} onChange={(elem)=>{setVf(elem.target.value)}}/>
                                            </div>  
                                            <button type="submit" className="btn btn-primary">Compute Work Done For Isobaric Process</button>
                                        </form> 
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div> )}

export default WorkDoneIsobar;