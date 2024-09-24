// import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";

const UsersList = () => {
    return (
        <section className="card users-container">
            <Search />

            <UserListTable />

            {/* <Pagination /> */}
        </section>
    );
};

export default UsersList;
