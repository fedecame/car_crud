import React from "react";

const ClickableIcon = ({
  IconComponent,
  fillColor,
  onClickCallback,
  classes,
}) => (
  <IconComponent
    fill={fillColor}
    onClick={onClickCallback}
    className={classes}
  />
);

export default ClickableIcon;
