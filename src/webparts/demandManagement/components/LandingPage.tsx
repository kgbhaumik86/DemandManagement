import * as React from 'react';
import { IDemandManagementProps } from './IDemandManagementProps';
import { CommandBar, DefaultButton, IButtonStyles, ICommandBarItemProps, Separator, IIconStyles, ICommandBarStyles, IIconProps, IStackTokens, Spinner, SpinnerSize, Stack, StackItem } from 'office-ui-fabric-react';
import * as APPCONSTANTS from './Constants/globalConst'
// import { Separator } from '@fluentui/react/lib/Separator';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';
import { LandingDashboard } from './LandingDashboard';
import {MyRaiseRequest} from './MyRaiseRequest';

export const LandingPage = (props: IDemandManagementProps) =>{
    const  [step, setStep] = React.useState<string>("Dashboard");
    const [statusFilter, setStatusFilter] = React.useState<string[]>([]);
    const [selectedView, setSelectedView] = React.useState<string>("MyApprovals");
    
    const customSpacingStackTokens: IStackTokens = {
        childrenGap: 5,
    }
    const iconStyle: Partial<IIconStyles> = {
        root: {
            color: `#ffffff`,
            fontSize: `larger`,
        }
    }
    const commandBarButtonStyle = {
        backgroundColor: `${APPCONSTANTS.BOBThemePrimaryColor}`,
    }
    const buttonStyle: Partial<IButtonStyles> ={
        root: {
            fontSize: `4rem`,
            backgroundColor: `red`,            
        },
        textContainer: {
            marginLeft: `-30 px`
        }
    }
    const _items: ICommandBarItemProps[] = [
        { 
            key: 'Home',
            text: 'Home',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'Home' },
            onClick: () => { setStep("Dashboard"); setStatusFilter([]);},
      
          }, 
          {
            key: 'Views',
            text: 'Views',            
            iconProps: { iconName: 'downIcon' },
            subMenuProps: {
              items: [
                {
                  key: 'myrequest',
                  text: 'My Requests',
                  onClick: () => { setSelectedView("MyRequests"); setStep("Home");}
                },
                {
                  key: 'myapprovals',
                  text: 'My Pending Items',
                  onClick: () => { setSelectedView("MyApprovals"); setStep("Home"); }
                },
                {
                    key: 'involvedrequests',
                    text: 'Requests I am Involved',
                    onClick: () => { setSelectedView("MyApprovals"); setStep("Home"); }
                  },
              ],
            },
          }
    ]
    const handleNewFromDashboard = () => {
        setStep(`New`);
    }
    const verticalStyle = mergeStyles({
        position: 'static',
      });
        switch(step){
            case "Dashboard":
                return (
                    <>
                       {/* <h1> Starting of building DemandManagement</h1> */}
                       <Stack>
                            <StackItem>
                                <CommandBar
                                    items={_items}
                                    ariaLabel="Use left and right arrow keys to navigate between commands"
                                />
                           </StackItem>
                           <StackItem>
                               <Stack horizontal><StackItem></StackItem></Stack>
                           </StackItem>
                           <StackItem className={verticalStyle}>
                               <Separator></Separator>
                           </StackItem>
                       </Stack>
                       <LandingDashboard handleNewRequest={(arg) => handleNewFromDashboard()}></LandingDashboard>
                    </>
                );
            case "New" :
                return(
                    <>
                        <Stack>
                            <StackItem>
                                <CommandBar
                                    items={_items}
                                    ariaLabel="Use left and right arrow keys to navigate between commands"
                                />
                            </StackItem>
                            <StackItem>
                                <Stack horizontal><StackItem></StackItem></Stack>
                            </StackItem>
                            <StackItem className={verticalStyle}>
                                <Separator></Separator>
                            </StackItem>
                            <StackItem>
                                <MyRaiseRequest></MyRaiseRequest>
                            </StackItem>
                        </Stack>
                    </>
                );
        }    
    
}
