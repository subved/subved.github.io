import { IconCopyStroked } from "@douyinfe/semi-icons";
import { Typography } from "@douyinfe/semi-ui";
import copy from "copy-to-clipboard";

const NowAddress = ({ address }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        flexWrap: "wrap",
        color: "var(--semi-color-text-0)",
      }}
    >
      <span>当前地址:</span>
      <Typography.Text copyable>{address}</Typography.Text>
    </div>
  );
};

export default NowAddress;
