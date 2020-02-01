import React from "react";
import CardBody from "../page/CardBody";
import PersonalPage from "../page/PersonalPage";
import ComponentListChannel from "../page/ComponentListChannel";
import ComponentSave from "../page/ComponentSave";
import ComponentTarget from "../page/ComponentTarget";
import ComponentUploadVideo from "../page/ComponentUploadVideo";
import PageAccount from "../page/PageAccount";
import ComponentAccountPassword from "../Components/ComponentAccount/ComponentAccountPassword";
import ComponentAccountManageAccess from "../Components/ComponentAccount/ComponentAccountManage_Access";
import ComponentAccountEmail from "../Components/ComponentAccount/ComponentAccountEmail";
import ComponentAccountContactHistory from "../Components/ComponentAccount/ComponentAccountContact_History";
import ComponentAccountPrivacySecurity from "../Components/ComponentAccount/ComponentAccountPrivacy_Security";
import ComponentAccountLoginActivity from "../Components/ComponentAccount/ComponentAccountLogin_Activity";
import PageExplore from "../page/PageExplore";
export const API_ENDPOINT = "http://localhost:3000";

export const HOME_ROUTES = [
  {
    path: "/",
    name: "Trang Chu",
    exact: true,
    component: () => <CardBody />
  },
  {
    path: "/luongquytan",
    name: "PersonalPage",
    exact: true,
    component: () => <PersonalPage />
  },
  {
    path: "/tv/upload",
    name: "upload",
    exact: true,
    component: () => <ComponentUploadVideo />
  },
  {
    path: "/account/edit",
    name: "account",
    exact: true,
    component: () => <PageAccount />
  },
  {
    path: "/explore",
    name: "Explore",
    exact: true,
    component: () => <PageExplore />
  }
];

export const USER_PERSONAL_ROUTES = [
  {
    path: "/luongquytan/channel",
    name: "Channel",
    exact: true,
    component: () => <ComponentListChannel />
  },
  {
    path: "/luongquytan/save",
    name: "Save",
    exact: true,
    component: () => <ComponentSave />
  },
  {
    path: "/luongquytan/target",
    name: "Target",
    exact: true,
    component: () => <ComponentTarget />
  }
];

export const ACCOUNT_ROUTES = [
  {
    path: "/account/password",
    name: "passwordChange",
    exact: true,
    component: () => <ComponentAccountPassword />
  },
  {
    path: "/account/manage_access",
    name: "passwordChange",
    exact: true,
    component: () => <ComponentAccountManageAccess />
  },
  {
    path: "/account/email",
    name: "emailChange",
    exact: true,
    component: () => <ComponentAccountEmail />
  },
  {
    path: "/account/contact_history",
    name: "Contact_history",
    exact: true,
    component: () => <ComponentAccountContactHistory />
  },
  {
    path: "/account/privacy_and_security",
    name: "Privacy_security",
    exact: true,
    component: () => <ComponentAccountPrivacySecurity />
  },
  {
    path: "/account/login_activity",
    name: "login_Activity",
    exact: true,
    component: () => <ComponentAccountLoginActivity />
  }
];
