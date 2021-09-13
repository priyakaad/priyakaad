import { Component } from "react";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  state = {
    UserData: {
      UserMeta: {
        FullName: "Mark Zuckerberg",
        Avatar: "https://i.imgur.com/QDBSMr2b.jpg",
        ProfileURL: "/"
      },
      Birthdays: [
        {
          FullName: "Sadaf Jamal",
          ProfileURL: "/"
        },
        {
          FullName: "Mukesh Dani",
          ProfileURL: "/"
        },
        {
          FullName: "Rahul Agre",
          ProfileURL: "/"
        }
      ],
      Pages: [
        {
          Avatar: "https://i.imgur.com/SrTKlVe.png",
          PageURL: "/",
          Name: "Edusera",
          MessageCount: "20+",
          NotificationCount: "20+"
        },
        {
          Avatar: "https://i.imgur.com/QDBSMr2b.jpg",
          PageURL: "/",
          Name: "Zucku Mama",
          MessageCount: "15",
          NotificationCount: "15"
        }
      ],
      NewsFeeds: [
        {
          Image: "https://i.imgur.com/nOT5zBD.jpeg",
          NewsLink: "/",
          Title: "Best Cat Foods",
          DateTime: "12th Sunday September 2021",
          DatePosted: "today"
        },
        {
          Image: "https://i.imgur.com/BipVIkJ.jpeg",
          NewsLink: "/",
          Title: "Hello Kitties!",
          DateTime: "12th Sunday September 2021",
          DatePosted: "yesterday"
        },
        {
          Image: "https://i.imgur.com/ZM5xWH9.jpeg",
          NewsLink: "/",
          Title: "Some Cute Cat Stuff",
          DateTime: "12th Sunday September 2021",
          DatePosted: "2 days ago"
        }
      ],
      ContentList: {
        Default: [
          {
            Link: "/",
            Icon: "news",
            Text: "News Feed"
          },
          {
            Link: "/",
            Icon: "chat",
            Text: "Messenger"
          },
          {
            Link: "/",
            Icon: "watch",
            Text: "Watch"
          },
          {
            Link: "/",
            Icon: "market",
            Text: "Marketplace"
          }
        ],
        Shortcuts: [
          {
            Link: "https://rb.gy/movl7r",
            Icon: "web",
            Text: "Personal Website"
          }
        ],
        Explore: [
          {
            Link: "https://rb.gy/fupw21",
            Icon: "yt",
            Text: "YouTube Channel"
          }
        ]
      }
    },
    FeedData: []
  };
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="row">
            <Sidebar
              ContentList={this.state.UserData.ContentList}
              UserMeta={this.state.UserData.UserMeta}
            />
            <Main />
            <Feed
              Birthdays={this.state.UserData.Birthdays}
              Pages={this.state.UserData.Pages}
              NewsFeeds={this.state.UserData.NewsFeeds}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
