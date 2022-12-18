import {useState} from 'react';
function SteadyFlow(){
    const [h1,setH1] = useState("");
    const [h2,setH2] = useState("");
    const [z1,setZ1] = useState("");
    const [z2,setZ2] = useState("");
    const [v1,setV1] = useState("");
    const [v2,setV2] = useState("");
    const [i,setI] = useState("");
    const [w,setW] = useState("");
    const [q,setQ] = useState("");
    function handleWork(event){
        let res = (parseInt(i)*((parseInt(h1)-parseInt(h2))+(((parseInt(v1)*parseInt(v1))-(parseInt(v2)*parseInt(v2)))/2)+9.81*(parseInt(z1)-parseInt(z2))))+parseInt(q);
        setW(res);
        event.preventDefault();
    }
    return (
    <div className="container-fluid my-5">
        <section>
            <div className="container ">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-4 bg-intro"> 
                        <img src="https://i.ytimg.com/vi/Njj3tno43Zs/maxresdefault.jpg" className="img-fluid" alt="Bernoulli"/>       
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                        <h4 className="card-title py-3">STEADY FLOW ENERGY EQUATION</h4>
                        <p className='card-text'>Steady flow process is a process where: the fluid properties can change from point to point in the control volume but remains the same at any fixed point during the whole process</p>
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
                        <img className="card-img-top" src="https://www.sarthaks.com/?qa=blob&qa_blobid=10899835055195665138" alt="Card image cap"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        {w&&<div className="alert alert-success" role="alert">Work Done is {w}J</div>}
                            <form className="form-validate" encType="multipart/form-data" onSubmit={handleWork}>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of H(1) in KJ/kg-K" onChange={(event)=>setH1(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of H(2) in KJ/kg-K" onChange={(event)=>setH2(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control" placeholder="Enter the Value of Z(1) in m" onChange={(event)=>setZ1(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of Z(2) in m" onChange={(event)=>setZ2(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of V(1) in m/s" onChange={(event)=>setV1(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of v(2) in m/s" onChange={(event)=>setV2(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of w in Kg/s" onChange={(event)=>setI(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of Q in KJ" onChange={(event)=>setQ(event.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Compute Work Done</button>
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
export default SteadyFlow;