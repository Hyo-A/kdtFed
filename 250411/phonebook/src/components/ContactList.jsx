import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
