import { Action } from '@ngrx/store';
import { Project } from '../Models/project';
export class ProjectActions {
  public static LOAD_PROJECTS_FOR_UNIT = 'LOAD_PROJECTS_FOR_UNIT';
  public static LOAD_PROJECTS_FOR_ASSIGNMENT = 'LOAD_PROJECTS_FOR_ASSIGNMENT';
  public static LOAD_PROJECTS_FOR_UNIT_SUCCESS = 'LOAD_PROJECTS_FOR_UNIT_SUCCESS';
  public static LOAD_PROJECTS_FOR_ASSIGNMENT_SUCCESS = 'LOAD_PROJECTS_FOR_ASSIGNMENT_SUCCESS';
  public static LOAD_PROJECTS_FOR_UNIT_FAIL = 'LOAD_PROJECTS_FOR_UNIT_FAIL';
  public static LOAD_PROJECTS_FOR_ASSIGNMENT_FAIL = 'LOAD_PROJECTS_FOR_ASSIGNMENT_FAIL';
  public static DELETE_PROJECT = 'DELETE_PROJECT';
  public static DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
  public static DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';
  public static LOAD_PROJECT = 'LOAD_PROJECT';
  public static LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
  public static LOAD_PROJECT_FAIL = 'LOAD_PROJECT_FAIL';

  public static loadProjectsForUnit(unit_id: number): Action {
    return {
      type: ProjectActions.LOAD_PROJECTS_FOR_UNIT,
      payload: unit_id
    }
  }

  public static loadProjectsForAssignment(assignment_id: number): Action {
    return {
      type: ProjectActions.LOAD_PROJECTS_FOR_ASSIGNMENT,
      payload: assignment_id
    }
  }

  public static loadProjectsForUnitSuccess(projects: Project[], unit_id: number): Action {
    return {
      type: ProjectActions.LOAD_PROJECTS_FOR_UNIT_SUCCESS,
      payload: {
        projects: projects,
        unit_id: unit_id
      }
    }
  }

  public static loadProjectsForAssignmentSuccess(projects: Project[], assignment_id: number): Action {
    return {
      type: ProjectActions.LOAD_PROJECTS_FOR_ASSIGNMENT_SUCCESS,
      payload: {
        projects: projects,
        assignment_id: assignment_id
      }
    }
  }

  public static loadProjectsForUnitFail(): Action {
   return {
     type: ProjectActions.LOAD_PROJECTS_FOR_UNIT_FAIL
   }
  }

  public static loadProjectsForAssignmentFail(): Action {
    return {
      type: ProjectActions.LOAD_PROJECTS_FOR_ASSIGNMENT_FAIL
    }
  }

  public static deleteProject(project_id: number): Action {
    return {
      type: ProjectActions.DELETE_PROJECT,
      payload: project_id
    }
  }

  public static deleteProjectSuccess(project_id: number): Action {
    return {
      type: ProjectActions.DELETE_PROJECT_SUCCESS,
      payload: project_id
    }
  }

  public static deleteProjectFail(): Action {
    return {
      type: ProjectActions.DELETE_PROJECT_FAIL
    }
  }

  public static loadProject(project_id: number): Action {
    return {
      type: ProjectActions.LOAD_PROJECT,
      payload: project_id
    }
  }

  public static loadProjectSuccess(new_project: Project): Action {
    return {
      type: ProjectActions.LOAD_PROJECT_SUCCESS,
      payload: new_project
    }
  }

  public static loadProjectFail(): Action {
    return {
      type: ProjectActions.LOAD_PROJECT_FAIL
    }
  }

}