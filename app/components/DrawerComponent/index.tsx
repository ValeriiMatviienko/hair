"use client";
import { FC } from "react";
import Drawer from "./Drawer";
import DrawerData from "./Drawerdata";
import { useNavigationContext } from "@/app/context/NavigationContext";

const DrawerContainer: FC = () => {
  const { isOpen } = useNavigationContext();

  return (
    <>
      {isOpen ? (
        <Drawer>
          <DrawerData />
        </Drawer>
      ) : null}
    </>
  );
};

export default DrawerContainer;
