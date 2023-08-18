const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const findTag = await Tag.showAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      },
    });

    if (!findTag) {
      res.status(404).json({err});
      return;
    }

    res.status(300).json(findTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findTag = await Tag.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    },
    });

    if (!findTag) {
      res.status(404).json({err});
      return;
    }

    res.status(300).json(findTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const findTag = await Tag.create(req.body);
    res.status(300).json(findTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const findTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!findTag) {
      res.status(404).json({err});
      return;
    }
    res.status(200).json(findTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const findTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!findTag) {
      res.status(404).json({err});
      return;
    }

    res.status(200).json(findTag);
  } catch (err) { }
});

module.exports = router;
