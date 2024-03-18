// Components
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from "@chakra-ui/react";
import InfoDrawer from "./drawer";

// Icons
import { CheckCircleIcon, SpinnerIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function List({ user }) {
  const items = user?.grades || [];

  return (
    <Accordion defaultIndex={[0]} allowMultiple bg="white">
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <strong>{item?.subject}</strong>{" "}
                <span className="text-sm">({item?.id})</span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="flex flex-col gap-4 text-slate-600">
              <p>
                <Icon as={CheckCircleIcon} /> Sua média final é{" "}
                {item?.averageGrade}
              </p>
              <p>
                <Icon as={WarningTwoIcon} /> Você acumulou {item?.attendance}{" "}
                faltas (calculado após finalização da disciplina).
              </p>
              <p>
                <Icon as={SpinnerIcon} /> Frequência {item?.frequency}%
              </p>
              <InfoDrawer subject={item?.subject} data={item} />
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
