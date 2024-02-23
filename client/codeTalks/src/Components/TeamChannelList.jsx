import React from "react";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error , try again
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels " : "Messages "}Loading...
        </p>
      </div>
    );
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title mt-4 text-2xl font-bold">
          {type === "team" ? "Channels " : "Direct Messages "}Loading...
        </p>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
