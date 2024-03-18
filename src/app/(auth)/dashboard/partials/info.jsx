// Components
import {
  Input,
  InputGroup,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  InputRightElement,
  IconButton,
  useClipboard,
} from "@chakra-ui/react";

// Icons
import { CopyIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function Info({ user }) {
  const steps = [
    { title: "1º Semestre" },
    { title: "2º Semestre" },
    { title: "3º Semestre" },
    { title: "4º Semestre" },
    { title: "5º Semestre" },
    { title: "6º Semestre" },
  ];

  const { onCopy, value, setValue } = useClipboard("");

  useEffect(() => {
    if (value !== "") onCopy();
  }, [value]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-xl">Suas informações</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="ra" className="font-bold text-slate-600">
          RA
        </label>
        <InputGroup>
          <Input
            value={user?.userInfo?.RA}
            id="ra"
            name="ra"
            bg="white"
            isReadOnly
          />
          {/* Copy */}
          <InputRightElement>
            <IconButton
              bg="transparent"
              aria-label="Copy"
              icon={<CopyIcon />}
              onClick={() => setValue(user?.userInfo?.RA)}
            />
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-slate-600">
          E-mail
        </label>
        <InputGroup>
          <Input
            value={user?.userInfo?.email}
            id="email"
            name="email"
            bg="white"
            isReadOnly
          />
          {/* Copy */}
          <InputRightElement>
            <IconButton
              bg="transparent"
              aria-label="Copy"
              icon={<CopyIcon />}
              onClick={() => setValue(user?.userInfo?.email)}
            />
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-bold text-slate-600">Semestre Atual</p>
        <Stepper index={user?.userInfo?.semester - 1} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
