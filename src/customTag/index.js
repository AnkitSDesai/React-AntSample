import React from "react";

import { Tag, Tooltip } from "antd";

const customTag = ({ fullTitle, title, children, lean, color }) => (
  <Tooltip title={fullTitle || title}>
    <Tag color={color}>
      {!lean && <strong>{title}: </strong>}
      {children}
    </Tag>
  </Tooltip>
);

customTag.defaultProps = {
  lean: true
};

export default customTag;
