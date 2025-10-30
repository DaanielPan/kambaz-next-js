"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

// ✅ Define props interface
interface ModulesControlsProps {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}

// ✅ Accept props here
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: ModulesControlsProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="secondary" id="wd-collapse-all" className="me-1 float-end">
        Collapse All
      </Button>
      <Button variant="secondary" id="wd-view-progress" className="me-1 float-end">
        View Progress
      </Button>

      <Dropdown className="d-inline me-1 float-end">
        <DropdownToggle variant="secondary" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* ✅ + Module Button */}
      <Button
        variant="danger"
        id="wd-add-module-btn"
        className="float-end"
        onClick={handleShow}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      {/* ✅ ModuleEditor Dialog */}
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
