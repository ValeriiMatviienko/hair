import { DrawerContainerProps } from "@/app/types/types";
import Drawer from "./Drawer";
import DrawerData from "./Drawerdata";

const DrawerContainer = ({
  isOpen,
  setIsOpen,
  setIsContactFormOpen,
}: DrawerContainerProps) => {
  return (
    <>
      {isOpen ? (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawerData setIsContactFormOpen={setIsContactFormOpen} />
        </Drawer>
      ) : null}
    </>
  );
};

export default DrawerContainer;
