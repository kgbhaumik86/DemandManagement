import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from '@microsoft/sp-http';

export interface IDemandManagementProps {
  description: string;
  ITPMOEmailID?: string;
  ITPMOUserName?: string;
  spHttpClient?: SPHttpClient;
  siteUrl?: string;
  context?: WebPartContext;
  _backHome?: () => any;
  selectedItemID?: number;
  onlysiteUrl?: string;
  loggedInUserEmail: string;
  createdDate?: string;
  isRejected?: boolean;
  ResetHomeNew?: () => any;
  itemProps?: Object;
  Department?: string;
  userEmail?: string;
  userName?: string;
  _backDynamicSearch?: () => any;
  callerStep?: string;
}
