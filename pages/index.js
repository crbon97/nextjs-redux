import Link from "next/link";
import { connect } from "react-redux";

import Layout from "../components/MyLayout";
import Demo from "./demo";
import { getUsers } from "../store/actions/usersActions";

const User = ({ user }) => (
  <li>
    <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

const Index = (props) => {
  const { users } = props;
  return (
    <>
      <Layout>
        <h1>Users</h1>
        <ul>
          {users && users.map((user) => <User key={user.id} user={user} />)}
        </ul>
      </Layout>
      <Demo></Demo>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const { users } = await ctx.store.dispatch(getUsers());
  return { users };
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

export default connect(mapStateToProps)(Index);
