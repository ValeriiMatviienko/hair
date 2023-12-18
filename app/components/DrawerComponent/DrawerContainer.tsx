import Drawer from "./Drawer";
import DrawerData from "./Drawerdata";
import { useNavigationContext } from "@/app/context/NavigationContext";

const DrawerContainer = () => {
  const { isOpen, setIsContactFormOpen } = useNavigationContext();

  return (
    <>
      {isOpen ? (
        <Drawer>
          <DrawerData setIsContactFormOpen={setIsContactFormOpen} />
        </Drawer>
      ) : null}
    </>
  );
};

export default DrawerContainer;
