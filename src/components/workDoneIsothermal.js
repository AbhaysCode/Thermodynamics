import {useState} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function WorkDoneIsothermal(){
    const [p1,setP1] = useState("");
    const [p2,setP2] = useState("");
    const [v1,setV1] = useState("");
    const [v2,setV2] = useState("");
    const [w,setW] = useState("");
    const [h,setH] = useState("");
    const [i,setI] = useState("");
    function handleWork(event){
        let press2 =(p1*v1)/v2;
        console.log("press2 is", press2)
        setP2(press2)
        console.log("Value of p2 is",p2);
        let work = p1*2.303*v1*Math.log10(v2/v1);
        setW(work);
        event.preventDefault();
        let x = (parseInt(p1)+parseInt(press2))/3;
        setH(x)
        let y = (parseInt(v1)+parseInt(v2))/2;
        console.log("Value of v1 is",v1);
        console.log("Value of v2 is",v2);
        console.log("Value of p1 is",p1);
        console.log("Value of h is",x);
        setI(y);
        console.log("Value of i is",y);
    }
    const data = [
        {
          name: v1,
          uv: p1
        },
        {
            name: i,
            uv:h
        },
        {
          name: v2,
          uv: p2,
        }
      ];
    return(
        <div className="container-fluid my-5">
            <section>
                <div className="container ">
                <div className="card">
                <div className="row ">
                    <div className="col-md-4 bg-intro"> 
                    <img src="https://i.ytimg.com/vi/m9h6qyWLscs/maxresdefault.jpg" className="img-fluid" alt="Continuity"/>       
                </div>
                <div className="col-md-8 px-3">
                    <div className="card-block px-3">
                    <h4 className="card-title py-3">WORK DONE IN ISOTHERMAL PROCESS</h4>
                    <p className="card-text">An isothermal process is a process that occurs under constant temperature but other parameters of the system can be changed accordingly. On the other hand, in an adiabatic process, heat transfer occurs to keep the temperature constant. The work done in an isothermal process is due to the change in the net heat content of the system.</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section>
                <div className="container my-2">
                    <div className="card">
                        <div className="row">
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
                                    <Area type="basis" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                {w&&<div className="alert alert-success" role="alert">Work Done is {w} J</div>}
                                    <form className="form-validate" encType="multipart/form-data" onSubmit={handleWork}>
                                        <div className="form-group mb-2">
                                            <input type="number" className="form-control" onChange={(event)=>{setP1(event.target.value)}} placeholder="Enter the Value of P1 in pascal" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <input type="number" className="form-control" onChange={(event)=>{setV1(event.target.value)}} placeholder="Enter the Value of V(1) in m3" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <input type="number" className="form-control" onChange={(event)=>{setV2(event.target.value)}} placeholder="Enter the Value of V(2) in m3" />
                                        </div>  
                                        <button type="submit" className="btn btn-primary">Compute Work Done For Isothermal Process</button>
                                    </form> 
                                    </div>
                                </div>
                </div>
            </div>
                </div>
            </section>
        </div>
    )
}

export default WorkDoneIsothermal;