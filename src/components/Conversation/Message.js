import React from "react";
import { Box, Stack } from "../../../node_modules/@mui/material/index";
import { Chat_History } from "../../data/index";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // image msg
                  return <MediaMsg el={el} menu={menu} />;

                case "doc":
                  // document msg
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  // Link msg
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  // Reply msg
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  // Text msg
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
