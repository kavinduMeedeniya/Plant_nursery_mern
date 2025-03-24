import Item from "../model/itemModel.js";
import multer from "multer";
import path from "path";

// Configure Multer for image storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store images in uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  },
});

export const upload = multer({ storage: storage }).single("image"); // Multer middleware for single image upload

// Create item with image upload
export const create = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.filename : null; // Save image filename if available

    const itemExist = await Item.findOne({ description });
    if (itemExist) {
      return res.status(400).json({ message: "Item already exists." });
    }

    const newItem = new Item({ name, description, price, image });
    await newItem.save();
    res.status(200).json({ message: "Item created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const itemData = await Item.find();
    if (!itemData || itemData.length === 0) {
      return res.status(404).json({ message: "Item data not found." });
    }
    res.status(200).json(itemData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get single item by ID
export const getItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const itemExist = await Item.findById(id);
    if (!itemExist) {
      return res.status(404).json({ message: "Item not found." });
    }
    res.status(200).json(itemExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Update item with image
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const itemExist = await Item.findById(id);
    if (!itemExist) {
      return res.status(404).json({ message: "Item not found." });
    }

    const { name, description, price } = req.body;
    const image = req.file ? req.file.filename : itemExist.image; // Keep old image if not updated

    const updatedData = await Item.findByIdAndUpdate(id, { name, description, price, image }, { new: true });
    res.status(200).json({ message: "Item Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Delete item
export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const itemExist = await Item.findById(id);
    if (!itemExist) {
      return res.status(404).json({ message: "Item not found." });
    }
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};




export const increaseStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity." });
    }

    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    item.stock += quantity; // Increase stock quantity
    await item.save();

    res.status(200).json({ message: "Stock updated successfully.", item });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
export const decreaseStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity." });
    }

    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    if (item.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock." });
    }

    item.stock -= quantity; // Decrease stock quantity
    await item.save();

    res.status(200).json({ message: "Stock reduced successfully.", item });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};






export const checkLowStock = async (req, res) => {
  try {
    const lowStockItems = await Item.find({ stock: { $lt: 5 } });

    if (!lowStockItems.length) {
      return res.status(200).json({ message: "No items are low on stock." });
    }

    res.status(200).json({
      message: "Low stock alert!",
      items: lowStockItems.map((item) => ({
        name: item.name,
        stock: item.stock,
      })),
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};