import React from "react";
import { Scene, Router, Stack, Tabs } from "react-native-router-flux";
import CustomTabBar from "./components/CustomTabBar";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import MyProposedEvents from "./views/MyProposedEvents";
import Events from "./views/Events";
import EventAdd from "./views/EventAdd";
import Register from "./views/Register";
import constants from "./app/app.constants";

export default () => (
  <Router>
    <Stack key="root">
      <Tabs key="tabBar" hideNavBar tabBarComponent={CustomTabBar}>
        <Scene
          key={constants.ROUTES.MY_PROPOSED_EVENTS}
          title="Mes événements proposés"
          component={MyProposedEvents}
          name="my proposed events"
        ></Scene>
        <Scene
          key={constants.ROUTES.EVENT_LIST}
          title="Les événements"
          component={Events}
          name="events"
        ></Scene>
        <Scene
          key={constants.ROUTES.HOMEPAGE}
          title="Accueil"
          initial
          component={Homepage}
          name="homepage"
        ></Scene>
      </Tabs>
      <Scene
        key={constants.ROUTES.EVENT_ADD}
        title="Ajouter un évévenement"
        component={EventAdd}
        name="event add"
      ></Scene>
      <Scene
        key={constants.ROUTES.LOGIN}
        title="Connexion"
        hideNavBar
        hideTabBar
        component={Login}
        name="login"
        initial
      ></Scene>
      <Scene
        key={constants.ROUTES.REGISTER}
        title="Inscription"
        hideNavBar
        hideTabBar
        component={Register}
        name="register"
      ></Scene>
    </Stack>
  </Router>
);
