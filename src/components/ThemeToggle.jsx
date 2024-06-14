import { useEffect } from "react";
import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", colorMode);
  }, [colorMode]);

  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      bottom="1rem"
      right="1rem"
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeToggle;
