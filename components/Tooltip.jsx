import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tooltip = ({ content, children, ...rest }) => {
  const tippyProps = {
    placement: "top",
    interactive: true,
    ...rest,
  };

  return (
    <Tippy
      {...tippyProps}
      content={<div className="ignore-react-onclickoutside">{content}</div>}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
