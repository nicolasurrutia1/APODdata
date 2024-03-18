import { memo } from "react";
const TabView = memo(({ activeTab, views }) => {  
  const favoritesView = activeTab === "favorites" ? views.favorites : null;
  return <section>{activeTab === "favorites" ? favoritesView : views.discover}</section>;
});

export default TabView;
