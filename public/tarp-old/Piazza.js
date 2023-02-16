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
            ${CourseNavigator('Piazza')}
          </div>
          <div class="col-lg-6 col-md-12">
            <h1>Piazza</h1>
          </div>
      </div>
  </div>`
)