function admin(req, res, next) {
  if (!req.user.roles.includes('admin'))
    return res.status(403).send({
      success: false,
      error: 'Access Denied!',
    });

  next();
}

function developer(req, res, next) {
  if (!req.user.roles.includes('developer'))
    return res.status(403).send({
      success: false,
      error: 'Access Denied!',
    });

  next();
}

function client(req, res, next) {
  if (!req.user.roles.includes('client'))
    return res.status(403).send({
      success: false,
      error: 'Access Denied!',
    });

  next();
}

// Exporting the modules
module.exports = { admin, developer, client };
