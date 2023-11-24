import "../src/css/default.css";
import "../src/css/feed.css";
import { useState } from "react";
import Swipper from "./Swiper";

function App() {
  const [isLiked, setIsLiked] = useState(true);

  function like() {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  }
  return (
    <div className="main">
      <div className="sidebar">
        <li className="flex-row">
          <img width="116" src="image/logo_instax.png" />
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/1.png" />
          <p className="bold">Home</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/13.png" />
          <p>Search</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/4.png" />
          <p>Explore</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/14.png" />
          <p>Reels</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/15.png" />
          <p>Messages</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/5.png" />
          <p>Notifications</p>
        </li>
        <li className="flex-row sidebar-content">
          <img src="image/icons/3.png" />
          <p>Create</p>
        </li>
        <li className="flex-row sidebar-content">
          <img width="32" src="image/profile/ElfaZahara.png" />
          <p>Profile</p>
        </li>
        <li className="flex-row bawah-content">
          <img src="image/icons/16.png" />
          <p>More</p>
        </li>
      </div>

      <div className="wrapper">
        <div className="tengah flex-col">
          <div className="status-wrapper">
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/7.png" />
              </div>
              <p className="username">mickelfauzan</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/6.png" />
              </div>
              <p className="username">Asmaaw13_</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/5.png" />
              </div>
              <p className="username">Mumu</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/4.png" />
              </div>
              <p className="username">Anne</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/3.jpg" />
              </div>
              <p className="username">LearningX</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/2.png" />
              </div>
              <p className="username">Gates</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/1.png" />
              </div>
              <p className="username">Windows</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/follower/vanessa1.jpg" />
              </div>
              <p className="username">vanessa_1</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img width="32" src="image/profile/1.png" />
              </div>
              <p className="username">Apple</p>
            </div>
          </div>
          <div className="feed flex-col">
            <div className="profile flex-row">
              <div className="img-wrap">
                <img width="32" src="/image/profile/1.png" />
              </div>
              <p className="flex-col">
                <span>apple</span>
                <span>Brisbane, Queensland, Australia</span>
              </p>
              <img width="20" src="image/icons/7.png" />
            </div>
            <div className="imgs swiper">
              <Swipper />
            </div>
            <div className="feed-icons flex-row">
              <img
                id="heart"
                onClick={like}
                src={isLiked ? "image/icons/5.png" : "image/icons/12.png"}
              />
              <img src="image/icons/9.png" />
              <img src="image/icons/2.png" />
              <img src="image/icons/10.png" />
            </div>
            <div className="likes">9,999 likes</div>
            <div className="comments">
              <span className="title">apple</span> "Color, shape, tecture,
              negative space and a little bit of whimsy can be the basis of
              great composition and create a sharp image."
              <span className="hashtag"> #iPhone</span>
            </div>
            <div className="count">View all 169 comments</div>
            <div className="commentar">
              <div className="comment-box flex-row">
                <input type="text" placeholder="Add a comment.." />
              </div>
              <div className="imgs emoji-icons">
                <img src="image/icons/17.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="account-content">
            <li className="flex-row">
              <div className="img-wrap">
                <img width="56" src="image/profile/ElfaZahara.png" />
              </div>
              <p className="flex-col">
                <span>Elfa</span>
                <span>elfazahara</span>
              </p>
              <a href="#">Switch</a>
            </li>
            <li className="flex-row suggestion">
              <span>Suggestions for you</span>
              <a href="#">See All</a>
            </li>
            <li className="flex-row friends">
              <div className="img-wrap">
                <img width="32" src="image/follower/vanessa1.jpg" />
              </div>
              <p className="flex-col">
                <span>vanessa_1</span>
                <span>Followed by elfa + 7 more</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="flex-row friends">
              <div className="img-wrap">
                <img width="32" src="image/follower/2.png" />
              </div>
              <p className="flex-col">
                <span>bill_gates</span>
                <span>Followed by elfa + 7 more</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="flex-row friends">
              <div className="img-wrap">
                <img width="32" src="image/follower/3.jpg" />
              </div>
              <p className="flex-col">
                <span>LX Internasional</span>
                <span>Followed by elfa + 7 more</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="flex-row friends">
              <div className="img-wrap">
                <img width="32" src="image/follower/4.png" />
              </div>
              <p className="flex-col">
                <span>anne</span>
                <span>Followed by elfa + 7 more</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="flex-row friends">
              <div className="img-wrap">
                <img width="32" src="image/follower/5.png" />
              </div>
              <p className="flex-col">
                <span>mumu_s</span>
                <span>Followed by elfa + 7 more</span>
              </p>
              <a href="#">Follow</a>
            </li>
          </div>
          <div className="about justify-center">
            <a href="#">About</a>
            <a href="#">Help</a>
            <a href="#">Press</a>
            <a href="#">API</a>
            <a href="#">Jobs</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Language</a>
            <a href="#">Meta Verified</a>
          </div>
          <div className="name">© 2023 INSTAGRAM FROM META</div>
        </div>
      </div>
    </div>
  );
}

export default App;
