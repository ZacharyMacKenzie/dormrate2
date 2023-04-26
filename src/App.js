import "./App.css";
import { Tabs, TabItem } from "@aws-amplify/ui-react";
import { DormReview, ReviewList } from "./ui-components";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    userPoolId: "us-east-2_UbsaCPOwn",
    userPoolWebClientId: "3o70tuc527eirrhsfmt0tff3n8",
    region: "us-east-2",
  },
});

function App({ signOut, user }) {
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
            <DormReview />
          </header>
        </TabItem>
        <TabItem title="Sign Out" onClick={signOut}>
          <header className="App-header"></header>
        </TabItem>
      </Tabs>
    </div>
  );
}

export default App;
