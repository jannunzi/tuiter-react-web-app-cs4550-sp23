import TarpNavigator from "./TarpNavigator.js";
import CourseNavigator from "./CourseNavigator.js";
import Modules from "./Modules.js";

const tarp = $("#tarp")
tarp.append(
  `
  <div class="container">
      <h1>Welcome to Tarp</h1>
      <div class="row">
          <div class="col-md-2 d-none d-md-block">
            ${TarpNavigator('Courses')}
          </div>
          <div class="col-md-2 d-none d-md-block">
            ${CourseNavigator()}
          </div>
          <div class="col-lg-6 col-md-8 col-12">
            ${Modules()}
          </div>
          <div class="col-md-2 bg-warning d-none d-lg-block">
              Sidebar
          </div>
      </div>
  </div>`
)