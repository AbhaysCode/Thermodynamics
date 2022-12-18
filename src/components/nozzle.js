import {useState} from 'react';


function Nozzle(){
    const [v1,setV1] = useState("");
    const [v2,setV2] = useState("");
    const [h1,setH1] = useState("");
    const [h2,setH2] = useState("");
    function handleVelocity(event){
        let res = Math.sqrt(Math.pow(parseInt(v1),2)+(2*(parseInt(h1)-parseInt(h2))))
        setV2(res);
        event.preventDefault();
    }
    return (
    <div className="container-fluid my-5">
        <section>
            <div className="container ">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-4 bg-intro"> 
                        <img src="https://thermodynamicsengineering.files.wordpress.com/2012/10/nozzle.png" className="img-fluid" alt="Bernoulli"/>       
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                        <h4 className="card-title py-3">VELOCITY AT OUTLET OF NOZZLE</h4>
                        <p className='card-text'>A nozzle is a device that increases the velocity of a fluid at the expense of pressure. A
                            diffuser is a device that increases the pressure of a fluid by slowing it down.  
                            The cross sectional area of a nozzle decreases in the flow direction for subsonic flows and
                            increase for supersonic flows.</p>
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
                        {v2&&<div className="alert alert-success" role="alert">Velocity V2 is {v2}m/s</div>}
                            <form className="form-validate" encType="multipart/form-data" onSubmit={handleVelocity}>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control" placeholder="Enter the Value of V(1) in m/s" onChange={(event)=>setV1(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of H(1) in KJ/kg-K" onChange={(event)=>setH1(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of H(2) in KJ/kg-K" onChange={(event)=>setH2(event.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Compute V(2)</button>
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
export default Nozzle;