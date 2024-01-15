export default function Authentication() {

    return (
      <div  className = "flex items-center justify-center">
        <div role="tablist" className="tabs tabs-bordered p-4 w-5/6 max-w-screen-md mx-auto">
          <input type="radio" name="my_tabs_1" role="tab" className="tab ml-10 mb-2" aria-label="📲" />
          <div role="tabpanel" className="tab-content flex-col">
            <input type="text" placeholder="Username" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <input type="text" placeholder="Password" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <button className="btn btn-sm btn-success m-2 w-3/6 max-w-xs justify-center text-white">Login</button>
          </div>
  
          <input type="radio" name="my_tabs_1" role="tab" className="tab mb-2" aria-label="✒️" checked />
          <div role="tabpanel" className="tab-content">
            <input type="text" placeholder="Email" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <input type="text" placeholder="Username" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <input type="text" placeholder="Password" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <button className="btn btn-sm btn-primary m-2 w-3/6 max-w-xs justify-center text-white">Sign Up</button>
          </div>
  
        </div>
      </div>
  
    )
  }