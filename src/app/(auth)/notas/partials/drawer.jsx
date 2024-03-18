// Components
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";

// Hooks
import { useRef } from "react";

// Icons
import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";

export default function InfoDrawer({ subject, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Visualizar Notas
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notas</DrawerHeader>

          <DrawerBody>
            <h4 className="text-2xl font-bold">{subject}</h4>
            <ul className="flex flex-col gap-4">
              {data?.grades?.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-2 border-b-2 border-slate-300 p-4"
                >
                  <h4 className="font-bold">{item?.id}</h4>
                  <div className="flex flex-col gap-2 text-slate-600">
                    <p>
                      <Icon as={CalendarIcon} /> {item?.date}
                    </p>
                    <p>
                      <strong>
                        <Icon as={CheckIcon} /> Nota:
                      </strong>{" "}
                      {item?.grade}
                    </p>
                  </div>
                </li>
              ))}
              {data?.grades?.length === 0 && (
                <p className="text-slate-600">Nada por aqui ainda...</p>
              )}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
