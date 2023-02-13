function TarpNavigator(active = 'Dashboard') {
  const links = [
    'Northeastern',
    'Dashboard',
    'Courses',
    'Calendar',
    'Inbox',
    'Account'
  ]
  return(
    `
      <div class="list-group">
      ${
         links.map(link => `
            <a class="list-group-item ${active === link ? 'active' : ''}"
                href="#">${link}
            </a>`).join('')
       }
  </div>
    `
  )
}