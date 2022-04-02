const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  console.log("ID we want to reference", req.params)
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then((categories) => res.json(categories))
  .catch((err ) => res.status(400).json(err))
});

router.post('/', (req, res) => {
  console.log("User Input into DB", req.body)
  // create a new category
  Category.create(req.body)
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
