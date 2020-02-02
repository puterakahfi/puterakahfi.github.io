// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const training = require('./src/data/training.json');


module.exports = function (api) {
  api.loadSource(actions => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    const collection = actions.addCollection({
      typeName: 'Trainings'
    })

    for (const item of training.items) {
      collection.addNode({
        id: item.id,
        title: item.title,
        mentor: item.mentor,
        description: item.description,
        image: item.image
      })
    }

  })
}