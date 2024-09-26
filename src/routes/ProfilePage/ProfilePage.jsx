import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import "./ProfilePage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Suspense } from "react";
import Card from '../../components/Card/Card';

function ProfilePage() {
  const data = useLoaderData();


  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate('/login');
  //   }
  // }, [currentUser, navigate]);



  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser?.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          {/* <List /> */}
          <Suspense fallback={<p>Loading ..</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error Loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Saved List</h1>
          </div>

          <Suspense fallback={<p>Loading ..</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error Loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>

          {/* <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          {/* <Chat /> */}

          <Suspense fallback={<p>Loading ..</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error Loading posts!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;