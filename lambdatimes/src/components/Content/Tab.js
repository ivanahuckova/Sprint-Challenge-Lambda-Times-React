import React from "react";
//selectedTab
//selectTabHandler;
const Tab = props => {
	if (props.tab === props.selectedTab) {
		/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
		return (
			<div
				className={"tab active-tab"}
				onClick={() => {
					props.selectTabHandler(props.tab);
					/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
				}}
			>
				{props.tab.toUpperCase()}
			</div>
		);
	}
	return <div className={"tab active-tab"} />;
};

// Make sure you include PropTypes on your props.

export default Tab;
