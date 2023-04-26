import "./App.css";
import { Tabs, TabItem } from "@aws-amplify/ui-react";
import { ReviewCreateForm, ReviewList } from "./ui-components";
import { Amplify, Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    userPoolId: "us-east-2_UbsaCPOwn",
    userPoolWebClientId: "3o70tuc527eirrhsfmt0tff3n8",
    region: "us-east-2",
  },
});

async function signOutAmp() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabItem title="Reviews">
          <header className="App-header">
            <ReviewList />
          </header>
        </TabItem>
        <TabItem title="New Review">
          <header className="App-header">
            <ReviewCreateForm />
          </header>
        </TabItem>
        <TabItem title="Sign Out" onClick={signOutAmp}>
          <header className="App-header"></header>
        </TabItem>
      </Tabs>
    </div>
  );
}

export default App;
