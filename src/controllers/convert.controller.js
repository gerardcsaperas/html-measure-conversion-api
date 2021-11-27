function convert(req, res) {
  try {
    const {
      elementWidth,
      elementHeight,
      currentViewportWidth,
      currentViewportHeight,
      targetViewportWidth,
      targetViewportHeight
    } = req.query;

    if (!elementHeight && !elementWidth) {
      return res.status(400).send(`You should at least pass your element's widht or height.`)
    }

    /** parse all query parameters to number */
    for (let parameter in req.query) {
      req.query[parameter] = parseInt(req.query[parameter])
    }

    /** build response object */
    const response = {
      width: undefined,
      height: undefined
    }

    if (
      elementWidth &&
      currentViewportWidth &&
      targetViewportWidth
    ) {
      response.width = elementWidth * targetViewportWidth / currentViewportWidth
    }

    if (
      elementHeight &&
      currentViewportHeight &&
      targetViewportHeight
    ) {
      response.height = elementHeight * targetViewportHeight / currentViewportHeight
    }

    if (!response.width && !response.height) {
      return res.status(400).send(`
      We don't have enough data. In order to convert your HTML element's height and/or width, we need to know the height/width of the current screen it's being displayed on, and the height/width of the target screen.
      
      Keep in mind you should only provide numbers in the request query parameters.
      `)
    }

    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(`There was an error converting your measures. ${e.message}`)
  }
}

module.exports = {
  convert
}