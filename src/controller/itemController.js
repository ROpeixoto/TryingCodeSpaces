let items = ['Item 1', 'Item 2', 'Item 3'];

module.exports = {
  getItems: (req, res) => {
    res.json(items);
  },

  createItem: (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.status(201).json({ message: 'Item criado', item: newItem });
  },

  updateItem: (req, res) => {
    const id = req.params.id;
    items[id] = req.body.item;
    res.json({ message: 'Item atualizado', item: items[id] });
  },

  patchItem: (req, res) => {
    const id = req.params.id;
    if (req.body.item) items[id] = req.body.item;
    res.json({ message: 'Item parcialmente atualizado', item: items[id] });
  },

  deleteItem: (req, res) => {
    const id = req.params.id;
    const deletedItem = items.splice(id, 1);
    res.json({ message: 'Item deletado', item: deletedItem });
  }
};