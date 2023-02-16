import TarpNavigator from "./TarpNavigator";
import CourseNavigator from "./CourseNavigator";
import Modules from "./Modules";

export default function Tarp() {
  return(
    <div className="container">
      <h1>Welcome to Tarp</h1>
      <div className="row">
        <div className="col-md-2 d-none d-md-block">
          <TarpNavigator active='Dashboard'/>
        </div>
        <div className="col-md-2 d-none d-md-block">
          <CourseNavigator/>
        </div>
        <div className="col-lg-6 col-md-8 col-12">
          <Modules/>
        </div>
        <div className="col-md-2 bg-warning d-none d-lg-block">
          Sidebar
        </div>
      </div>
    </div>
  )
}