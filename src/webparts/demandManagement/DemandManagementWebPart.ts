import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'DemandManagementWebPartStrings';
import DemandManagement from './components/DemandManagement';
import { IDemandManagementProps } from './components/IDemandManagementProps';

export interface IDemandManagementWebPartProps {
  description: string;
  ITPMOEmailID: string;
  ITPMOUserName: string;
  spHttpclient: string;
  stieUrl: string;
  context: string;
  onlysiteUrl?: string;
  loggedInUserEmail: string;
  itemProps?: Object;
}

export default class DemandManagementWebPart extends BaseClientSideWebPart<IDemandManagementWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDemandManagementProps> = React.createElement(
      DemandManagement,
      {
        description: this.properties.description,
        ITPMOEmailID: this.properties.ITPMOEmailID,
        ITPMOUserName: this.properties.ITPMOUserName,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,        
        onlysiteUrl: this.context.pageContext.web.serverRelativeUrl,
        loggedInUserEmail: this.context.pageContext.user.email,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('ITPMOEmailID', {
                  label: strings.ITPMOEmailFieldLabel
                }),
                PropertyPaneTextField('ITPMOUserName', {
                  label: strings.ITPMONameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
