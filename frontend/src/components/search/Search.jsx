import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Form className="d-flex ms-auto">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
  );
};

export default Search;
