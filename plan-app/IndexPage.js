var isChecked = function( plan ) {
  return plan.isDefault ? "checked" : ""
}

var renderPlan = function( plan ) {
  return `<li>
    <span>${ plan.planName }</span>
    <span>
      <input type="radio" name="defaultPlan" value="${ plan.planName }" ${ isChecked( plan ) }>
    </span>
  </li>`
}

exports.render  = function( plans ) {
  return `<!doctype html>

    <head>
      <title>Plan App</title>
    </head>

    <body>
      <h1>Hello, World</h1>
      <form action="/plans" method="POST">
        <ul>${ plans.map( renderPlan ).join("") }</ul>
        <button>Update</button>
      </form>
    </body>
  `
}
