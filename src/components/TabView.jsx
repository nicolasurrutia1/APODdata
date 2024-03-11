import { memo } from "react";
const TabView = memo(({ activeTab, views }) => {
  return <div>{views[activeTab]}</div>;
});

export default TabView;
