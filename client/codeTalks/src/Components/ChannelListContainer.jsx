import React from "react";
import ChannelSearch from "./ChannelSearch";
import Cookies from "universal-cookie";
import { ChannelList } from "stream-chat-react";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";
const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/610/610413.png"
          width={"30"}
          height={"30"}
        ></img>
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png"
          width={"30"}
          height={"30"}
        ></img>
      </div>
    </div>
  </div>
);

const CHeader = () => (
  <div className="channel-list__header p-5">
    <p className="channel-list__header__text">Coding Talks</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(PreviewProps) => (
            <TeamChannelPreview {...PreviewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(PreviewProps) => (
            <TeamChannelPreview {...PreviewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
