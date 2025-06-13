import React from 'react'

function RegisterComponent() {
  return (
    <React.Fragment>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-12">
            <h1>Create Account</h1>
          </div>
          <div className="col-md-12">
            <form action="">
              <div className="from-group mb-2">
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' />
              </div>
              <div className="from-group mb-2">
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' />
              </div>
              <div className="from-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' />
              </div>
              <div className="from-group mb-2">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" className='form-control'>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="from-group mb-2">
                <label htmlFor="image">Image</label>
                <input type="file" className='form-control' />
              </div>
              <div className="from-group mb-2">
                <button className='btn btn-success w-100'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterComponent