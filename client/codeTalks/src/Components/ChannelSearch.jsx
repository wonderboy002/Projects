import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import {ChannelList, Chat} from "stream-chat-react";
import TeamChannelList from "./TeamChannelList";
const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setQuery(e.target.value);
  }

  async function getChannels(text) {
    try {
      //TODO : fetch chat channels from api
    } catch (e) {
      setQuery("");
    }
  }

  function onSearch(e) {
    setLoading(true);
    getChannels(query);
  }
  return (
    <>
      <div className="channel-search__container">
        <div className="input-div flex justify-center gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-3/4 p-2 rounded-lg outline-none"
            value={query}
            onChange={handleChange}
          />
          <button onClick={onSearch} className="bg-blue-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default ChannelSearch;
