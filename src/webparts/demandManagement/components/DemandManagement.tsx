import * as React from 'react';
import styles from './DemandManagement.module.scss';
import { IDemandManagementProps } from './IDemandManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { LandingPage } from './LandingPage';
import { sp } from "@pnp/sp";

export default class DemandManagement extends React.Component<IDemandManagementProps, {}> {
  public render(): React.ReactElement<IDemandManagementProps> {
    sp.setup({ spfxContext: this.props.context });
    return (
      <div style={{ maxWidth: `1200px`, minWidth: `1200px`}}>
        {/* <div>{ this.props.ITPMOEmailID }</div> */}
        <LandingPage {...this.props}></LandingPage>
      </div>
    );
  }
}
