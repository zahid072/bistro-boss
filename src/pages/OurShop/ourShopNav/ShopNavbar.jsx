import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuSection from "../menuSection/MenuSection";

const ShopNavbar = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <MenuSection menuCategory={category}/>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopNavbar;
