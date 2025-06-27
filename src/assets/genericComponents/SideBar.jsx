/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from "react";
import $ from "jquery";
import { Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../js/jquery.slimscroll";
import SidebarData from "./SideBarData";
import SubMenu from "./SubMenu";

export default function Sidebar() {
  useEffect(() => {
    const $slimScrolls = $(".slimscroll");

    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll({
        height: "auto",
        width: "100%",
        position: "right",
        size: "7px",
        color: "#ccc",
        wheelStep: 10,
        touchScrollStep: 100,
      });
      const wHeight = $(window).height() - 60;
      $slimScrolls.height(wHeight);
      $(".sidebar .slimScrollDiv").height(wHeight);
      $(window).resize(() => {
        const rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight);
        $(".sidebar .slimScrollDiv").height(rHeight);
      });
    }

    function init() {
      $("#sidebar-menu a").on("click", (e) => {
        if ($(this).parent().hasClass("submenu")) {
          e.preventDefault();
        }
        if (!$(this).hasClass("subdrop")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("subdrop");
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
        } else if ($(this).hasClass("subdrop")) {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
        }
      });
      $("#sidebar-menu ul li.submenu a.active")
        .parents("li:last")
        .children("a:first")
        .addClass("active")
        .trigger("click");
    }

    // Sidebar Initiate
    init();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(SidebarData);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter and find matching items and their parents
    const results = SidebarData.flatMap((item) => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return [item];
      }
      if (item.subNav) {
        const matchingSubNav = item.subNav.find((subItem) =>
          subItem.title.toLowerCase().includes(value.toLowerCase())
        );
        if (matchingSubNav) {
          return [{ ...item, subNav: [matchingSubNav] }];
        }
      }
      return [];
    });

    setSearchResults(results);
  };
  return (
    <div className="sidebar shadow" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <div className="sidebar-search">
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              name="pin"
            />
            <FiSearch />
          </div>
          <ul className="sidebar-tabs-padding">
            {searchResults.length > 0 ? (
              <>
                {searchResults?.map((item) => (
                  <SubMenu key={item?.id} item={item} />
                ))}
              </>
            ) : (
              <li>
                <Link to={{ pathname: "" }}>
                  <span>No record found</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
