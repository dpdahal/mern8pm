import React from 'react';
import { useGetUserQuery,useDeleteUserMutation } from '../store/reducers/userSlice';

function UsersComponents() {
  const { data, error, isLoading } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
      deleteUser(id).unwrap().then((res)=>{
        console.log("User deleted successfully", res);
      })
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <div className="card py-3">
          <div className="card-body">
            <h1>Users List</h1>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Sn</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td>
                      {user.image ? (
                        <img src={user.image} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td>
                      <button className='btn btn-sm btn-primary'>Edit</button>
                      <button className='btn btn-sm btn-danger'
                        onClick={()=>{handleDelete(user._id)}}
                      >Delete</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UsersComponents