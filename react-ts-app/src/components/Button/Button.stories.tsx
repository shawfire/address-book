import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { MdSave, MdCancel } from "react-icons/md";
import { theme } from "../../theme/theme";

export default {
  title: "Button"
};

export const saveButton = () => (
  <Button alt="Save this address" onClick={action("clicked")}>
    <MdSave />
  </Button>
);

saveButton.story = {
  name: "Save Button"
};

export const cancelButton = () => (
  <Button
    alt="Cancel edit"
    button={theme.deleteButton}
    onClick={action("clicked")}
  >
    <MdCancel />
  </Button>
);

cancelButton.story = {
  name: "Cancel Button"
};
