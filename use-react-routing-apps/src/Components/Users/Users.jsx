import { useLoaderData } from "react-router";

const Users = () => {
  const Users = useLoaderData();
  // console.log(Users)

  return (
    <div>
      <h4>Users Data</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 bg-gray-50 p-5">
        {Users.map((user) => (
          <div className="card card-border bg-base-100 w-96 border">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>
                {user.email}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">see</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
