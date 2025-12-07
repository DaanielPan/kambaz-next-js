"use client";

import { useState, useEffect } from "react";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";

import * as client from "../../client";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");

  const modulesState = useSelector((state: any) => state.modulesReducer);
  const modules = Array.isArray(modulesState?.modules) ? modulesState.modules : [];
  const dispatch = useDispatch();

  // FETCH MODULES FROM SERVER
  const fetchModules = async () => {
    if (!cid) return;
    try {
      const modulesData = await client.findModulesForCourse(cid as string);
      // Ensure we always set an array
      if (Array.isArray(modulesData)) {
        dispatch(setModules(modulesData));
      } else {
        console.error("API returned non-array data:", modulesData);
        dispatch(setModules([]));
      }
    } catch (error) {
      console.error("Error fetching modules:", error);
      // Set empty array on error to prevent .map() errors
      dispatch(setModules([]));
    }
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  // CREATE A MODULE FOR THIS COURSE
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    try {
      const newModule = { name: moduleName, course: cid };
      const module = await client.createModuleForCourse(cid as string, newModule);
      dispatch(setModules([...modules, module]));
      setModuleName("");
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  // DELETE MODULE — server + state
  const onRemoveModule = async (moduleId: string) => {
    if (!cid) return;
    try {
      await client.deleteModule(cid, moduleId);
      dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  // ⭐⭐⭐ GREEN CODE — UPDATE MODULE ON SERVER
  const onUpdateModule = async (module: any) => {
    if (!cid) return;
    try {
      await client.updateModule(cid, module);
      const newModules = modules.map((m: any) =>
        m._id === module._id ? module : m
      );
      dispatch(setModules(newModules));
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />

      <br />
      <br />
      <br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroup.Item
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />

              {/* NON-EDIT MODE */}
              {!module.editing && module.name}

              {/* EDIT MODE */}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>

            {module.lessons && Array.isArray(module.lessons) && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
