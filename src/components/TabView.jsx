import { memo } from "react";
const TabView = memo(({ activeTab, views }) => {
  return <section>{views[activeTab]}</section>;
});

export default TabView;
